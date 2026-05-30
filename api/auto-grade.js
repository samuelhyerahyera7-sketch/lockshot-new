// Lockshot Auto-Grade — runs every hour via Vercel cron
// Finds all pending predictions for finished matches and awards points automatically

module.exports = async function handler(req, res) {
  const SUPABASE_URL    = process.env.SUPABASE_URL    || "https://asyytiinwznouwiqjeol.supabase.co";
  const SERVICE_KEY     = process.env.SUPABASE_SERVICE_KEY;
  const SPORTS_API_KEY  = process.env.SPORTS_API_KEY  || "d092f7d41e2ce9b43bbc6b0daa8926f8";

  if (!SERVICE_KEY) return res.status(500).json({
    error: "SUPABASE_SERVICE_KEY not configured",
    envKeys: Object.keys(process.env).filter(k => !k.includes("npm") && !k.includes("PATH") && !k.includes("NODE"))
  });

  const sb  = { "apikey": SERVICE_KEY, "Authorization": `Bearer ${SERVICE_KEY}`, "Content-Type": "application/json" };
  const api = { "x-apisports-key": SPORTS_API_KEY };

  // ── 1. Fetch all pending predictions ──────────────────────────
  const predsRes = await fetch(
    `${SUPABASE_URL}/rest/v1/sports_predictions?status=eq.pending&select=id,user_id,match,fixture_id,sport,score_pred,possession,first_scorer,corners_pred,cards_pred,minute_pred,motm_pred`,
    { headers: sb }
  );
  const preds = await predsRes.json();
  if (!Array.isArray(preds) || !preds.length) return res.json({ message: "No pending predictions", graded: 0 });

  // ── 2. Group by match ─────────────────────────────────────────
  const byMatch = {};
  preds.forEach(p => {
    if (!byMatch[p.match]) byMatch[p.match] = { fixture_id: p.fixture_id, sport: p.sport, preds: [] };
    byMatch[p.match].preds.push(p);
    if (p.fixture_id && !byMatch[p.match].fixture_id) byMatch[p.match].fixture_id = p.fixture_id;
  });

  const graded = [];

  for (const [matchName, group] of Object.entries(byMatch)) {
    if (group.sport && group.sport !== "soccer") continue;

    let fixtureId = group.fixture_id;

    // ── 3. Look up fixture ID if missing ───────────────────────
    if (!fixtureId) {
      try {
        const parts   = matchName.split(" vs ");
        const homePart = parts[0]?.trim().split(" ")[0];
        const awayPart = parts[1]?.trim().split(" ")[0];
        if (!homePart || !awayPart) continue;

        for (const teamId of [85, 42]) {
          const r = await fetch(`https://v3.football.api-sports.io/fixtures?team=${teamId}&season=2025&last=20`, { headers: api }).then(x => x.json());
          const f = r.response?.find(f =>
            (f.teams.home.name.toLowerCase().includes(homePart.toLowerCase()) || f.teams.away.name.toLowerCase().includes(homePart.toLowerCase())) &&
            (f.teams.home.name.toLowerCase().includes(awayPart.toLowerCase()) || f.teams.away.name.toLowerCase().includes(awayPart.toLowerCase()))
          );
          if (f) { fixtureId = String(f.fixture.id); break; }
        }
      } catch {}
      if (!fixtureId) continue;
    }

    // ── 4. Fetch match data from API Sports ────────────────────
    try {
      const [fixRes, statsRes, evRes] = await Promise.all([
        fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, { headers: api }).then(r => r.json()),
        fetch(`https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixtureId}`, { headers: api }).then(r => r.json()).catch(() => null),
        fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${fixtureId}`, { headers: api }).then(r => r.json()).catch(() => null)
      ]);

      const fix = fixRes.response?.[0];
      if (!fix) continue;

      // Skip if match not finished yet
      if (!["FT", "AET", "PEN"].includes(fix.fixture.status.short)) continue;

      // Score
      const scoreActual = `${fix.goals.home ?? 0} - ${fix.goals.away ?? 0}`;

      // Possession & corners
      let homePoss = null, totalCorners = null;
      if (statsRes?.response?.length) {
        const hS = statsRes.response.find(t => t.team.id === fix.teams.home.id)?.statistics || [];
        const aS = statsRes.response.find(t => t.team.id === fix.teams.away.id)?.statistics || [];
        homePoss    = parseInt(hS.find(s => s.type === "Ball Possession")?.value) || null;
        const hc    = parseInt(hS.find(s => s.type === "Corner Kicks")?.value)    || 0;
        const ac    = parseInt(aS.find(s => s.type === "Corner Kicks")?.value)    || 0;
        totalCorners = String(hc + ac);
      }

      // Cards, first scorer, minute
      let totalCards = null, firstScorer = null, firstMinute = null;
      if (evRes?.response?.length) {
        totalCards = String(evRes.response.filter(e => e.type === "Card").length);
        const goals = evRes.response
          .filter(e => e.type === "Goal" && e.detail !== "Own Goal")
          .sort((a, b) => a.time.elapsed - b.time.elapsed);
        if (goals.length) { firstScorer = goals[0].player?.name; firstMinute = String(goals[0].time.elapsed); }
      }

      // ── 5. Grade each prediction and save to Supabase ─────────
      for (const p of group.preds) {
        let pts = 0;
        const norm = s => s?.replace(/\s/g, "");
        const last = n => n?.trim().split(" ").pop().toLowerCase();

        if (scoreActual && p.score_pred && norm(p.score_pred) === norm(scoreActual)) pts += 10;
        if (homePoss != null && p.possession) {
          const uP = parseInt(p.possession);
          if (!isNaN(uP) && (uP >= 50) === (homePoss >= 50)) pts += 5;
        }
        if (totalCorners && p.corners_pred && p.corners_pred !== "—" && p.corners_pred.trim() === totalCorners) pts += 3;
        if (totalCards  && p.cards_pred   && p.cards_pred   !== "—" && p.cards_pred.trim()   === totalCards)  pts += 3;
        if (firstScorer && p.first_scorer && p.first_scorer !== "—" && last(p.first_scorer) === last(firstScorer)) pts += 4;
        if (firstMinute && p.minute_pred  && p.minute_pred  !== "—") {
          const uM = parseInt(p.minute_pred), aM = parseInt(firstMinute);
          if (!isNaN(uM) && !isNaN(aM) && Math.abs(uM - aM) <= 5) pts += 2;
        }

        await fetch(`${SUPABASE_URL}/rest/v1/sports_predictions?id=eq.${p.id}`, {
          method: "PATCH",
          headers: { ...sb, "Prefer": "return=minimal" },
          body: JSON.stringify({ pts_awarded: pts, status: "graded" })
        });

        graded.push({ match: matchName, player: p.user_id, pts });
      }

    } catch (err) {
      console.error(`[AutoGrade] Error on ${matchName}:`, err.message);
    }
  }

  console.log(`[AutoGrade] Done — graded ${graded.length} predictions`);
  return res.json({ graded: graded.length, results: graded });
};
