const topbar = document.querySelector(".topbar");
const brandLogo = document.querySelector(".topbar .brand");
const drawer = document.querySelector("[data-cart-drawer]");
const scrim = document.querySelector("[data-scrim]");
const openCartButton = document.querySelector("[data-open-cart]");
const closeCartButton = document.querySelector("[data-close-cart]");
const cartCount = document.querySelector("[data-cart-count]");
const slipPrice = document.querySelector("[data-slip-price]");
const slipName = document.querySelector("[data-slip-name]");
const slipQty = document.querySelector("[data-slip-qty]");
const confirmAdd = document.querySelector("[data-confirm-add]");
const checkoutItems = document.querySelector("[data-checkout-items]");
const checkoutDetail = document.querySelector("[data-checkout-detail]");
const checkoutTotal = document.querySelector("[data-checkout-total]");
const checkoutStatus = document.querySelector("[data-checkout-status]");
const checkoutSection = document.querySelector("#checkout");
const checkoutQty = document.querySelector("[data-checkout-qty]");
const gameSection = document.querySelector("#game");
const startGameButtons = document.querySelectorAll("[data-start-game]");
const payLabel = document.querySelector("[data-pay-label]");
const loginButton = document.querySelector(".login-button");
const accountState = document.querySelector("[data-account-state]");
const accountDetail = document.querySelector("[data-account-detail]");
const authMessage = document.querySelector("[data-auth-message]");
const signOutButton = document.querySelector("[data-sign-out]");
const authCards = document.querySelectorAll(".auth-card");
const gameStatus = document.querySelector("[data-game-status]");
const gameNote = document.querySelector("[data-game-note]");
const spotBoard = document.querySelector("[data-spot-board]");
const spotMarker = document.querySelector("[data-spot-marker]");
const attemptsLeft = document.querySelector("[data-attempts-left]");
const currentScoreLabel = document.querySelector("[data-current-score]");
const playerHighScoreLabel = document.querySelector("[data-player-high-score]");
const submitSpotButton = document.querySelector("[data-submit-spot]");
const penaltyBoard = document.querySelector("[data-penalty-board]");
const penaltyBall = document.querySelector("[data-penalty-ball]");
const penaltyTap = document.querySelector("[data-penalty-tap]");
const tapPop = document.querySelector("[data-tap-pop]");
const penaltyNote = document.querySelector("[data-penalty-note]");
const penaltyAttemptsLeft = document.querySelector("[data-penalty-attempts-left]");
const penaltyShotCount = document.querySelector("[data-penalty-shot-count]");
const penaltyCurrentScoreLabel = document.querySelector("[data-penalty-current-score]");
const penaltyHighScoreLabel = document.querySelector("[data-penalty-high-score]");
const resetPenaltyButton = document.querySelector("[data-reset-penalty]");
const penaltyStartScreen = document.querySelector("[data-penalty-start-screen]");
const penaltyEndScreen = document.querySelector("[data-penalty-end-screen]");
const startPenaltyButtons = document.querySelectorAll("[data-start-penalty]");
const buyMoreTriesButton = document.querySelector("[data-buy-more-tries]");
const penaltyEndText = document.querySelector("[data-penalty-end-screen] p");
const penaltyFinalScore = document.querySelector("[data-penalty-final-score]");
const gearBoard = document.querySelector("[data-gear-board]");
const gearDial = document.querySelector("[data-gear-dial]");
const gearNeedle = document.querySelector("[data-gear-needle]");
const gearRpm = document.querySelector("[data-gear-rpm]");
const gearPop = document.querySelector("[data-gear-pop]");
const gearNote = document.querySelector("[data-gear-note]");
const gearRoundsLeft = document.querySelector("[data-gear-rounds-left]");
const gearShiftCount = document.querySelector("[data-gear-shift-count]");
const gearScoreLabel = document.querySelector("[data-gear-score]");
const gearHighScoreLabel = document.querySelector("[data-gear-high-score]");
const gearStartScreen = document.querySelector("[data-gear-start-screen]");
const gearEndScreen = document.querySelector("[data-gear-end-screen]");
const startGearButtons = document.querySelectorAll("[data-start-gear]");
const gearTapButton = document.querySelector("[data-gear-tap]");
const buyMoreGearButton = document.querySelector("[data-buy-more-gear]");
const gearEndText = document.querySelector("[data-gear-end-screen] p");
const gearFinalScore = document.querySelector("[data-gear-final-score]");
const driftBoard = document.querySelector("[data-drift-board]");
const playerLine = document.querySelector("[data-player-line]");
const driftPop = document.querySelector("[data-drift-pop]");
const driftNote = document.querySelector("[data-drift-note]");
const driftRoundsLeft = document.querySelector("[data-drift-rounds-left]");
const driftScoreLabel = document.querySelector("[data-drift-score]");
const driftHighScoreLabel = document.querySelector("[data-drift-high-score]");
const driftStartScreen = document.querySelector("[data-drift-start-screen]");
const driftEndScreen = document.querySelector("[data-drift-end-screen]");
const startDriftButtons = document.querySelectorAll("[data-start-drift]");
const submitDriftButton = document.querySelector("[data-submit-drift]");
const buyMoreDriftButton = document.querySelector("[data-buy-more-drift]");
const driftEndText = document.querySelector("[data-drift-end-screen] p");
const driftFinalScore = document.querySelector("[data-drift-final-score]");
const menuOverlay = document.querySelector("[data-menu-overlay]");
const openMenuButton = document.querySelector("[data-open-menu]");
const closeMenuButton = document.querySelector("[data-close-menu]");
const weeklyCountdownFields = {
  days: document.querySelector("[data-weekly-days]"),
  hours: document.querySelector("[data-weekly-hours]"),
  minutes: document.querySelector("[data-weekly-minutes]"),
  seconds: document.querySelector("[data-weekly-seconds]")
};
const monthlyCountdownFields = {
  days: document.querySelector("[data-monthly-days]"),
  hours: document.querySelector("[data-monthly-hours]"),
  minutes: document.querySelector("[data-monthly-minutes]"),
  seconds: document.querySelector("[data-monthly-seconds]")
};
const cashpoolCountdownFields = {
  days: document.querySelector("[data-cashpool-days]"),
  hours: document.querySelector("[data-cashpool-hours]"),
  minutes: document.querySelector("[data-cashpool-minutes]"),
  seconds: document.querySelector("[data-cashpool-seconds]")
};
const scoreboardPenalty = document.querySelector("[data-scoreboard-penalty]");
const scoreboardGear = document.querySelector("[data-scoreboard-gear]");
const scoreboardDrift = document.querySelector("[data-scoreboard-drift]");
const scoreboardBoost = document.querySelector("[data-scoreboard-boost]");
const accountScorePenalty = document.querySelector("[data-account-score-penalty]");
const accountScoreGear = document.querySelector("[data-account-score-gear]");
const accountScoreDrift = document.querySelector("[data-account-score-drift]");
const accountScoreBoost = document.querySelector("[data-account-score-boost]");
const accountTokens = document.querySelector("[data-account-tokens]");
const accountTokenNote = document.querySelector("[data-account-token-note]");
const accountTokenType = document.querySelector("[data-account-token-type]");
const accountTokenPlay = document.querySelector("[data-account-token-play]");
const accountWeeklyTokenCount = document.querySelector("[data-account-weekly-token-count]");
const accountMonthlyTokenCount = document.querySelector("[data-account-monthly-token-count]");
const accountWeeklyTokenNote = document.querySelector("[data-account-weekly-token-note]");
const accountMonthlyTokenNote = document.querySelector("[data-account-monthly-token-note]");
const accountWeeklyPlay = document.querySelector("[data-account-weekly-play]");
const accountMonthlyPlay = document.querySelector("[data-account-monthly-play]");
const quickPlayPanel = document.querySelector("[data-quick-play-panel]");
const quickPlayTrigger = document.querySelector("[data-quick-play-trigger]");
const quickPlayOptions = document.querySelector("[data-quick-play-options]");
const quickTotalCount = document.querySelector("[data-quick-total-count]");
const quickPlayWeekly = document.querySelector("[data-quick-play-weekly]");
const quickPlayMonthly = document.querySelector("[data-quick-play-monthly]");
const quickWeeklyCount = document.querySelector("[data-quick-weekly-count]");
const quickMonthlyCount = document.querySelector("[data-quick-monthly-count]");
const accountMoneyWon = document.querySelector("[data-account-money-won]");
const accountPendingWon = document.querySelector("[data-account-pending-won]");
const accountMoneyNote = document.querySelector("[data-account-money-note]");
const boostBoard = document.querySelector("[data-boost-board]");
const boostLine = document.querySelector("[data-boost-line]");
const boostJet = document.querySelector("[data-boost-jet]");
const boostMultiplierLabel = document.querySelector("[data-boost-multiplier]");
const boostPanelMultiplier = document.querySelector("[data-boost-panel-multiplier]");
const boostRiskLabel = document.querySelector("[data-boost-risk]");
const boostPop = document.querySelector("[data-boost-pop]");
const boostNote = document.querySelector("[data-boost-note]");
const boostRoundsLeft = document.querySelector("[data-boost-rounds-left]");
const boostScoreLabel = document.querySelector("[data-boost-score]");
const boostHighScoreLabel = document.querySelector("[data-boost-high-score]");
const boostStartScreen = document.querySelector("[data-boost-start-screen]");
const boostEndScreen = document.querySelector("[data-boost-end-screen]");
const startBoostButtons = document.querySelectorAll("[data-start-boost]");
const boostLockScoreButton = document.querySelector("[data-boost-lock-score]");
const buyMoreBoostButton = document.querySelector("[data-buy-more-boost]");
const boostEndText = document.querySelector("[data-boost-end-screen] p");
const boostFinalScore = document.querySelector("[data-boost-final-score]");
const heroKicker = document.querySelector("[data-hero-kicker]");
const heroTitle = document.querySelector("[data-hero-title]");
const heroButton = document.querySelector("[data-hero-button]");
const idealLine = document.querySelector("[data-ideal-line]");
const termsCheck = document.querySelector("[data-terms-check]");
const ageCheck = document.querySelector("[data-age-check]");
const pageRoutes = {
  top: ".hero",
  competitions: "#competitions",
  how: "#how",
  rewards: "#rewards",
  account: "#account",
  checkout: "#checkout",
  game: "#game",
  terms: "#terms",
  privacy: "#privacy"
};
const pageFiles = {
  top: "index.html",
  competitions: "competitions.html",
  account: "account.html",
  checkout: "checkout.html",
  game: "game.html",
  penalty: "penalty.html",
  gear: "gear.html",
  drift: "drift.html",
  boost: "boost.html",
  reaction: "reaction.html",
  circle: "circle.html",
  slice: "slice.html",
  arcade: "arcade.html",
  terms: "terms.html",
  privacy: "privacy.html"
};

const cart = loadCart();
let selectedPrize = { name: "Weekly Giveaway: R2,500", price: 5, basePrice: 5, qty: 1 };
let activeStandingsType = "weekly";
let currentUser = getCurrentUser();
let logoHasPlayed = false;
let paidAttempts = getStoredPaidAttempts();
let markerPosition = null;
let currentScore = null;
let playerHighScore = getPlayerHighScore();
let activeGame = document.body.dataset.defaultGame || "penalty";
let penaltyScore = null;
let penaltyHighScore = getPenaltyHighScore();
let penaltyBallPosition = { x: 50, y: 38 };
let penaltyVelocity = { x: 1.8, y: 1.4 };
let penaltyAnimation = null;
let penaltyShotNumber = 1;
let penaltyRoundScore = 0;
let penaltyTapLocked = false;
let penaltyRoundComplete = false;
let penaltyShowEndScreen = false;
let penaltyAdvanceTimer = null;
let penaltyStarted = false;
let gearStarted = false;
let gearValue = 0;
let gearDirection = 1;
let gearShiftNumber = 1;
let gearRoundScore = 0;
let gearCurrentScore = null;
let gearHighScore = getModeHighScore("Gear");
let gearAnimation = null;
let gearLocked = false;
let gearShowEndScreen = false;
let gearShiftTimer = null;
let gearShiftCountdown = null;
let gearTimeLeft = 10;
let gearZoneCenter = 76;
let gearZoneWidth = 10;
let driftStarted = false;
let driftReady = false;
let driftDrawing = false;
let driftPoints = [];
let driftCountdown = 5;
let driftCountdownTimer = null;
let driftRoundTimer = null;
let currentDriftLine = null;
let driftScore = null;
let driftHighScore = getModeHighScore("Drift");
let boostStarted = false;
let boostRunning = false;
let boostCrashed = false;
let boostMultiplier = 1;
let boostCrashAt = 2.4;
let boostWarningLevel = 0;
let boostScore = null;
let boostHighScore = getModeHighScore("Boost");
let boostAnimation = null;
let boostStartedAt = 0;
let activeSportsFilter = "soccer";
let sportsRefreshTimer = null;
const weeklyEndsAt = Date.now() + 2 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 60 * 1000;
const monthlyEndsAt = Date.now() + 26 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 60 * 1000;
const heroSlides = [
  { key: "weekly", kicker: "Weekly cash giveaway", title: "R2,500 every week", button: "Enter Weekly", href: "competitions.html" },
  { key: "monthly", kicker: "Monthly big-prize giveaway", title: "R10,000 every month", button: "Enter Monthly", href: "competitions.html" },
  { key: "sports", kicker: "Sports competition", title: "Sports Predict", button: "Try Sports Predict", href: "sports-iq.html" }
];
const cashpoolGameRotation = [
  "Penalty Lock",
  "Gear Shift Lock",
  "Timer Lock",
  "Circle Lock",
  "Boost Lock",
  "Slice Lock"
];
const driftLineVariants = [
  { path: "M8 72 C22 36, 40 34, 54 50 S78 80, 92 25", fn: (x) => 55 + 24 * Math.sin((x - 12) / 15) - 0.28 * (x - 50) },
  { path: "M7 30 C24 62, 38 76, 52 52 S78 22, 93 58", fn: (x) => 51 - 21 * Math.sin((x - 6) / 14) + 0.18 * (x - 50) },
  { path: "M8 58 C20 24, 38 26, 48 44 C62 72, 76 76, 92 38", fn: (x) => 50 + 22 * Math.sin((x - 2) / 11) * Math.max(0.35, 1 - Math.abs(x - 52) / 75) },
  { path: "M9 79 C20 70, 28 42, 43 42 C58 42, 61 72, 75 69 C84 67, 87 43, 93 31", fn: (x) => 58 + 18 * Math.sin((x - 20) / 8) - 0.2 * (x - 55) },
  { path: "M6 46 C19 18, 34 17, 48 39 C62 62, 73 61, 94 20", fn: (x) => 41 + 23 * Math.sin((x - 6) / 17) - 0.31 * (x - 50) },
  { path: "M7 84 C18 54, 30 55, 43 69 C59 86, 69 35, 93 44", fn: (x) => 65 + 20 * Math.sin((x - 28) / 9) * Math.max(0.4, 1 - Math.abs(x - 55) / 70) },
  { path: "M8 24 C22 42, 32 21, 45 34 C58 48, 67 79, 92 67", fn: (x) => 45 + 19 * Math.sin((x + 11) / 10) + 0.27 * (x - 50) },
  { path: "M6 66 C20 72, 30 30, 45 32 C62 34, 70 64, 94 28", fn: (x) => 49 + 25 * Math.sin((x - 15) / 12) - 0.12 * (x - 50) }
];
let activeHeroSlide = 0;
let lastDriftLineIndex = -1;
let _sportsTickets = [];
let _activeTicketIdx = 0;

hydrateCartFromUrl();
hydratePaidAttemptsFromUrl();

function formatRand(value) {
  return `R${Number(value).toFixed(2)}`;
}

function getCurrentUser() {
  try {
    return JSON.parse(window.localStorage.getItem("lockshotUser") || "null");
  } catch {
    return null;
  }
}

function storeCurrentUser(user) {
  currentUser = user;
  try {
    if (user) {
      window.localStorage.setItem("lockshotUser", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("lockshotUser");
      window.localStorage.removeItem("lockshotCart");
    }
  } catch {
    // Local previews can block storage; the signed-in state still works for this page load.
  }
  document.body.classList.toggle("is-signed-in", Boolean(user?.contact));
  if (!user) {
    cart.clear();
    renderCount();
    renderCheckout();
  }
  renderAccount();
}

function loadDemoAccounts() {
  try {
    return JSON.parse(window.localStorage.getItem("lockshotDemoAccounts") || "{}");
  } catch {
    return {};
  }
}

function storeDemoAccount(account) {
  try {
    const accounts = loadDemoAccounts();
    accounts[account.contact.toLowerCase()] = account;
    window.localStorage.setItem("lockshotDemoAccounts", JSON.stringify(accounts));
  } catch {
    // Demo account storage can fail in restricted previews; the session sign-in still works.
  }
}

function findDemoAccount(contact) {
  const accounts = loadDemoAccounts();
  return accounts[contact.toLowerCase()] || null;
}

function isSignedIn() {
  return Boolean(currentUser && currentUser.contact);
}

function getSupabaseClient() {
  const config = window.LOCKSHOT_SUPABASE;
  const isConfigured = config
    && config.url
    && config.anonKey
    && !config.url.includes("PASTE_")
    && !config.anonKey.includes("PASTE ")
    && !config.anonKey.includes("PASTE_");

  if (!isConfigured || !window.supabase?.createClient) return null;
  if (!window.lockshotSupabaseClient) {
    window.lockshotSupabaseClient = window.supabase.createClient(config.url, config.anonKey);
  }
  return window.lockshotSupabaseClient;
}

async function saveGameScoreToSupabase(game, score) {
  const client = getSupabaseClient();
  const uid = currentUser?.id;
  if (!client) { console.warn("[Lockshot] No Supabase client — score not saved"); return; }
  if (!uid) { console.warn("[Lockshot] No logged-in user — score not saved"); return; }
  if (score == null) return;

  // Insert the round result
  const { error: scoreErr } = await client.from("game_scores").insert({ user_id: uid, game, score });
  if (scoreErr) console.error("[Lockshot] Score save failed:", scoreErr.message, scoreErr.hint);
  else console.log(`[Lockshot] Score saved ✓ — ${game}: ${score}`);

  // Also bump skill_score in profiles if this is a personal best
  await client
    .from("profiles")
    .update({ skill_score: score })
    .eq("id", uid)
    .lt("skill_score", score);
}

async function upsertSupabaseProfile(user) {
  const client = getSupabaseClient();
  if (!client || !user?.id) return;

  // Detect OAuth provider (google / facebook / email)
  const identities = user.identities || [];
  const detectedProvider = identities.length > 0
    ? identities[0].provider
    : (user.app_metadata?.provider || "email");

  await client.from("profiles").upsert({
    id: user.id,
    email: user.email,
    full_name: user.user_metadata?.full_name || user.email || "Lockshot player",
    last_sign_in: new Date().toISOString(),
    provider: detectedProvider,
    updated_at: new Date().toISOString()
    // NOTE: skill_score is NOT set here — it must not be reset on every login
  }, { onConflict: "id", ignoreDuplicates: false });
}

async function loadSupabaseLeaderboard() {
  const client = getSupabaseClient();
  if (!client) return;

  const { data, error } = await client
    .from("profiles")
    .select("full_name, skill_score")
    .order("skill_score", { ascending: false })
    .limit(4);

  if (error || !data?.length) return;

  document.querySelectorAll("[data-leaderboard-row]").forEach((row, index) => {
    const player = data[index];
    if (!player) return;
    const name = row.querySelector("[data-leaderboard-name]");
    const score = row.querySelector("[data-leaderboard-score]");
    if (name) name.textContent = player.full_name || "Lockshot player";
    if (score) score.textContent = Number(player.skill_score || 0);
  });
}

function getUpcomingDemoFixtures(sport = "soccer") {
  const demoFixtures = {
    soccer: [
      { home: "Kaizer Chiefs",     away: "Orlando Pirates",    league: "PSL",           status: "Upcoming", score: "TBC" },
      { home: "Mamelodi Sundowns", away: "Cape Town City",     league: "PSL",           status: "Upcoming", score: "TBC" },
      { home: "Manchester City",   away: "Arsenal",            league: "Premier League", status: "Upcoming", score: "TBC" },
      { home: "Real Madrid",       away: "Barcelona",          league: "La Liga",        status: "Upcoming", score: "TBC" },
    ],
    rugby: [
      // URC Final 2025/26 — today
      { home: "Leinster",               away: "Glasgow Warriors",   league: "URC Final",                 status: "Sat 13 Jun", score: "17:00" },
      // June 2026 Internationals — Round 2 (today / tomorrow)
      { home: "South Africa",           away: "Georgia",            league: "June Internationals",       status: "Sat 13 Jun", score: "17:00" },
      { home: "Australia",              away: "England",            league: "June Internationals",       status: "Sat 13 Jun", score: "12:00" },
      { home: "New Zealand",            away: "France",             league: "June Internationals",       status: "Sun 14 Jun", score: "10:05" },
      { home: "Argentina",              away: "Scotland",           league: "June Internationals",       status: "Sun 14 Jun", score: "00:10" },
      { home: "Ireland",                away: "Fiji",               league: "June Internationals",       status: "Sun 14 Jun", score: "19:10" },
      // June 2026 Internationals — Round 3
      { home: "South Africa",           away: "Georgia",            league: "June Internationals",       status: "Sat 20 Jun", score: "17:00" },
      { home: "Australia",              away: "England",            league: "June Internationals",       status: "Sat 20 Jun", score: "12:00" },
      { home: "Argentina",              away: "Scotland",           league: "June Internationals",       status: "Sat 20 Jun", score: "00:10" },
      { home: "New Zealand",            away: "France",             league: "June Internationals",       status: "Sun 21 Jun", score: "10:05" },
      { home: "Ireland",                away: "Fiji",               league: "June Internationals",       status: "Sun 21 Jun", score: "19:10" },
    ],
    cricket: [
      // International Tests & Series — June 2026
      { home: "England",            away: "West Indies",        league: "Test Series · 2nd Test",    status: "Thu 14 Jun", score: "11:00" },
      { home: "India",              away: "Sri Lanka",          league: "ODI Series · 2nd ODI",      status: "Fri 14 Jun", score: "13:00" },
      { home: "South Africa",       away: "Zimbabwe",           league: "T20I Series · 2nd T20I",    status: "Sun 15 Jun", score: "16:00" },
      { home: "Australia",          away: "Pakistan",           league: "T20I Series · 2nd T20I",    status: "Mon 16 Jun", score: "12:00" },
      { home: "New Zealand",        away: "Bangladesh",         league: "Test Series · 1st Test",    status: "Thu 18 Jun", score: "03:00" },
      { home: "England",            away: "West Indies",        league: "Test Series · 3rd Test",    status: "Thu 26 Jun", score: "11:00" },
      { home: "India",              away: "Sri Lanka",          league: "ODI Series · 3rd ODI",      status: "Sun 22 Jun", score: "13:00" },
      { home: "South Africa",       away: "Zimbabwe",           league: "T20I Series · 3rd T20I",    status: "Tue 17 Jun", score: "16:00" },
    ],
    "formula-one": [
      // 2026 F1 Season – upcoming races (fallback if Ergast API is unavailable)
      { home: "Spanish Grand Prix",       away: "Circuit de Barcelona-Catalunya", league: "Formula One · Round 9",  status: "Sun 14 Jun",  score: "15:00" },
      { home: "Canadian Grand Prix",      away: "Circuit Gilles Villeneuve",      league: "Formula One · Round 10", status: "Sun 21 Jun",  score: "20:00" },
      { home: "Austrian Grand Prix",      away: "Red Bull Ring",                  league: "Formula One · Round 11", status: "Sun 29 Jun",  score: "15:00" },
      { home: "British Grand Prix",       away: "Silverstone Circuit",            league: "Formula One · Round 12", status: "Sun 6 Jul",   score: "16:00" },
      { home: "Hungarian Grand Prix",     away: "Hungaroring",                    league: "Formula One · Round 13", status: "Sun 27 Jul",  score: "15:00" },
      { home: "Belgian Grand Prix",       away: "Circuit de Spa-Francorchamps",   league: "Formula One · Round 14", status: "Sun 3 Aug",   score: "15:00" },
      { home: "Dutch Grand Prix",         away: "Circuit Zandvoort",              league: "Formula One · Round 15", status: "Sun 31 Aug",  score: "15:00" },
      { home: "Italian Grand Prix",       away: "Autodromo di Monza",             league: "Formula One · Round 16", status: "Sun 7 Sep",   score: "15:00" },
    ],
    netball: [
      // Super Netball 2026 (times shown in SAST — games played in Australia)
      { home: "NSW Swifts",               away: "West Coast Fever",     league: "Super Netball 2026",  status: "Sat 13 Jun", score: "09:00" },
      { home: "Melbourne Vixens",         away: "Giants Netball",       league: "Super Netball 2026",  status: "Sun 14 Jun", score: "07:00" },
      { home: "Queensland Firebirds",     away: "Collingwood Magpies",  league: "Super Netball 2026",  status: "Sat 20 Jun", score: "09:00" },
      { home: "Adelaide Thunderbirds",    away: "Sunshine Coast Lightning", league: "Super Netball 2026", status: "Sun 21 Jun", score: "07:00" },
      { home: "NSW Swifts",               away: "Melbourne Vixens",     league: "Super Netball 2026",  status: "Sat 27 Jun", score: "09:00" },
      { home: "West Coast Fever",         away: "Giants Netball",       league: "Super Netball 2026",  status: "Sun 28 Jun", score: "07:00" },
      // International Netball
      { home: "South Africa",             away: "Jamaica",              league: "International",       status: "Fri 19 Jun", score: "18:00" },
      { home: "Australia Diamonds",       away: "England Roses",        league: "Nations Cup",         status: "Sat 20 Jun", score: "12:00" },
    ],
  };
  return (demoFixtures[sport] || demoFixtures.soccer);
}

// Parse "Sat 30 May" + "19:00" → UTC ms for 2026
function parseDemoKickoffMs(dateStr, timeStr) {
  const months = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
  const parts = (dateStr || "").trim().split(/\s+/); // ["Sat","30","May"]
  if (parts.length < 3) return 0;
  const day = parseInt(parts[1], 10);
  const month = months[parts[2]];
  if (isNaN(day) || month === undefined) return 0;
  const [h, m] = (timeStr || "00:00").split(":").map(Number);
  return new Date(2026, month, day, h || 0, m || 0, 0, 0).getTime();
}

const FIXTURE_CACHE_KEY = "lockshotFixtureCache";
const FIXTURE_CACHE_TTL = 20 * 60 * 1000; // 20 minutes

function getCachedFixtures(sport) {
  try {
    const raw = localStorage.getItem(FIXTURE_CACHE_KEY);
    if (!raw) return null;
    const { ts, sport: cachedSport, data } = JSON.parse(raw);
    if (cachedSport !== sport) return null;
    if (Date.now() - ts > FIXTURE_CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function setCachedFixtures(sport, data) {
  try {
    localStorage.setItem(FIXTURE_CACHE_KEY, JSON.stringify({ ts: Date.now(), sport, data }));
  } catch {}
}

async function loadSportsApiFixtures() {
  const status = document.querySelector("[data-sports-api-status]");
  const feed = document.querySelector("[data-sports-fixtures]");
  if (!feed) return;

  if (activeSportsFilter === "formula-one") {
    await loadF1Fixtures();
    return;
  }

  if (activeSportsFilter !== "soccer") {
    renderSportsFixtures(getUpcomingDemoFixtures(activeSportsFilter));
    if (status) status.textContent = realSportsCalendarMessage(activeSportsFilter);
    return;
  }

  // Serve from cache first (20-min TTL)
  const cached = getCachedFixtures("soccer");
  if (cached) {
    renderSportsFixtures(cached);
    const liveCount = cached.filter(f => f.isLive).length;
    if (status) status.textContent = `${liveCount > 0 ? `${liveCount} live · ` : ""}${cached.length} real fixture${cached.length === 1 ? "" : "s"} · refreshes every 20 min.`;
    return;
  }

  if (status) status.textContent = "Loading real fixtures...";

  try {
    const ESPN = "https://site.api.espn.com/apis/site/v2/sports/soccer";

    // Build date strings for next 21 days (covers World Cup opening round)
    const today = new Date();
    const futureDates = Array.from({ length: 21 }, (_, i) => {
      const d = new Date(today.getTime() + i * 86400000);
      return d.toISOString().slice(0, 10).replaceAll("-", "");
    });

    // Fetch today's live scoreboards across active leagues + World Cup upcoming dates
    const leagueUrls = [
      { url: `${ESPN}/rsa.1/scoreboard`,          league: "PSL" },
      { url: `${ESPN}/eng.1/scoreboard`,           league: "Premier League" },
      { url: `${ESPN}/ger.1/scoreboard`,           league: "Bundesliga" },
      { url: `${ESPN}/esp.1/scoreboard`,           league: "La Liga" },
      { url: `${ESPN}/ita.1/scoreboard`,           league: "Serie A" },
      { url: `${ESPN}/fra.1/scoreboard`,           league: "Ligue 1" },
      { url: `${ESPN}/uefa.champions/scoreboard`,  league: "UEFA Champions League" },
    ];
    const wcUrls = futureDates.map(d => ({
      url: `${ESPN}/fifa.world/scoreboard?dates=${d}`,
      league: "FIFA World Cup 2026"
    }));

    const allUrls = [...leagueUrls, ...wcUrls];
    const responses = await Promise.allSettled(
      allUrls.map(({ url }) => fetch(url).then(r => r.json()))
    );

    const seenKeys = new Set();
    const fixtures = [];

    responses.forEach((res, i) => {
      if (res.status !== "fulfilled") return;
      const data = res.value;
      const leagueName = allUrls[i].league;
      (data.events || []).forEach(ev => {
        const comp = ev.competitions?.[0];
        if (!comp) return;
        const statusName = comp.status?.type?.name;
        const isLive = statusName === "STATUS_IN_PROGRESS";
        const isScheduled = statusName === "STATUS_SCHEDULED";
        if (!isLive && !isScheduled) return;

        const homeComp = comp.competitors?.find(c => c.homeAway === "home");
        const awayComp = comp.competitors?.find(c => c.homeAway === "away");
        if (!homeComp || !awayComp) return;

        const home = homeComp.team?.displayName || homeComp.team?.name || "Home";
        const away = awayComp.team?.displayName || awayComp.team?.name || "Away";
        const key = `${home}||${away}`;
        if (seenKeys.has(key)) return;
        seenKeys.add(key);

        const fixtureDate = comp.date ? new Date(comp.date) : null;
        const resolvedLeague = data.leagues?.[0]?.name || leagueName;

        // Build date + kickoff time labels for display
        const dateStr = fixtureDate
          ? fixtureDate.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short" })
          : "Upcoming";
        const kickoffStr = fixtureDate
          ? fixtureDate.toLocaleTimeString("en-ZA", { hour: "2-digit", minute: "2-digit" })
          : "TBC";

        const leagueSlug = (allUrls[i].url.match(/soccer\/([^/]+)\//) || [])[1] || "eng.1";
        fixtures.push({
          home,
          away,
          league: resolvedLeague,
          status: isLive ? "Live" : dateStr,
          score: isLive ? `${homeComp.score} - ${awayComp.score}` : kickoffStr,
          isLive,
          isFinished: false,
          sortTime: fixtureDate ? fixtureDate.getTime() : Number.MAX_SAFE_INTEGER,
          homeTeamId: homeComp.team?.id || "",
          awayTeamId: awayComp.team?.id || "",
          leagueSlug,
        });
      });
    });

    fixtures.sort((a, b) => a.sortTime - b.sortTime);
    const top = fixtures.slice(0, 12);

    if (!top.length) {
      if (status) status.textContent = "No upcoming fixtures right now. Showing example games.";
      renderSportsFixtures(getUpcomingDemoFixtures(activeSportsFilter));
      return;
    }

    setCachedFixtures("soccer", top);
    renderSportsFixtures(top);
    const liveCount = top.filter(f => f.isLive).length;
    if (status) status.textContent = `${liveCount > 0 ? `${liveCount} live now · ` : ""}${top.length} real fixture${top.length === 1 ? "" : "s"} · ESPN data.`;
  } catch (error) {
    if (status) status.textContent = "Could not reach fixture feed. Showing example games.";
    renderSportsFixtures(getUpcomingDemoFixtures(activeSportsFilter));
  }
}

function realSportsCalendarMessage(sport) {
  const labels = {
    rugby:    "Upcoming rugby fixtures · 2026 calendar.",
    cricket:  "Upcoming cricket fixtures · 2026 calendar.",
    netball:  "Upcoming netball fixtures · 2026 calendar.",
  };
  return labels[sport] || "Upcoming fixtures · 2026 calendar.";
}

// Keep for backwards-compat
function sportsUnavailableMessage(sport) {
  return realSportsCalendarMessage(sport);
}

async function loadF1Fixtures() {
  const status = document.querySelector("[data-sports-api-status]");

  // Serve from cache first
  const cached = getCachedFixtures("formula-one");
  if (cached) {
    renderSportsFixtures(cached);
    if (status) status.textContent = `${cached.length} upcoming races · F1 2026 calendar.`;
    return;
  }

  if (status) status.textContent = "Loading Formula One calendar...";

  try {
    const res = await fetch("https://api.jolpi.ca/ergast/f1/2026.json");
    if (!res.ok) throw new Error("Ergast response not ok");
    const data = await res.json();
    const races = data?.MRData?.RaceTable?.Races || [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const upcoming = races
      .filter(race => new Date(race.date + "T00:00:00") >= today)
      .slice(0, 9)
      .map(race => {
        const raceDate = new Date(race.date + "T00:00:00");
        const dateLabel = `${days[raceDate.getDay()]} ${raceDate.getDate()} ${months[raceDate.getMonth()]}`;
        const circuit = race.Circuit || {};
        const loc = circuit.Location || {};
        const city = circuit.circuitName || loc.locality || loc.country || "Circuit";

        // Ergast sometimes provides race.time in UTC — convert to SAST (UTC+2)
        let timeLabel = "Race day";
        if (race.time) {
          const raceDatetime = new Date(`${race.date}T${race.time}`);
          timeLabel = raceDatetime.toLocaleTimeString("en-ZA", { hour: "2-digit", minute: "2-digit" });
        }

        return {
          home: race.raceName || `Round ${race.round}`,
          away: city,
          league: `Formula One · Round ${race.round}`,
          status: dateLabel,
          score: timeLabel,
          isLive: false,
          sortTime: raceDate.getTime()
        };
      });

    if (!upcoming.length) {
      renderSportsFixtures(getUpcomingDemoFixtures("formula-one"));
      if (status) status.textContent = "F1 season complete. No more races in 2026.";
      return;
    }

    setCachedFixtures("formula-one", upcoming);
    renderSportsFixtures(upcoming);
    if (status) status.textContent = `${upcoming.length} upcoming races · F1 2026 calendar.`;
  } catch (err) {
    // Fall back to hardcoded accurate 2026 F1 calendar
    const fallback = getUpcomingDemoFixtures("formula-one");
    renderSportsFixtures(fallback);
    if (status) status.textContent = `${fallback.length} upcoming races · F1 2026 calendar.`;
  }
}

function sportsApiFixtureToCard(fixture, priorityTerms = []) {
  const home = fixture.teams?.home?.name;
  const away = fixture.teams?.away?.name;
  if (!home || !away) return null;

  const league = fixture.league?.name || "Football";
  const country = fixture.league?.country || "";
  const statusShort = fixture.fixture?.status?.short || "";
  const statusLong = fixture.fixture?.status?.long || "";
  const elapsed = fixture.fixture?.status?.elapsed;
  const homeGoals = fixture.goals?.home;
  const awayGoals = fixture.goals?.away;
  const fixtureDate = fixture.fixture?.date ? new Date(fixture.fixture.date) : null;
  const kickoff = fixtureDate
    ? fixtureDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "TBC";
  const isLive = ["1H", "2H", "HT", "ET", "BT", "P", "SUSP", "INT", "LIVE"].includes(statusShort);
  const isFinished = ["FT", "AET", "PEN"].includes(statusShort);
  const score = homeGoals === null || awayGoals === null ? "TBC" : `${homeGoals} - ${awayGoals}`;

  return {
    home,
    away,
    league,
    country,
    status: isLive ? `${elapsed ? `${elapsed}'` : "Live"}` : isFinished ? statusShort : kickoff,
    score,
    isLive,
    isFinished,
    statusLong,
    sortTime: fixtureDate ? fixtureDate.getTime() : Number.MAX_SAFE_INTEGER,
    fixtureId: fixture.fixture?.id ? String(fixture.fixture.id) : null,
    homeLogo: fixture.teams?.home?.logo || null,
    awayLogo: fixture.teams?.away?.logo || null
  };
}

function renderSportsFixtures(fixtures, emptyMessage = "No real scores available right now.") {
  const feed = document.querySelector("[data-sports-fixtures]");
  if (!feed) return;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  if (!fixtures.length) {
    feed.innerHTML = `<article class="fixture-empty"><span>Not live</span><strong>${escapeHtml(emptyMessage)}</strong><em>No prediction opens until a real fixture is available.</em></article>`;
    document.querySelectorAll("[data-live-game-count]").forEach((item) => { item.textContent = "0"; });
    document.querySelectorAll("[data-live-entry-count]").forEach((item) => { item.textContent = "0"; });
    setSportsPredictionEmpty(emptyMessage);
    return;
  }
  document.querySelectorAll("[data-live-game-count]").forEach((item) => { item.textContent = fixtures.length; });

  const initials = (name) => name.split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase();

  // Universal badge map — flags for nations, icons for F1/clubs across all sports
  const FLAG_MAP = {
    // ── Soccer & Rugby & Cricket & Netball nations ────────────
    "afghanistan":"🇦🇫","albania":"🇦🇱","algeria":"🇩🇿","angola":"🇦🇴","argentina":"🇦🇷",
    "armenia":"🇦🇲","australia":"🇦🇺","austria":"🇦🇹","azerbaijan":"🇦🇿","bahrain":"🇧🇭",
    "bangladesh":"🇧🇩","belarus":"🇧🇾","belgium":"🇧🇪","bolivia":"🇧🇴","bosnia":"🇧🇦",
    "bosnia-herzegovina":"🇧🇦","botswana":"🇧🇼","brazil":"🇧🇷","bulgaria":"🇧🇬",
    "burkina faso":"🇧🇫","cambodia":"🇰🇭","cameroon":"🇨🇲","canada":"🇨🇦","cape verde":"🇨🇻",
    "chile":"🇨🇱","china":"🇨🇳","colombia":"🇨🇴","congo":"🇨🇩","costa rica":"🇨🇷",
    "croatia":"🇭🇷","cuba":"🇨🇺","cyprus":"🇨🇾","czechia":"🇨🇿","czech republic":"🇨🇿",
    "denmark":"🇩🇰","ecuador":"🇪🇨","egypt":"🇪🇬","el salvador":"🇸🇻","england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "ethiopia":"🇪🇹","fiji":"🇫🇯","finland":"🇫🇮","france":"🇫🇷","gabon":"🇬🇦",
    "gambia":"🇬🇲","georgia":"🇬🇪","germany":"🇩🇪","ghana":"🇬🇭","greece":"🇬🇷",
    "guatemala":"🇬🇹","guinea":"🇬🇳","honduras":"🇭🇳","hungary":"🇭🇺","iceland":"🇮🇸",
    "india":"🇮🇳","indonesia":"🇮🇩","iran":"🇮🇷","iraq":"🇮🇶","ireland":"🇮🇪",
    "israel":"🇮🇱","italy":"🇮🇹","ivory coast":"🇨🇮","côte d'ivoire":"🇨🇮",
    "jamaica":"🇯🇲","japan":"🇯🇵","jordan":"🇯🇴","kazakhstan":"🇰🇿","kenya":"🇰🇪",
    "south korea":"🇰🇷","korea republic":"🇰🇷","korea":"🇰🇷","kuwait":"🇰🇼",
    "latvia":"🇱🇻","lebanon":"🇱🇧","lesotho":"🇱🇸","liberia":"🇱🇷","lithuania":"🇱🇹",
    "luxembourg":"🇱🇺","mali":"🇲🇱","malta":"🇲🇹","mauritius":"🇲🇺","mexico":"🇲🇽",
    "moldova":"🇲🇩","mongolia":"🇲🇳","morocco":"🇲🇦","mozambique":"🇲🇿","myanmar":"🇲🇲",
    "namibia":"🇳🇦","nepal":"🇳🇵","netherlands":"🇳🇱","new caledonia":"🇳🇨",
    "new zealand":"🇳🇿","nicaragua":"🇳🇮","nigeria":"🇳🇬","north korea":"🇰🇵",
    "north macedonia":"🇲🇰","norway":"🇳🇴","oman":"🇴🇲","pakistan":"🇵🇰","palestine":"🇵🇸",
    "panama":"🇵🇦","papua new guinea":"🇵🇬","paraguay":"🇵🇾","peru":"🇵🇪",
    "philippines":"🇵🇭","poland":"🇵🇱","portugal":"🇵🇹","puerto rico":"🇵🇷","qatar":"🇶🇦",
    "romania":"🇷🇴","russia":"🇷🇺","rwanda":"🇷🇼","samoa":"🇼🇸","saudi arabia":"🇸🇦",
    "scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","senegal":"🇸🇳","serbia":"🇷🇸","sierra leone":"🇸🇱",
    "singapore":"🇸🇬","slovakia":"🇸🇰","solomon islands":"🇸🇧","south africa":"🇿🇦",
    "spain":"🇪🇸","sri lanka":"🇱🇰","sweden":"🇸🇪","switzerland":"🇨🇭","syria":"🇸🇾",
    "tahiti":"🇵🇫","tanzania":"🇹🇿","thailand":"🇹🇭","togo":"🇹🇬","tonga":"🇹🇴",
    "trinidad and tobago":"🇹🇹","tunisia":"🇹🇳","turkey":"🇹🇷","turkmenistan":"🇹🇲",
    "uae":"🇦🇪","united arab emirates":"🇦🇪","ukraine":"🇺🇦","uganda":"🇺🇬",
    "united states":"🇺🇸","usa":"🇺🇸","uruguay":"🇺🇾","uzbekistan":"🇺🇿",
    "venezuela":"🇻🇪","vietnam":"🇻🇳","wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","zambia":"🇿🇲","zimbabwe":"🇿🇼",
    // ── F1 Constructors ───────────────────────────────────────
    "red bull":"🐂","red bull racing":"🐂","ferrari":"🐎","mclaren":"🧡",
    "mercedes":"⭐","aston martin":"💚","alpine":"🔵","williams":"🔷",
    "haas":"🔴","rb":"🟣","kick sauber":"🟢","sauber":"🟢",
    "racing bulls":"🟣","visa cash app rb":"🟣",
    // ── Rugby clubs & other ───────────────────────────────────
    "british & irish lions":"🦁","british and irish lions":"🦁",
    "barbarians":"⚫","pacific islanders":"🌊",
    // ── Common club teams (fallback with country) ─────────────
    "psg":"🇫🇷","paris saint-germain":"🇫🇷","paris saint germain":"🇫🇷",
    "arsenal":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","chelsea":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","manchester city":"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "manchester united":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","liverpool":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","tottenham":"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "real madrid":"🇪🇸","barcelona":"🇪🇸","atletico madrid":"🇪🇸",
    "juventus":"🇮🇹","ac milan":"🇮🇹","inter":"🇮🇹","inter milan":"🇮🇹","napoli":"🇮🇹",
    "bayern munich":"🇩🇪","borussia dortmund":"🇩🇪","rb leipzig":"🇩🇪",
    "ajax":"🇳🇱","porto":"🇵🇹","benfica":"🇵🇹","sporting cp":"🇵🇹",
    "celtic":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","rangers":"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "boca juniors":"🇦🇷","river plate":"🇦🇷","flamengo":"🇧🇷",
    "al hilal":"🇸🇦","al nassr":"🇸🇦"
  };
  // Hardcoded logo URLs for well-known clubs & F1 teams (used when API has no logo)
  const LOGO_MAP = {
    // F1 constructors
    "red bull racing":"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Red_Bull_Racing_logo.svg/200px-Red_Bull_Racing_logo.svg.png",
    "red bull":"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Red_Bull_Racing_logo.svg/200px-Red_Bull_Racing_logo.svg.png",
    "ferrari":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Scuderia_Ferrari_Logo.svg/200px-Scuderia_Ferrari_Logo.svg.png",
    "mclaren":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/McLaren_Racing_logo.svg/200px-McLaren_Racing_logo.svg.png",
    "mercedes":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mercedes_AMG_Petronas_F1_Logo.svg/200px-Mercedes_AMG_Petronas_F1_Logo.svg.png",
    "aston martin":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Aston_Martin_Aramco_F1_logo.svg/200px-Aston_Martin_Aramco_F1_logo.svg.png",
    "alpine":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Alpine_F1_Team_Logo.svg/200px-Alpine_F1_Team_Logo.svg.png",
    "williams":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Williams_Racing_logo.svg/200px-Williams_Racing_logo.svg.png",
    "haas":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Haas_F1_Team_logo.svg/200px-Haas_F1_Team_logo.svg.png",
    // Premier League
    "arsenal":"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/200px-Arsenal_FC.svg.png",
    "chelsea":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png",
    "manchester city":"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/200px-Manchester_City_FC_badge.svg.png",
    "manchester united":"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/200px-Manchester_United_FC_crest.svg.png",
    "liverpool":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/200px-Liverpool_FC.svg.png",
    "tottenham":"https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/200px-Tottenham_Hotspur.svg.png",
    "tottenham hotspur":"https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/200px-Tottenham_Hotspur.svg.png",
    // La Liga
    "real madrid":"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/200px-Real_Madrid_CF.svg.png",
    "barcelona":"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/200px-FC_Barcelona_%28crest%29.svg.png",
    "atletico madrid":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/200px-Atletico_Madrid_2017_logo.svg.png",
    // Serie A
    "juventus":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/200px-Juventus_FC_2017_logo.svg.png",
    "ac milan":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/200px-Logo_of_AC_Milan.svg.png",
    "inter milan":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/200px-FC_Internazionale_Milano_2021.svg.png",
    "inter":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/200px-FC_Internazionale_Milano_2021.svg.png",
    // Bundesliga
    "bayern munich":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg/200px-FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg.png",
    "borussia dortmund":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/200px-Borussia_Dortmund_logo.svg.png",
    // France
    "paris saint-germain":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/200px-Paris_Saint-Germain_F.C..svg.png",
    "paris saint germain":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/200px-Paris_Saint-Germain_F.C..svg.png",
    "psg":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/200px-Paris_Saint-Germain_F.C..svg.png",
  };

  const flagOrInitials = (name, cls) => {
    const key = name.toLowerCase();
    const flag = FLAG_MAP[key];
    const logo = LOGO_MAP[key];
    if (flag) return `<span class="fmc-badge ${cls} fmc-badge--flag">${flag}</span>`;
    if (logo) return `<img class="fmc-badge ${cls} fmc-badge--img" src="${logo}" alt="${name}" loading="lazy" onerror="this.outerHTML='<span class=\\"fmc-badge ${cls}\\">${initials(name)}</span>'">`;
    return `<span class="fmc-badge ${cls}">${initials(name)}</span>`;
  };

  feed.innerHTML = fixtures.map((fixture, index) => {
    const score = fixture.score || "TBC";
    const name = `Sports Predict: ${fixture.home} vs ${fixture.away}`;
    const isLive = (fixture.status || "").toLowerCase() === "live" || fixture.isLive;
    const statusLabel = isLive ? "Live now" : escapeHtml(fixture.status || "Upcoming");
    const hasPaid = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" }) > 0;
    const eventWord = activeSportsFilter === "formula-one" ? "race" : "match";
    const btnLabel = hasPaid ? `Predict this ${eventWord}` : `Predict this ${eventWord} — R5`;
    const kickoffMs = fixture.sortTime || parseDemoKickoffMs(fixture.status, fixture.score) || 0;
    // Flags take priority for international teams; logos for clubs; initials as fallback
    const homeFlag = FLAG_MAP[fixture.home.toLowerCase()];
    const awayFlag = FLAG_MAP[fixture.away.toLowerCase()];
    const homeBadge = homeFlag
      ? `<span class="fmc-badge fmc-badge--flag">${homeFlag}</span>`
      : fixture.homeLogo
        ? `<img class="fmc-badge fmc-badge--img" src="${escapeHtml(fixture.homeLogo)}" alt="${escapeHtml(fixture.home)}" loading="lazy" onerror="this.outerHTML='<span class=\\"fmc-badge\\">${escapeHtml(initials(fixture.home))}</span>'">`
        : `<span class="fmc-badge">${escapeHtml(initials(fixture.home))}</span>`;
    const awayBadge = awayFlag
      ? `<span class="fmc-badge fmc-badge--away fmc-badge--flag">${awayFlag}</span>`
      : fixture.awayLogo
        ? `<img class="fmc-badge fmc-badge--img fmc-badge--away" src="${escapeHtml(fixture.awayLogo)}" alt="${escapeHtml(fixture.away)}" loading="lazy" onerror="this.outerHTML='<span class=\\"fmc-badge fmc-badge--away\\">${escapeHtml(initials(fixture.away))}</span>'">`
        : `<span class="fmc-badge fmc-badge--away">${escapeHtml(initials(fixture.away))}</span>`;

    return `<article class="fixture-match-card${index === 0 ? " is-selected" : ""}${isLive ? " is-live" : ""}" data-live-fixture data-home="${escapeHtml(fixture.home)}" data-away="${escapeHtml(fixture.away)}" data-score="${escapeHtml(score)}" data-status="${escapeHtml(fixture.status || "Upcoming")}" data-league="${escapeHtml(fixture.league || "Football")}" data-kickoff-ms="${kickoffMs}" data-home-team-id="${escapeHtml(fixture.homeTeamId || "")}" data-away-team-id="${escapeHtml(fixture.awayTeamId || "")}" data-league-slug="${escapeHtml(fixture.leagueSlug || "")}" data-fixture-sport="${escapeHtml(activeSportsFilter || "soccer")}" data-fixture-id="${escapeHtml(fixture.fixtureId || "")}" data-home-logo="${escapeHtml(fixture.homeLogo || "")}" data-away-logo="${escapeHtml(fixture.awayLogo || "")}">
  <div class="fmc-header">
    <span class="fmc-status${isLive ? " fmc-status--live" : ""}">${isLive ? '<span class="live-dot"></span>' : ""}${statusLabel}</span>
    <span class="fmc-kickoff-cd" data-kickoff-countdown></span>
  </div>
  <div class="fmc-league-row">
    <em class="fmc-league">${escapeHtml(fixture.league || "Football")}</em>
  </div>
  <div class="fmc-teams">
    <div class="fmc-team">
      ${homeBadge}
      <strong>${escapeHtml(fixture.home)}</strong>
    </div>
    <span class="fmc-score">${escapeHtml(score)}</span>
    <div class="fmc-team fmc-team--away">
      ${awayBadge}
      <strong>${escapeHtml(fixture.away)}</strong>
    </div>
  </div>
  <button class="fmc-enter-btn" type="button" data-sports-entry-add="${escapeHtml(name)}" data-price="5">${escapeHtml(btnLabel)}</button>
</article>`;
  }).join("");

  const first = feed.querySelector("[data-live-fixture]");
  if (first) setSportsPredictionMatch(first);
  updateFixtureCountdowns();
}

function updateFixtureCountdowns() {
  const now = Date.now();
  document.querySelectorAll("[data-kickoff-ms]").forEach(card => {
    const ms = parseInt(card.dataset.kickoffMs, 10);
    const el = card.querySelector("[data-kickoff-countdown]");
    if (!el) return;
    if (!ms || ms <= 0) { el.textContent = ""; return; }
    const diff = ms - now;
    if (diff <= 0) { el.textContent = "LIVE"; el.setAttribute("data-cd-live", ""); return; }
    el.removeAttribute("data-cd-live");
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);
    const hh = String(hours).padStart(2, "0");
    const mm = String(mins).padStart(2, "0");
    const ss = String(secs).padStart(2, "0");
    el.textContent = days > 0 ? `${days}d ${hh}:${mm}:${ss}` : `${hh}:${mm}:${ss}`;
  });
}

function setSportsPredictionEmpty(message) {
  const featuredHome = document.querySelector("[data-featured-home]");
  const featuredAway = document.querySelector("[data-featured-away]");
  const featuredHomeBadge = document.querySelector("[data-featured-home-badge]");
  const featuredAwayBadge = document.querySelector("[data-featured-away-badge]");
  const featuredScore = document.querySelector("[data-featured-score]");
  const featuredStatusLabel = document.querySelector("[data-featured-status-label]");
  const featuredTrending = document.querySelector("[data-featured-trending]");
  const featuredLiveMeta = document.querySelector("[data-featured-live-meta]");
  const label = document.querySelector("[data-lock-label]");

  if (featuredHome) featuredHome.textContent = "No fixture";
  if (featuredAway) featuredAway.textContent = "available";
  if (featuredHomeBadge) featuredHomeBadge.textContent = "--";
  if (featuredAwayBadge) featuredAwayBadge.textContent = "--";
  if (featuredScore) featuredScore.textContent = "--";
  if (featuredStatusLabel) featuredStatusLabel.textContent = "Status";
  if (featuredTrending) featuredTrending.textContent = "None";
  if (featuredLiveMeta) featuredLiveMeta.textContent = message;
  if (label) label.textContent = "No live pick";
}

function setSportsPredictionMatch(source) {
  const home = source.dataset.home || "Home";
  const away = source.dataset.away || "Away";
  const score = source.dataset.score || "TBC";
  const fixtureStatus = source.dataset.status || "Upcoming";
  const league = source.dataset.league || "Football";

  // New fixture selected — wipe per-ticket predictions so each ticket starts fresh
  const tokenCount = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" });
  resetSportsTickets(tokenCount || 1);
  renderTicketTabs();
  loadTicketState();

  // Pin the real kickoff timestamp onto the countdown element so tickCountdown
  // can compute an accurate diff instead of using the stale hardcoded value.
  const countdownEl = document.querySelector("[data-sports-countdown]");
  const kickoffMs = parseInt(source.dataset.kickoffMs, 10) || 0;
  if (countdownEl) countdownEl.dataset.kickoffTarget = kickoffMs || "";

  document.querySelectorAll("[data-live-fixture]").forEach((fixture) => {
    fixture.classList.toggle("is-selected", fixture === source);
  });

  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  const featuredHome = document.querySelector("[data-featured-home]");
  const featuredAway = document.querySelector("[data-featured-away]");
  const featuredHomeBadge = document.querySelector("[data-featured-home-badge]");
  const featuredAwayBadge = document.querySelector("[data-featured-away-badge]");
  const featuredScore = document.querySelector("[data-featured-score]");
  const featuredStatusLabel = document.querySelector("[data-featured-status-label]");
  const featuredTrending = document.querySelector("[data-featured-trending]");
  const featuredLiveMeta = document.querySelector("[data-featured-live-meta]");
  const pickHome = document.querySelector("[data-pick-home]");
  const pickAway = document.querySelector("[data-pick-away]");
  const homePick = document.querySelector("[data-sports-pick]:not([data-sports-pick='Draw'])");
  const awayPick = [...document.querySelectorAll("[data-sports-pick]")].find((button) => button.dataset.sportsPick !== "Draw" && button !== homePick);

  if (featuredHome) featuredHome.textContent = home;
  if (featuredAway) featuredAway.textContent = away;
  if (featuredHomeBadge) featuredHomeBadge.textContent = initials(home);
  if (featuredAwayBadge) featuredAwayBadge.textContent = initials(away);
  const isLiveScore = (fixtureStatus || "").toLowerCase() === "live";
  const looksLikeTime = /^\d{1,2}:\d{2}$/.test((score || "").trim());
  const featuredScoreText = isLiveScore ? score : (looksLikeTime ? score : (score === "TBC" ? fixtureStatus : score));
  const featuredLabelText = isLiveScore ? "Scoreline" : (looksLikeTime ? "Kickoff" : "Upcoming");
  if (featuredScore) featuredScore.textContent = featuredScoreText;
  if (featuredStatusLabel) featuredStatusLabel.textContent = featuredLabelText;
  if (featuredTrending) featuredTrending.textContent = away;
  if (featuredLiveMeta) featuredLiveMeta.textContent = `${looksLikeTime ? `${fixtureStatus} · ${score}` : (score === "TBC" ? fixtureStatus : score)} | ${league}`;
  if (pickHome) pickHome.textContent = home;
  if (pickAway) pickAway.textContent = away;
  if (homePick) homePick.dataset.sportsPick = home;
  if (awayPick) awayPick.dataset.sportsPick = away;

  const selected = document.querySelector(".pick-card.is-selected");
  if (selected) {
    selected.dataset.sportsPick = selected.contains(pickAway) ? away : selected.contains(pickHome) ? home : selected.dataset.sportsPick;
  }

  // Update prediction form match banner
  const predMatchName  = document.querySelector("[data-pred-match-name]");
  const predMatchMeta  = document.querySelector("[data-pred-match-meta]");
  const predHomeBadge  = document.querySelector("[data-pred-home-badge]");
  const predAwayBadge  = document.querySelector("[data-pred-away-badge]");
  const predBanner     = document.querySelector("[data-pred-match-banner]");
  if (predMatchName) predMatchName.textContent = `${home} vs ${away}`;
  if (predMatchMeta) predMatchMeta.textContent = `${league} · ${looksLikeTime ? `${fixtureStatus} ${score}` : (fixtureStatus === "TBC" ? "Upcoming" : fixtureStatus)}`;
  if (predHomeBadge) predHomeBadge.textContent = initials(home);
  if (predAwayBadge) predAwayBadge.textContent = initials(away);
  if (predBanner)    predBanner.classList.add("has-match");

  // Update scoreline stepper team name labels
  const scoreHomeLabel = document.querySelector("[data-score-home-label]");
  const scoreAwayLabel = document.querySelector("[data-score-away-label]");
  if (scoreHomeLabel) scoreHomeLabel.textContent = home;
  if (scoreAwayLabel) scoreAwayLabel.textContent = away;

  // Update the hero CTA to go straight to the prediction form once a match is picked
  const pickBtn = document.querySelector(".lock-pick-button");
  if (pickBtn) {
    const hasRealMatch = !!(source.dataset && source.dataset.home);
    pickBtn.href = hasRealMatch ? "#prediction-arena" : "#live-fixtures";
    pickBtn.textContent = hasRealMatch ? "Make your predictions →" : "Pick a Match — R5";
  }

  // Update possession slider team name labels
  const possHomeLabel = document.querySelector("[data-possession-home-label]");
  const possAwayLabel = document.querySelector("[data-possession-away-label]");
  if (possHomeLabel) possHomeLabel.textContent = home;
  if (possAwayLabel) possAwayLabel.textContent = away;

  // Load player picker for all sports
  const homeTeamId   = source.dataset.homeTeamId   || "";
  const awayTeamId   = source.dataset.awayTeamId   || "";
  const leagueSlug   = source.dataset.leagueSlug   || "";
  const fixtureSport = source.dataset.fixtureSport  || activeSportsFilter || "soccer";
  // Reset selected player labels when fixture changes
  // Podium labels stay "Pick a driver"; all others reset to "Pick a player"
  const DRIVER_LABELS = new Set(["podiumP1","podiumP2","podiumP3"]);
  document.querySelectorAll("[data-player-label]").forEach(el => {
    if (el.dataset.playerLabel === undefined) return;
    el.textContent = DRIVER_LABELS.has(el.dataset.playerLabel) ? "Pick a driver" : "Pick a player";
  });
  document.querySelectorAll("[data-player-input]").forEach(el => { el.value = ""; });
  loadPlayerPicker(homeTeamId, awayTeamId, leagueSlug, home, away, fixtureSport);
}

// ── Multi-ticket state ───────────────────────────────────────────────────────

function _defaultTicket() {
  return {
    locked: false,
    homeScore: 0,
    awayScore: 0,
    scorelinePred: "0 - 0",
    scorelineText: "",
    possession: 50,
    corners: "",
    cards: "",
    firstScorer: "",
    firstScorerLabel: "Pick a player",
    firstTime: "",
    motm: "",
    motmLabel: "Pick a player",
    // F1 podium
    podiumP1: "", podiumP1Label: "Pick a driver",
    podiumP2: "", podiumP2Label: "Pick a driver",
    podiumP3: "", podiumP3Label: "Pick a driver",
  };
}

function initSportsTickets(count) {
  const n = Math.max(1, count);
  while (_sportsTickets.length < n) _sportsTickets.push(_defaultTicket());
  _sportsTickets = _sportsTickets.slice(0, n);
  if (_activeTicketIdx >= n) _activeTicketIdx = 0;
}

function resetSportsTickets(count) {
  const n = Math.max(1, count);
  _sportsTickets = Array.from({ length: n }, () => _defaultTicket());
  _activeTicketIdx = 0;
}

function saveTicketState() {
  const t = _sportsTickets[_activeTicketIdx];
  if (!t) return;
  const homeScoreEl    = document.querySelector("[data-home-score]");
  const awayScoreEl    = document.querySelector("[data-away-score]");
  const scorelinePred  = document.querySelector("[data-scoreline-prediction]");
  const scorelineText  = document.querySelector("[data-scoreline-text]");
  const slider         = document.querySelector("[data-possession-slider]");
  const cornersInput   = document.querySelector("[data-tournament-field='setPiece'] [data-field-input]");
  const cardsInput     = document.querySelector("[data-tournament-field='discipline'] [data-field-input]");
  const firstInput     = document.querySelector("[data-player-input='firstScorer']");
  const firstLabel     = document.querySelector("[data-player-label='firstScorer']");
  const firstTimeInput = document.querySelector("[data-tournament-field='firstTime'] [data-field-input]");
  const motmInput      = document.querySelector("[data-player-input='motm']");
  const motmLabel      = document.querySelector("[data-player-label='motm']");
  const p1Input        = document.querySelector("[data-player-input='podiumP1']");
  const p1Label        = document.querySelector("[data-player-label='podiumP1']");
  const p2Input        = document.querySelector("[data-player-input='podiumP2']");
  const p2Label        = document.querySelector("[data-player-label='podiumP2']");
  const p3Input        = document.querySelector("[data-player-input='podiumP3']");
  const p3Label        = document.querySelector("[data-player-label='podiumP3']");

  t.homeScore       = parseInt(homeScoreEl?.textContent || "0", 10);
  t.awayScore       = parseInt(awayScoreEl?.textContent || "0", 10);
  t.scorelinePred   = scorelinePred?.value  || "0 - 0";
  t.scorelineText   = scorelineText?.value  || "";
  t.possession      = parseInt(slider?.value || "50", 10);
  t.corners         = cornersInput?.value   || "";
  t.cards           = cardsInput?.value     || "";
  t.firstScorer     = firstInput?.value     || "";
  t.firstScorerLabel = firstLabel?.textContent || "Pick a player";
  t.firstTime       = firstTimeInput?.value || "";
  t.motm            = motmInput?.value      || "";
  t.motmLabel       = motmLabel?.textContent || "Pick a player";
  t.podiumP1        = p1Input?.value        || "";
  t.podiumP1Label   = p1Label?.textContent  || "Pick a driver";
  t.podiumP2        = p2Input?.value        || "";
  t.podiumP2Label   = p2Label?.textContent  || "Pick a driver";
  t.podiumP3        = p3Input?.value        || "";
  t.podiumP3Label   = p3Label?.textContent  || "Pick a driver";
}

function loadTicketState() {
  const t = _sportsTickets[_activeTicketIdx];
  if (!t) return;
  const homeScoreEl    = document.querySelector("[data-home-score]");
  const awayScoreEl    = document.querySelector("[data-away-score]");
  const scorelinePred  = document.querySelector("[data-scoreline-prediction]");
  const scorelineText  = document.querySelector("[data-scoreline-text]");
  const slider         = document.querySelector("[data-possession-slider]");
  const homeFill       = document.querySelector("[data-possession-home-fill]");
  const awayFill       = document.querySelector("[data-possession-away-fill]");
  const homePct        = document.querySelector("[data-possession-home-pct]");
  const awayPct        = document.querySelector("[data-possession-away-pct]");
  const cornersInput   = document.querySelector("[data-tournament-field='setPiece'] [data-field-input]");
  const cardsInput     = document.querySelector("[data-tournament-field='discipline'] [data-field-input]");
  const firstInput     = document.querySelector("[data-player-input='firstScorer']");
  const firstLabel     = document.querySelector("[data-player-label='firstScorer']");
  const firstTimeInput = document.querySelector("[data-tournament-field='firstTime'] [data-field-input]");
  const motmInput      = document.querySelector("[data-player-input='motm']");
  const motmLabelEl    = document.querySelector("[data-player-label='motm']");
  const lockedState    = document.querySelector("[data-locked-state]");
  const lockBtn        = document.querySelector("[data-lock-pick]");
  const lockLbl        = document.querySelector("[data-lock-label]");

  if (homeScoreEl)    homeScoreEl.textContent = t.homeScore;
  if (awayScoreEl)    awayScoreEl.textContent = t.awayScore;
  if (scorelinePred)  scorelinePred.value     = t.scorelinePred;
  if (scorelineText)  scorelineText.value     = t.scorelineText;
  if (slider) {
    slider.value = t.possession;
    const h = t.possession, a = 100 - h;
    if (homeFill) homeFill.style.width = `${h}%`;
    if (awayFill) awayFill.style.width = `${a}%`;
    if (homePct)  homePct.textContent  = `${h}%`;
    if (awayPct)  awayPct.textContent  = `${a}%`;
  }
  if (cornersInput)   cornersInput.value      = t.corners;
  if (cardsInput)     cardsInput.value        = t.cards;
  if (firstInput)     firstInput.value        = t.firstScorer;
  if (firstLabel)     firstLabel.textContent  = t.firstScorerLabel;
  if (firstTimeInput) firstTimeInput.value    = t.firstTime;
  if (motmInput)      motmInput.value         = t.motm;
  if (motmLabelEl)    motmLabelEl.textContent = t.motmLabel;

  const p1Input   = document.querySelector("[data-player-input='podiumP1']");
  const p1LabelEl = document.querySelector("[data-player-label='podiumP1']");
  const p2Input   = document.querySelector("[data-player-input='podiumP2']");
  const p2LabelEl = document.querySelector("[data-player-label='podiumP2']");
  const p3Input   = document.querySelector("[data-player-input='podiumP3']");
  const p3LabelEl = document.querySelector("[data-player-label='podiumP3']");
  if (p1Input)   p1Input.value        = t.podiumP1 || "";
  if (p1LabelEl) p1LabelEl.textContent = t.podiumP1Label || "Pick a driver";
  if (p2Input)   p2Input.value        = t.podiumP2 || "";
  if (p2LabelEl) p2LabelEl.textContent = t.podiumP2Label || "Pick a driver";
  if (p3Input)   p3Input.value        = t.podiumP3 || "";
  if (p3LabelEl) p3LabelEl.textContent = t.podiumP3Label || "Pick a driver";

  if (lockedState) lockedState.classList.toggle("is-active", t.locked);
  if (lockBtn) lockBtn.disabled = t.locked;
  if (lockLbl) lockLbl.textContent = t.locked ? "Predictions locked ✓" : "Submit Predictions";
}

function renderTicketTabs() {
  const switcher = document.getElementById("pred-ticket-switcher");
  if (!switcher) return;
  if (_sportsTickets.length <= 1) { switcher.hidden = true; return; }
  switcher.hidden = false;

  const lockedCount = _sportsTickets.filter(t => t.locked).length;
  const activeLabel = `Ticket ${_activeTicketIdx + 1}`;
  const badgeExtra  = lockedCount > 0 ? " has-locked" : "";

  switcher.innerHTML = `
    <div class="my-tickets-folder">
      <button class="my-tickets-toggle" type="button" id="my-tickets-toggle" aria-expanded="false">
        <span class="my-tickets-title">My Tickets</span>
        <span class="my-tickets-active-badge${badgeExtra}">${activeLabel}${lockedCount ? ` · ${lockedCount}/${_sportsTickets.length} locked` : ""}</span>
        <i data-lucide="chevron-down"></i>
      </button>
      <div class="my-tickets-list" id="my-tickets-list" hidden>
        ${_sportsTickets.map((t, i) => {
          const isActive = i === _activeTicketIdx;
          const cls = ["pred-ticket-tab", isActive ? "is-active" : "", t.locked ? "is-locked" : ""].filter(Boolean).join(" ");
          const statusText = t.locked ? "✓ Locked" : (isActive ? "Editing" : "Empty");
          return `<button class="${cls}" type="button" data-ticket-tab="${i}">
            <span class="pred-ticket-tab-dot"></span>
            <span>Ticket ${i + 1}</span>
            <span class="pred-ticket-tab-status">${statusText}</span>
          </button>`;
        }).join("")}
      </div>
    </div>`;

  // Reinitialise Lucide icons inside the switcher
  if (window.lucide) window.lucide.createIcons({ nodes: [switcher] });

  // Toggle open/close
  const toggleBtn = switcher.querySelector("#my-tickets-toggle");
  const listEl    = switcher.querySelector("#my-tickets-list");
  toggleBtn?.addEventListener("click", () => {
    const isOpen = !listEl.hidden;
    listEl.hidden = isOpen;
    toggleBtn.classList.toggle("is-open", !isOpen);
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Ticket selection inside the list
  switcher.querySelectorAll("[data-ticket-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.ticketTab, 10);
      // Close the dropdown
      if (listEl) listEl.hidden = true;
      if (toggleBtn) { toggleBtn.classList.remove("is-open"); toggleBtn.setAttribute("aria-expanded", "false"); }
      if (idx === _activeTicketIdx) return;
      saveTicketState();
      _activeTicketIdx = idx;
      loadTicketState();
      renderTicketTabs();
    });
  });
}

// ── Player picker ────────────────────────────────────────────────────────────
const _rosterCache = {};

// Compact squad store: { teamName: [[jersey, shortName, posAbbr], ...] }
// Rugby pos: LHP/THP=Prop, HO=Hooker, LK=Lock, BFL/OFL=Flanker, N8=No.8, SH=Scrum-half, FH=Fly-half, IC=Centre, OC=Centre, LW/RW=Wing, FB=Fullback
// Cricket / Netball pos: PLY=Player
const _HARDCODED_SQUADS = {
  /* ════════════════════════════════════════════════════════════════════════
     Sport-namespaced to prevent duplicate key collisions (England, Australia,
     South Africa, New Zealand all appear in rugby AND cricket/netball).
     _lookupHardcodedSquad(name, sport) searches the correct sub-object first.
  ════════════════════════════════════════════════════════════════════════ */

  rugby: {
  /* ── URC ───────────────────────────────────────────────────────────────── */
  "Leinster": [
    ["1","A. Porter","LHP"],["2","D. Sheehan","HO"],["3","T. Furlong","THP"],
    ["4","J. McCarthy","LK"],["5","J. Ryan","LK"],["6","J. Conan","BFL"],
    ["7","J. van der Flier","OFL"],["8","C. Doris","N8"],
    ["9","J. Gibson-Park","SH"],["10","S. Prendergast","FH"],["10","H. Byrne","FH"],
    ["12","R. Henshaw","IC"],["13","G. Ringrose","OC"],
    ["11","J. Lowe","LW"],["14","D. Kearney","RW"],["15","H. Keenan","FB"],
    ["16","R. Kelleher","HO"],["17","C. Healy","LHP"],["9","L. McGrath","SH"],
  ],
  "Bulls": [
    ["1","G. Steenekamp","LHP"],["2","J. Grobbelaar","HO"],["3","J. Wessels","THP"],
    ["4","R. Nortje","LK"],["5","W. Steenkamp","LK"],["6","A. Botha","BFL"],
    ["7","E. Louw","OFL"],["8","C. Brink","N8"],
    ["9","E. Papier","SH"],["10","J. Goosen","FH"],["10","M. Steyn","FH"],
    ["12","H. Vorster","IC"],["13","D. Kriel","OC"],
    ["11","K. Arendse","LW"],["14","S. Gans","RW"],["15","W. le Roux","FB"],
    ["16","J. van der Walt","HO"],["23","C. Reinach","SH"],
  ],
  "Glasgow Warriors": [
    ["1","J. Bhatti","LHP"],["2","G. Turner","HO"],["3","Z. Fagerson","THP"],
    ["4","S. Cummings","LK"],["5","R. Gray","LK"],["6","T. Gordon","BFL"],
    ["7","R. Darge","OFL"],["8","M. Fagerson","N8"],
    ["9","B. Vellacott","SH"],["10","T. Jordan","FH"],
    ["12","S. Tuipulotu","IC"],["13","K. Steyn","OC"],
    ["11","L. Turner","LW"],["14","S. Cancelliere","RW"],["15","O. Smith","FB"],
    ["16","J. Matthews","HO"],["9","A. Price","SH"],
  ],
  "Stormers": [
    ["1","B. Harris","LHP"],["2","J. Kotze","HO"],["3","N. Fouche","THP"],
    ["4","M. Orie","LK"],["5","B. Dixon","LK"],["6","D. Fourie","BFL"],
    ["7","H. Dayimani","OFL"],["8","E. Roos","N8"],
    ["9","P. de Wet","SH"],["10","M. Libbok","FH"],
    ["12","D. du Plessis","IC"],["13","R. Nel","OC"],
    ["11","S. Senatla","LW"],["14","A. Davids","RW"],["15","W. Gelant","FB"],
    ["16","A. Zondagh","HO"],["9","H. Jantjies","SH"],
  ],
  "Munster": [
    ["1","J. Loughman","LHP"],["2","N. Scannell","HO"],["3","J. Ryan","THP"],
    ["4","J. Kleyn","LK"],["5","T. Beirne","LK"],["6","P. O'Mahony","BFL"],
    ["7","J. O'Donoghue","OFL"],["8","G. Coombes","N8"],
    ["9","C. Casey","SH"],["10","J. Crowley","FH"],["10","B. Healy","FH"],
    ["12","M. Fekitoa","IC"],["13","K. Earls","OC"],
    ["11","C. Nash","LW"],["14","S. Daly","RW"],["15","M. Haley","FB"],
    ["16","D. Barron","HO"],["9","C. Murray","SH"],
  ],
  /* ── Super Rugby Pacific ───────────────────────────────────────────────── */
  "Blues": [
    ["1","H. Saumaki","LHP"],["2","K. Eklund","HO"],["3","M. Renata","THP"],
    ["4","P. Tuipulotu","LK"],["5","J. Bekhuis","LK"],["6","T. Robinson","BFL"],
    ["7","A. Ioane","OFL"],["8","D. Papalii","N8"],
    ["9","F. Christie","SH"],["10","H. Plummer","FH"],
    ["12","R. Ioane","IC"],["13","N. Laulala","OC"],
    ["11","M. Tele'a","LW"],["14","C. Clarke","RW"],["15","S. Perofeta","FB"],
  ],
  "Hurricanes": [
    ["1","X. Numia","LHP"],["2","A. Aumua","HO"],["3","T. Lomax","THP"],
    ["4","J. Blackwell","LK"],["5","S. Scrafton","LK"],["6","R. Prinsep","BFL"],
    ["7","D. Kirifi","OFL"],["8","A. Savea","N8"],
    ["9","T. Perenara","SH"],["10","J. Barrett","FH"],
    ["12","P. Umaga-Jensen","IC"],["13","B. Lam","OC"],
    ["11","J. Savea","LW"],["14","S. Rayasi","RW"],["15","R. Love","FB"],
  ],
  "Chiefs": [
    ["1","A. Ross","LHP"],["2","S. Taukei'aho","HO"],["3","N. Laulala","THP"],
    ["4","T. Vaa'i","LK"],["5","N. Ah Kuoi","LK"],["6","S. Finau","BFL"],
    ["7","S. Parker","OFL"],["8","L. Jacobson","N8"],
    ["9","B. Weber","SH"],["10","D. McKenzie","FH"],
    ["12","A. Lienert-Brown","IC"],["13","Q. Tupaea","OC"],
    ["11","E. Narawa","LW"],["14","S. Stevenson","RW"],["15","C. Tiatia","FB"],
  ],
  "Crusaders": [
    ["1","G. Bower","LHP"],["2","C. Taylor","HO"],["3","M. Alaalatoa","THP"],
    ["4","S. Whitelock","LK"],["5","Q. Strange","LK"],["6","C. Grace","BFL"],
    ["7","T. Christie","OFL"],["8","E. Blackadder","N8"],
    ["9","M. Drummond","SH"],["10","R. Mo'unga","FH"],
    ["12","D. Havili","IC"],["13","L. Fainga'anuku","OC"],
    ["11","W. Jordan","LW"],["14","S. Reece","RW"],["15","S. Barrett","FB"],
  ],
  /* ── Internationals ────────────────────────────────────────────────────── */
  "South Africa": [
    ["1","O. Nche","LHP"],["2","B. Mbonambi","HO"],["3","V. Koch","THP"],
    ["4","E. Etzebeth","LK"],["5","L. de Jager","LK"],["6","S. Kolisi","BFL"],
    ["7","K. Smith","OFL"],["8","D. Vermeulen","N8"],
    ["9","F. de Klerk","SH"],["10","H. Pollard","FH"],
    ["12","J. Kriel","IC"],["13","L. Am","OC"],
    ["11","M. Mapimpi","LW"],["14","C. Kolbe","RW"],["15","W. le Roux","FB"],
    ["16","M. Marx","HO"],["23","D. Willemse","FH"],
  ],
  "New Zealand": [
    ["1","E. de Groot","LHP"],["2","C. Taylor","HO"],["3","T. Lomax","THP"],
    ["4","P. Tuipulotu","LK"],["5","S. Whitelock","LK"],["6","D. Papalii","BFL"],
    ["7","S. Cane","OFL"],["8","A. Savea","N8"],
    ["9","A. Smith","SH"],["10","R. Mo'unga","FH"],
    ["12","D. Havili","IC"],["13","R. Ioane","OC"],
    ["11","W. Jordan","LW"],["14","C. Clarke","RW"],["15","B. Barrett","FB"],
    ["16","A. Aumua","HO"],["10","B. Barrett","FH"],
  ],
  "France": [
    ["1","C. Baille","LHP"],["2","J. Marchand","HO"],["3","U. Atonio","THP"],
    ["4","T. Flament","LK"],["5","P. Willemse","LK"],["6","Y. Woki","BFL"],
    ["7","C. Ollivon","OFL"],["8","G. Alldritt","N8"],
    ["9","A. Dupont","SH"],["10","R. Ntamack","FH"],
    ["12","G. Fickou","IC"],["13","J. Danty","OC"],
    ["11","D. Penaud","LW"],["14","G. Villière","RW"],["15","T. Ramos","FB"],
    ["16","P. Mauvaka","HO"],["10","M. Jalibert","FH"],
  ],
  "England": [
    ["1","E. Genge","LHP"],["2","J. George","HO"],["3","K. Sinckler","THP"],
    ["4","M. Itoje","LK"],["5","C. Ewels","LK"],["6","T. Curry","BFL"],
    ["7","S. Underhill","OFL"],["8","B. Vunipola","N8"],
    ["9","A. Mitchell","SH"],["10","M. Smith","FH"],
    ["12","M. Tuilagi","IC"],["13","H. Slade","OC"],
    ["11","J. May","LW"],["14","J. Nowell","RW"],["15","F. Steward","FB"],
    ["16","L. Cowan-Dickie","HO"],["23","O. Farrell","FH"],
  ],
  "Australia": [
    ["1","J. Slipper","LHP"],["2","D. Porecki","HO"],["3","A. Alaalatoa","THP"],
    ["4","R. Arnold","LK"],["5","W. Skelton","LK"],["6","M. Hooper","BFL"],
    ["7","R. Leota","OFL"],["8","R. Valetini","N8"],
    ["9","N. White","SH"],["10","B. Foley","FH"],
    ["12","L. Ikitau","IC"],["13","H. Paisami","OC"],
    ["11","J. Petaia","LW"],["14","M. Nawaqanitawase","RW"],["15","A. Kellaway","FB"],
    ["16","F. Bell","HO"],["10","Q. Cooper","FH"],
  ],
  "Ireland": [
    ["1","A. Porter","LHP"],["2","R. Kelleher","HO"],["3","T. Furlong","THP"],
    ["4","T. Beirne","LK"],["5","J. Ryan","LK"],["6","P. O'Mahony","BFL"],
    ["7","J. van der Flier","OFL"],["8","C. Doris","N8"],
    ["9","C. Murray","SH"],["10","J. Sexton","FH"],
    ["12","B. Aki","IC"],["13","G. Ringrose","OC"],
    ["11","J. Lowe","LW"],["14","K. Earls","RW"],["15","H. Keenan","FB"],
    ["16","D. Sheehan","HO"],["10","J. Crowley","FH"],
  ],
  "Argentina": [
    ["1","T. Gallo","LHP"],["2","J. Montoya","HO"],["3","F. Gomez Kodela","THP"],
    ["4","M. Alemanno","LK"],["5","G. Petti","LK"],["6","P. Matera","BFL"],
    ["7","M. Kremer","OFL"],["8","J. Gonzalez","N8"],
    ["9","G. Bertranou","SH"],["10","N. Sanchez","FH"],
    ["12","J. de la Fuente","IC"],["13","S. Chocobares","OC"],
    ["11","L. Cinti","LW"],["14","M. Carreras","RW"],["15","J. Mallia","FB"],
    ["16","A. Creevy","HO"],["10","B. Urdapilleta","FH"],
  ],
  "Scotland": [
    ["1","P. Schoeman","LHP"],["2","F. Brown","HO"],["3","Z. Fagerson","THP"],
    ["4","S. Cummings","LK"],["5","R. Gray","LK"],["6","J. Ritchie","BFL"],
    ["7","R. Darge","OFL"],["8","M. Fagerson","N8"],
    ["9","A. Price","SH"],["10","F. Russell","FH"],
    ["12","S. Johnson","IC"],["13","C. Harris","OC"],
    ["11","D. van der Merwe","LW"],["14","K. Steyn","RW"],["15","S. Hogg","FB"],
    ["16","S. McInally","HO"],["10","B. Kinghorn","FH"],
  ],
  "Italy": [
    ["1","D. Fischetti","LHP"],["2","L. Bigi","HO"],["3","S. Ferrari","THP"],
    ["4","N. Cannone","LK"],["5","F. Ruzza","LK"],["6","M. Lamaro","BFL"],
    ["7","S. Negri","OFL"],["8","L. Cannone","N8"],
    ["9","S. Varney","SH"],["10","P. Garbisi","FH"],
    ["12","L. Morisi","IC"],["13","M. Zanon","OC"],
    ["11","L. Sperandio","LW"],["14","M. Bellini","RW"],["15","A. Padovani","FB"],
    ["16","G. Lucchesi","HO"],["10","T. Allan","FH"],
  ],
  "Fiji": [
    ["1","E. Ravai","LHP"],["2","S. Matavesi","HO"],["3","P. Tuilagi","THP"],
    ["4","I. Ratuva","LK"],["5","M. Sailo","LK"],["6","V. Mata","BFL"],
    ["7","L. Botia","OFL"],["8","S. Tuicuvu","N8"],
    ["9","F. Lomani","SH"],["10","C. Muntz","FH"],
    ["12","W. Nayacalevu","IC"],["13","I. Botia","OC"],
    ["11","W. Reece","LW"],["14","A. Radradra","RW"],["15","K. Murimurivalu","FB"],
  ],
  "Georgia": [
    ["1","M. Nariashvili","LHP"],["2","S. Matiashvili","HO"],["3","G. Labadze","THP"],
    ["4","K. Mikautadze","LK"],["5","N. Chkartishvili","LK"],["6","B. Gorgodze","BFL"],
    ["7","M. Sharikadze","OFL"],["8","B. Saghinadze","N8"],
    ["9","G. Begadze","SH"],["10","T. Abzhandadze","FH"],
    ["12","D. Niniashvili","IC"],["13","G. Kveseladze","OC"],
    ["11","A. Matiashvili","LW"],["14","T. Kakhoidze","RW"],["15","L. Khmaladze","FB"],
  ],
  }, // end rugby

  cricket: {
  /* ── IPL Cricket ───────────────────────────────────────────────────────── */
  "Royal Challengers Bengaluru": [
    ["18","V. Kohli","PLY"],["17","F. du Plessis","PLY"],["32","G. Maxwell","PLY"],
    ["1","D. Padikkal","PLY"],["99","M. Siraj","PLY"],["13","D. Karthik","PLY"],
    ["9","M. Lomror","PLY"],["6","W. Hasaranga","PLY"],["23","A. Russell","PLY"],
    ["19","A. Hales","PLY"],["55","J. Richardson","PLY"],["77","A. DeSilva","PLY"],
    ["21","K. Ahmed","PLY"],["5","S. Dass","PLY"],["88","R. Saini","PLY"],
  ],
  "Mumbai Indians": [
    ["45","R. Sharma","PLY"],["93","J. Bumrah","PLY"],["73","S. Yadav","PLY"],
    ["33","H. Pandya","PLY"],["32","I. Kishan","PLY"],["9","T. Varma","PLY"],
    ["8","T. David","PLY"],["17","D. Brevis","PLY"],["40","T. Dube","PLY"],
    ["15","H. Klaasen","PLY"],["7","J. Behrendorff","PLY"],["55","P. Chawla","PLY"],
    ["27","A. Tare","PLY"],["30","S. Tiwary","PLY"],["19","M. Nabi","PLY"],
  ],
  "Kolkata Knight Riders": [
    ["41","S. Iyer","PLY"],["12","A. Russell","PLY"],["74","S. Narine","PLY"],
    ["23","V. Iyer","PLY"],["8","N. Rana","PLY"],["31","T. Southee","PLY"],
    ["4","R. Powell","PLY"],["3","J. Inglis","PLY"],["99","V. Chakravarthy","PLY"],
    ["77","H. Rana","PLY"],["15","K. Paul","PLY"],["28","D. Carter","PLY"],
    ["16","G. Philip","PLY"],["19","S. Das","PLY"],["66","A. Khan","PLY"],
  ],
  "Sunrisers Hyderabad": [
    ["31","D. Warner","PLY"],["22","K. Williamson","PLY"],["15","B. Kumar","PLY"],
    ["19","R. Khan","PLY"],["16","A. Markram","PLY"],["8","T. Natarajan","PLY"],
    ["6","H. Brook","PLY"],["11","M. Vohra","PLY"],["20","A. Sharma","PLY"],
    ["7","S. Sandeep","PLY"],["4","W. Saha","PLY"],["18","U. Malik","PLY"],
    ["9","J. Suchith","PLY"],["30","K. Jadhav","PLY"],["55","M. Thakur","PLY"],
  ],
  /* ── International Cricket ─────────────────────────────────────────────── */
  "England": [
    ["8","B. Stokes","PLY"],["66","J. Root","PLY"],["30","J. Bairstow","PLY"],
    ["50","B. Anderson","PLY"],["6","S. Broad","PLY"],["34","H. Brook","PLY"],
    ["4","Z. Crawley","PLY"],["1","O. Pope","PLY"],["23","M. Wood","PLY"],
    ["17","L. Livingstone","PLY"],["9","O. Robinson","PLY"],["22","J. Leach","PLY"],
    ["3","B. Duckett","PLY"],["7","J. Smith","PLY"],["19","C. Jordan","PLY"],
  ],
  "India": [
    ["45","R. Sharma","PLY"],["18","V. Kohli","PLY"],["77","S. Gill","PLY"],
    ["93","J. Bumrah","PLY"],["33","H. Pandya","PLY"],["7","M. Shami","PLY"],
    ["17","K. Rahul","PLY"],["63","R. Jadeja","PLY"],["14","R. Ashwin","PLY"],
    ["4","S. Yadav","PLY"],["8","A. Patel","PLY"],["11","M. Siraj","PLY"],
    ["55","Y. Chahal","PLY"],["30","I. Kishan","PLY"],["19","D. Karthik","PLY"],
  ],
  "Australia": [
    ["49","S. Smith","PLY"],["31","D. Warner","PLY"],["7","P. Cummins","PLY"],
    ["56","M. Starc","PLY"],["38","T. Head","PLY"],["5","M. Labuschagne","PLY"],
    ["4","A. Carey","PLY"],["8","J. Hazlewood","PLY"],["17","N. Lyon","PLY"],
    ["3","U. Khawaja","PLY"],["55","C. Green","PLY"],["22","D. Warner","PLY"],
    ["27","A. Inglis","PLY"],["11","M. Stoinis","PLY"],["19","G. Maxwell","PLY"],
  ],
  "Sri Lanka": [
    ["6","K. Perera","PLY"],["7","D. Karunaratne","PLY"],["9","A. Mathews","PLY"],
    ["23","D. de Silva","PLY"],["17","W. Hasaranga","PLY"],["99","L. Kumara","PLY"],
    ["19","K. Mendis","PLY"],["55","D. Chandimal","PLY"],["28","N. Dickwella","PLY"],
    ["4","M. Theekshana","PLY"],["11","M. Chameera","PLY"],["33","A. Fernando","PLY"],
  ],
  "Pakistan": [
    ["92","B. Azam","PLY"],["57","M. Rizwan","PLY"],["11","S. Afridi","PLY"],
    ["3","M. Nawaz","PLY"],["44","H. Ali","PLY"],["1","A. Butt","PLY"],
    ["17","F. Zaman","PLY"],["8","I. Wasim","PLY"],["63","M. Hasnain","PLY"],
    ["33","U. Mir","PLY"],["77","Z. Mirza","PLY"],["9","S. Masood","PLY"],
    ["22","A. Khan","PLY"],["5","M. Ali","PLY"],["14","Z. Khan","PLY"],
  ],
  "New Zealand": [
    ["18","K. Williamson","PLY"],["65","T. Southee","PLY"],["8","T. Boult","PLY"],
    ["3","D. Mitchell","PLY"],["4","D. Conway","PLY"],["11","M. Chapman","PLY"],
    ["22","G. Phillips","PLY"],["13","I. Sodhi","PLY"],["7","M. Bracewell","PLY"],
    ["55","A. Milne","PLY"],["90","L. Ferguson","PLY"],["19","W. Young","PLY"],
  ],
  "West Indies": [
    ["12","N. Pooran","PLY"],["56","S. Hetmyer","PLY"],["4","R. King","PLY"],
    ["44","K. Roach","PLY"],["7","J. Holder","PLY"],["8","K. Brathwaite","PLY"],
    ["3","S. Brooks","PLY"],["22","A. Athanaze","PLY"],["17","G. Motie","PLY"],
    ["9","A. Joseph","PLY"],["10","K. Sinclair","PLY"],["19","S. Hope","PLY"],
  ],
  "South Africa": [
    ["5","T. de Bruyn","PLY"],["17","Q. de Kock","PLY"],["32","K. Zondo","PLY"],
    ["7","K. Maharaj","PLY"],["22","A. Nortje","PLY"],["4","D. Elgar","PLY"],
    ["8","L. Ngidi","PLY"],["77","T. Bavuma","PLY"],["11","M. Jansen","PLY"],
    ["9","H. Klaasen","PLY"],["33","K. Verreynne","PLY"],["19","W. Mulder","PLY"],
  ],
  "Zimbabwe": [
    ["9","S. Williams","PLY"],["4","B. Taylor","PLY"],["3","C. Ervine","PLY"],
    ["22","S. Raza","PLY"],["17","R. Mutumbami","PLY"],["7","T. Muzarabani","PLY"],
    ["8","B. Muzarabani","PLY"],["11","L. Jongwe","PLY"],["5","T. Maruma","PLY"],
  ],
  "Bangladesh": [
    ["75","S. Islam","PLY"],["17","M. Rahman","PLY"],["99","M. Mortaza","PLY"],
    ["7","M. Miraz","PLY"],["4","L. Das","PLY"],["33","N. Hossain","PLY"],
    ["22","M. Ali","PLY"],["8","T. Iqbal","PLY"],["9","M. Hossain","PLY"],
  ],
  "Afghanistan": [
    ["5","R. Khan","PLY"],["7","M. Nabi","PLY"],["8","H. Zazai","PLY"],
    ["22","I. Zadran","PLY"],["3","R. Gurbaz","PLY"],["17","N. Khan","PLY"],
    ["9","A. Khan","PLY"],["11","M. Ahmad","PLY"],["4","K. Ahmad","PLY"],
  ],
  }, // end cricket

  netball: {
  /* ── Super Netball ─────────────────────────────────────────────────────── */
  "NSW Swifts": [
    ["8","H. Housby","GK"],["13","S. Penman","GS"],["6","S. Garbin","GS"],
    ["3","M. Lylak","GA"],["7","J. Fowler","C"],["11","K. Handles","WA"],
    ["9","P. Noeli","WD"],["4","L. de Bruin","GD"],["2","S. Newton","GD"],
    ["10","L. Austin","GK"],["12","A. Corbin","GA"],["5","P. Harten","C"],
  ],
  "Melbourne Vixens": [
    ["10","L. Watson","C"],["8","M. Kumwenda","GS"],["3","K. Austin","GA"],
    ["5","E. Thwaites","GS"],["7","A. Cooke","WA"],["4","T. Turner","GD"],
    ["9","J. Sterling","GK"],["11","M. Eddy","WD"],["2","G. Roache","GD"],
    ["12","C. McLaughlin","C"],["1","R. Browne","GS"],["6","A. Maguire","GA"],
  ],
  "Queensland Firebirds": [
    ["9","S. Wood","WD"],["12","K. Ravaillion","C"],["7","G. Ebzery","WA"],
    ["4","J. Fowler","GS"],["11","M. Smith","GA"],["5","C. Price","GD"],
    ["3","T. Smith","GK"],["8","J. Stanton","WA"],["10","S. McDonald","GD"],
    ["1","R. Foote","C"],["2","A. Clayfield","GS"],["6","I. Ravaillion","WD"],
  ],
  "West Coast Fever": [
    ["12","J. Fowler-Reid","GS"],["7","A. Roelfsema","GA"],["3","P. Hadley","C"],
    ["9","A. Brazill","WA"],["5","T. Browne","GD"],["4","R. Dwyer","GK"],
    ["11","C. Bassett","WD"],["8","S. Teague","C"],["10","J. Weston","GS"],
    ["2","G. Morris","GA"],["6","D. Peers","GD"],["1","M. Collyer","GK"],
  ],
  "Adelaide Thunderbirds": [
    ["5","S. Pettitt","GS"],["3","E. Ebzery","WA"],["9","C. Bassett","C"],
    ["8","R. Stratton","GA"],["4","M. Goodling","GD"],["7","G. Watson","GK"],
    ["11","K. Smith","WD"],["12","N. Smith","GS"],["2","J. Jarvis","GA"],
    ["10","A. White","C"],["6","J. Medhurst","GD"],["1","T. Bueta","GS"],
  ],
  "Giants Netball": [
    ["3","J. van Dijk","GS"],["8","A. Farnsworth","GA"],["5","K. Pretorius","GD"],
    ["9","T. Kawa","GK"],["11","S. Smyth","C"],["7","J. Harris","WA"],
    ["4","N. Bassett","WD"],["2","S. Moir","GS"],["10","C. Luff","GA"],
    ["12","M. Ross","C"],["1","L. Heap","GD"],["6","S. Fowler","WA"],
  ],
  "Sunshine Coast Lightning": [
    ["8","S. Fowler","GS"],["3","R. Dwyer","GA"],["7","J. Roby","C"],
    ["9","K. Shimmin","WA"],["5","C. Peers","WD"],["4","L. Kooke","GD"],
    ["11","K. Stanton","GK"],["2","M. Tuimauga","GS"],["10","H. Masters","C"],
    ["12","T. Rule","GA"],["1","B. Bateson","GD"],["6","A. Quinlan","GK"],
  ],
  "Collingwood Magpies": [
    ["7","G. Pretorius","GS"],["3","M. Browne","GA"],["9","K. Moloney","C"],
    ["8","S. Sterling","WA"],["5","R. Ainsworth","WD"],["4","K. Austin","GD"],
    ["11","J. Sherwood","GK"],["2","T. Sherwood","GS"],["10","S. Hay","GA"],
    ["12","A. Heath","C"],["1","C. Maxwell","GD"],["6","N. Sunde","GK"],
  ],
  /* ── International Netball ─────────────────────────────────────────────── */
  "South Africa": [
    ["12","B. Nell","GS"],["5","S. van Aswegen","GA"],["7","A. Pienaar","C"],
    ["3","C. Stewart","WA"],["8","J. du Toit","WD"],["9","B. Nkosi","GD"],
    ["4","S. Bhayat","GK"],["10","L. Doyle","GS"],["2","N. Mhlakaza","GA"],
    ["11","A. Strydom","C"],["1","K. Williams","GD"],["6","P. Robinson","GK"],
  ],
  "Jamaica": [
    ["8","J. Williams","GS"],["3","S. Campbell","GA"],["7","K. Barrett","C"],
    ["9","C. Sterling","WA"],["5","A. Robinson","WD"],["4","T. Brown","GD"],
    ["11","K. Campbell","GK"],["2","S. Mighty","GS"],["10","P. Roper","GA"],
    ["12","D. Meikle","C"],["1","K. Harvey","GD"],["6","A. Grant","GK"],
  ],
  "Australia Diamonds": [
    ["8","S. Koenen","GS"],["3","G. Housby","GA"],["7","L. Watson","C"],
    ["9","K. Moloney","WA"],["5","K. Shimmin","WD"],["4","P. Hadley","GD"],
    ["11","A. Brazill","GK"],["2","J. Fowler","GS"],["10","H. Browne","GA"],
    ["12","L. Watson","C"],["1","A. Medhurst","GD"],["6","S. Thwaites","GK"],
  ],
  "England Roses": [
    ["8","H. Housby","GS"],["3","J. George","GA"],["7","F. Williams","C"],
    ["9","A. Pettitt","WA"],["5","C. Ebzery","WD"],["4","S. Pettitt","GD"],
    ["11","D. Oyesola","GK"],["2","E. Thwaites","GS"],["10","B. Cardwell","GA"],
    ["12","L. Malcolm","C"],["1","G. Cobden","GD"],["6","C. Ingles","GK"],
  ],
  }, // end netball
};

// Normalise a team name for lookup (remove "The", "FC", "RFC", trailing spaces)
function _normaliseTeamName(name) {
  return (name || "").toLowerCase()
    .replace(/\bthe\b/g,"").replace(/\bfc\b/g,"").replace(/\brfc\b/g,"")
    .replace(/\bac\b/g,"").replace(/\s+/g," ").trim();
}

// Convert compact [jersey, shortName, pos] to athlete object
function _compactToAthlete([jersey, shortName, pos]) {
  return { jersey, shortName, fullName: shortName, position: { abbreviation: pos } };
}

// Look up hardcoded squad by team name (fuzzy).
// Pass sport ("rugby"|"cricket"|"netball") to search that sub-object first,
// preventing England/Australia/SA/NZ collisions across sports.
function _lookupHardcodedSquad(teamName, sport) {
  const needle = _normaliseTeamName(teamName);
  // Build ordered list of dicts to search: preferred sport first, then the rest
  const allDicts = Object.values(_HARDCODED_SQUADS); // [{rugby data}, {cricket data}, {netball data}]
  const preferred = sport && _HARDCODED_SQUADS[sport] ? [_HARDCODED_SQUADS[sport]] : [];
  const rest = allDicts.filter(d => !preferred.includes(d));
  const ordered = [...preferred, ...rest];

  // Exact match pass
  for (const dict of ordered) {
    for (const key of Object.keys(dict)) {
      if (_normaliseTeamName(key) === needle) return dict[key].map(_compactToAthlete);
    }
  }
  // Partial match pass
  for (const dict of ordered) {
    for (const key of Object.keys(dict)) {
      const k = _normaliseTeamName(key);
      if (k.includes(needle) || needle.includes(k)) return dict[key].map(_compactToAthlete);
    }
  }
  return null;
}

// 2026 F1 driver grid (used when no ESPN roster API available)
const F1_DRIVERS_2026 = [
  { fullName: "Max Verstappen",    jersey: "1",  shortName: "Verstappen",  team: "Red Bull" },
  { fullName: "Liam Lawson",       jersey: "30", shortName: "Lawson",      team: "Red Bull" },
  { fullName: "Lewis Hamilton",    jersey: "44", shortName: "Hamilton",    team: "Ferrari" },
  { fullName: "Charles Leclerc",   jersey: "16", shortName: "Leclerc",     team: "Ferrari" },
  { fullName: "George Russell",    jersey: "63", shortName: "Russell",     team: "Mercedes" },
  { fullName: "Kimi Antonelli",    jersey: "12", shortName: "Antonelli",   team: "Mercedes" },
  { fullName: "Lando Norris",      jersey: "4",  shortName: "Norris",      team: "McLaren" },
  { fullName: "Oscar Piastri",     jersey: "81", shortName: "Piastri",     team: "McLaren" },
  { fullName: "Carlos Sainz",      jersey: "55", shortName: "Sainz",       team: "Williams" },
  { fullName: "Alexander Albon",   jersey: "23", shortName: "Albon",       team: "Williams" },
  { fullName: "Fernando Alonso",   jersey: "14", shortName: "Alonso",      team: "Aston Martin" },
  { fullName: "Lance Stroll",      jersey: "18", shortName: "Stroll",      team: "Aston Martin" },
  { fullName: "Nico Hülkenberg",   jersey: "27", shortName: "Hülkenberg",  team: "Sauber" },
  { fullName: "Gabriel Bortoleto", jersey: "5",  shortName: "Bortoleto",   team: "Sauber" },
  { fullName: "Pierre Gasly",      jersey: "10", shortName: "Gasly",       team: "Alpine" },
  { fullName: "Jack Doohan",       jersey: "7",  shortName: "Doohan",      team: "Alpine" },
  { fullName: "Yuki Tsunoda",      jersey: "22", shortName: "Tsunoda",     team: "RB" },
  { fullName: "Isack Hadjar",      jersey: "6",  shortName: "Hadjar",      team: "RB" },
  { fullName: "Oliver Bearman",    jersey: "87", shortName: "Bearman",     team: "Haas" },
  { fullName: "Esteban Ocon",      jersey: "31", shortName: "Ocon",        team: "Haas" },
];

// Rugby competition IDs to try for name-based team lookup
const RUGBY_COMP_IDS = ["270559", "270557", "289234", "267979", "242041", "180659"];

async function _findRugbyTeamId(teamName) {
  const cacheKey = `rugby_lookup_${teamName.toLowerCase()}`;
  if (_rosterCache[cacheKey]) return _rosterCache[cacheKey];
  const nameLow = teamName.toLowerCase().replace(/^(the|fc|rc|asr?)\s/i, "");
  for (const cid of RUGBY_COMP_IDS) {
    try {
      const data = await fetch(`https://site.api.espn.com/apis/site/v2/sports/rugby/${cid}/teams?limit=100`).then(r => r.ok ? r.json() : null);
      if (!data) continue;
      const teams = data.sports?.[0]?.leagues?.[0]?.teams || data.teams || [];
      const match = teams.find(t => {
        const dn = (t.team?.displayName || t.displayName || "").toLowerCase();
        return dn.includes(nameLow) || nameLow.includes(dn) || dn.split(" ")[0] === nameLow.split(" ")[0];
      });
      if (match) {
        const result = { id: match.team?.id || match.id, compId: cid };
        _rosterCache[cacheKey] = result;
        return result;
      }
    } catch {}
  }
  return null;
}

async function loadPlayerPicker(homeTeamId, awayTeamId, leagueSlug, homeName, awayName, sport = "soccer") {
  const panel = document.querySelector("[data-player-picker]");
  if (!panel) return;

  const esc = s => String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

  // ── F1: show hardcoded driver grid ─────────────────────────────────────────
  if (sport === "formula-one") {
    _buildPickerUI(panel, esc, homeName, awayName, F1_DRIVERS_2026, F1_DRIVERS_2026, "formula-one");
    return;
  }

  panel.innerHTML = `<div class="pp-loading"><span class="pp-spinner"></span> Loading squads…</div>`;

  // ── Soccer: ESPN soccer roster API ─────────────────────────────────────────
  if (sport === "soccer") {
    const slugFallbacks = [...new Set([leagueSlug, "eng.1", "fra.1", "esp.1", "ger.1", "ita.1", "uefa.champions", "usa.1", "rsa.1"])];
    async function fetchSoccerRoster(teamId) {
      if (!teamId) return [];
      if (_rosterCache[`soccer_${teamId}`]) return _rosterCache[`soccer_${teamId}`];
      for (const slug of slugFallbacks) {
        try {
          const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${slug}/teams/${teamId}/roster`);
          if (!res.ok) continue;
          const data = await res.json();
          const athletes = data.athletes || [];
          if (athletes.length) { _rosterCache[`soccer_${teamId}`] = athletes; return athletes; }
        } catch {}
      }
      return [];
    }
    const [homeSquad, awaySquad] = await Promise.all([fetchSoccerRoster(homeTeamId), fetchSoccerRoster(awayTeamId)]);
    _buildPickerUI(panel, esc, homeName, awayName, homeSquad, awaySquad, "soccer");
    return;
  }

  // ── Rugby / Cricket / Netball: hardcoded squads → text fallback ───────────
  {
    const homeSquad = _lookupHardcodedSquad(homeName, sport) || [];
    const awaySquad = _lookupHardcodedSquad(awayName, sport) || [];
    if (homeSquad.length || awaySquad.length) {
      _buildPickerUI(panel, esc, homeName, awayName, homeSquad, awaySquad, sport);
    } else {
      _buildTextFallback(panel, esc, homeName, awayName);
    }
    return;
  }
}

function _buildPickerUI(panel, esc, homeName, awayName, homeSquad, awaySquad, sport) {
  const posConfig = sport === "rugby"
    ? { FWD: { keys: ["LHP","THP","HO","LK","BFL","OFL","N8"],         label: "Forwards" },
        BCK: { keys: ["SH","FH","IC","OC","LW","RW","FB"],              label: "Backs"    } }
    : sport === "cricket" || sport === "netball"
    ? { PLY: { keys: ["PLY","GS","GA","C","WA","WD","GD","GK"],         label: "Players"  } }
    : { GK:  { keys: ["GK","G"],                                        label: "Goalkeepers" },
        DEF: { keys: ["D","CB","LB","RB","LWB","RWB","SW"],              label: "Defenders"   },
        MID: { keys: ["M","MF","CM","DM","AM","LM","RM","WM","ATT","MD","MF"], label: "Midfielders" },
        FWD: { keys: ["F","ST","LW","RW","CF","SS","FW","ATT","W"],      label: "Forwards"    } };

  function groupPlayers(players) {
    const groups = {};
    Object.keys(posConfig).forEach(k => { groups[k] = []; });
    const fallbackKey = Object.keys(posConfig).at(-1);
    players.forEach(p => {
      const abbr = (p.position?.abbreviation || p.position?.name || "").toUpperCase();
      const key  = Object.keys(posConfig).find(k => posConfig[k].keys.includes(abbr)) || fallbackKey;
      groups[key].push(p);
    });
    return groups;
  }

  function buildSquad(players) {
    if (!players.length) return `<p class="pp-empty">Squad data unavailable</p>`;
    // For F1 and single-group sports, skip position grouping
    if (sport === "formula-one") {
      return `<div class="pp-pos-group">
        <span class="pp-pos-label">Drivers</span>
        <div class="pp-player-grid">
          ${players.map(p => `<button class="pp-player" type="button" data-pick-player="${esc(p.fullName)}">
            <span class="pp-num">${p.jersey || "•"}</span>
            <span class="pp-name">${esc(p.shortName)}</span>
          </button>`).join("")}
        </div>
      </div>`;
    }
    const groups = groupPlayers(players);
    return Object.entries(posConfig).filter(([k]) => groups[k]?.length).map(([k, cfg]) =>
      `<div class="pp-pos-group">
        <span class="pp-pos-label">${cfg.label}</span>
        <div class="pp-player-grid">
          ${groups[k].map(p => `<button class="pp-player" type="button" data-pick-player="${esc(p.fullName || p.displayName || "")}">
            <span class="pp-num">${p.jersey || "•"}</span>
            <span class="pp-name">${esc(p.shortName || p.displayName || p.fullName || "")}</span>
          </button>`).join("")}
        </div>
      </div>`
    ).join("");
  }

  // For F1, show a single shared list (both "teams" are all drivers)
  const isF1 = sport === "formula-one";
  if (isF1) {
    panel.innerHTML = `
      <div class="pp-squad" data-pp-squad="home">${buildSquad(homeSquad)}</div>`;
  } else {
    panel.innerHTML = `
      <div class="pp-tabs">
        <button class="pp-tab is-active" type="button" data-pp-tab="home">${esc(homeName)}</button>
        <button class="pp-tab" type="button" data-pp-tab="away">${esc(awayName)}</button>
      </div>
      <div class="pp-squad" data-pp-squad="home">${buildSquad(homeSquad)}</div>
      <div class="pp-squad" data-pp-squad="away" hidden>${buildSquad(awaySquad)}</div>`;

    panel.querySelectorAll("[data-pp-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        panel.querySelectorAll("[data-pp-tab]").forEach(b => b.classList.toggle("is-active", b === btn));
        panel.querySelectorAll("[data-pp-squad]").forEach(sq => { sq.hidden = sq.dataset.ppSquad !== btn.dataset.ppTab; });
      });
    });
  }

  _wirePickerButtons(panel);
}

function _buildTextFallback(panel, esc, homeName, awayName) {
  panel.innerHTML = `
    <div class="pp-tabs">
      <button class="pp-tab is-active" type="button" data-pp-tab="home">${esc(homeName)}</button>
      <button class="pp-tab" type="button" data-pp-tab="away">${esc(awayName)}</button>
    </div>
    <div class="pp-text-entry" data-pp-squad="home">
      <input class="pp-text-input" type="text" placeholder="Type a player name…" autocomplete="off" spellcheck="false" data-pp-text-input>
      <button class="pp-text-confirm" type="button">Select</button>
    </div>
    <div class="pp-text-entry" data-pp-squad="away" hidden>
      <input class="pp-text-input" type="text" placeholder="Type a player name…" autocomplete="off" spellcheck="false" data-pp-text-input>
      <button class="pp-text-confirm" type="button">Select</button>
    </div>`;

  panel.querySelectorAll("[data-pp-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      panel.querySelectorAll("[data-pp-tab]").forEach(b => b.classList.toggle("is-active", b === btn));
      panel.querySelectorAll("[data-pp-squad]").forEach(sq => { sq.hidden = sq.dataset.ppSquad !== btn.dataset.ppTab; });
    });
  });

  panel.querySelectorAll("[data-pp-squad]").forEach(squad => {
    const input  = squad.querySelector("[data-pp-text-input]");
    const btn    = squad.querySelector("[data-pp-text-confirm]");
    const commit = () => {
      const name = input?.value.trim();
      if (!name) return;
      const target = panel.dataset.pickerTarget;
      const inputEl = document.querySelector(`[data-player-input="${target}"]`);
      const labelEl = document.querySelector(`[data-player-label="${target}"]`);
      if (inputEl) inputEl.value = name;
      if (labelEl) labelEl.textContent = name;
      const wrap = document.getElementById("player-picker-panel");
      if (wrap) wrap.hidden = true;
    };
    btn?.addEventListener("click", commit);
    input?.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); commit(); } });
  });
}

function _wirePickerButtons(panel) {
  panel.querySelectorAll("[data-pick-player]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name   = btn.dataset.pickPlayer;
      const target = panel.dataset.pickerTarget;
      const input  = document.querySelector(`[data-player-input="${target}"]`);
      const label  = document.querySelector(`[data-player-label="${target}"]`);
      if (input) input.value = name;
      if (label) label.textContent = name;
      panel.querySelectorAll("[data-pick-player]").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const wrap = document.getElementById("player-picker-panel");
      if (wrap) wrap.hidden = true;
    });
  });
}

async function syncSupabaseUser() {
  const client = getSupabaseClient();
  if (!client) {
    enforceProtectedRoutes();
    return;
  }

  const { data } = await client.auth.getUser();
  const user = data?.user;
  if (!user) {
    storeCurrentUser(null);
    enforceProtectedRoutes();
    return;
  }

  // Check if admin has blocked this account
  const { data: profile } = await client
    .from("profiles")
    .select("blocked")
    .eq("id", user.id)
    .single();

  if (profile?.blocked) {
    await client.auth.signOut();
    storeCurrentUser(null);
    if (!window.location.pathname.endsWith("account.html")) {
      window.location.href = "account.html?blocked=1";
    } else {
      const msg = document.querySelector("[data-auth-message]");
      if (msg) msg.textContent = "Your account has been suspended. Please contact support.";
    }
    return;
  }

  storeCurrentUser({
    id: user.id,
    name: user.user_metadata?.full_name || user.email || "Lockshot player",
    contact: user.email,
    createdAt: user.created_at
  });
  await upsertSupabaseProfile(user);
  enforceProtectedRoutes();
  if (typeof loadWalletBalance === "function") loadWalletBalance();
  if (typeof renderWalletPage === "function") renderWalletPage();
  if (typeof initTopupButtons === "function") initTopupButtons();
}

function protectedRouteNames() {
  return ["checkout.html", "game.html", "penalty.html", "gear.html", "drift.html", "boost.html", "reaction.html", "circle.html", "slice.html"];
}

function enforceProtectedRoutes() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (!protectedRouteNames().includes(page) || isSignedIn()) return;
  const redirect = encodeURIComponent(`${page}${window.location.search || ""}${window.location.hash || ""}`);
  window.location.href = `account.html?redirect=${redirect}`;
}

function redirectAfterAuth() {
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  if (redirect) {
    window.location.href = redirect;
    return;
  }
  goToPage("competitions");
}

function loadCart() {
  try {
    const items = JSON.parse(window.localStorage.getItem("lockshotCart") || "[]");
    return new Map(items.map((item) => [item.name, item]));
  } catch {
    return new Map();
  }
}

function storeCart() {
  try {
    window.localStorage.setItem("lockshotCart", JSON.stringify([...cart.values()]));
  } catch {
    // Local previews can block storage; the basket still works for this page load.
  }
}

function hydrateCartFromUrl() {
  if (!checkoutSection) return;

  const params = new URLSearchParams(window.location.search);
  const game = params.get("game");
  const rawName = params.get("entry");
  const price = Number(params.get("price"));
  const qty = Number(params.get("qty") || 1);

  if (!rawName || !price) return;

  const name = withPrizeContext(rawName, game, price);

  cart.clear();
  cart.set(name, {
    name,
    price,
    qty: Math.max(1, qty),
    game: game || undefined
  });
  storeCart();
}

function defaultPrizeContext(price = 5) {
  return {
    name: "Weekly Giveaway: R2,500",
    price
  };
}

function getActivePrize() {
  try {
    return JSON.parse(window.localStorage.getItem("lockshotActivePrize") || "null");
  } catch {
    return null;
  }
}

function getUrlPrizeContext() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("prize");
  const price = Number(params.get("price") || 0);
  const game = params.get("game");
  return name ? { name, price, game } : null;
}

function getCurrentPrizeContext() {
  return getUrlPrizeContext() || getActivePrize() || defaultPrizeContext(5);
}

function getPrizeStandingsType(prize = getCurrentPrizeContext()) {
  return prize?.name?.toLowerCase().includes("monthly") ? "monthly" : "weekly";
}

function prizeTokenKey(prize = getCurrentPrizeContext()) {
  if (prize?.game === "sports") return "sports";
  return getPrizeStandingsType(prize);
}

function storeActivePrize(prize) {
  try {
    window.localStorage.setItem("lockshotActivePrize", JSON.stringify(prize));
  } catch {
    // Local previews can block storage; the checkout URL still carries the current item.
  }
  renderSportsEntryState();
}

function withPrizeContext(entryName, game, price) {
  if (!game || entryName.includes(" - ")) return entryName;

  const gameNames = {
    penalty: "Penalty Lock round",
    gear: "Gear Shift Lock round",
    drift: "Drift Line Lock round",
    boost: "Boost Lock round",
    reaction: "Timer Lock round",
    circle: "Circle Lock round",
    slice: "Slice Lock round",
    car: "Traffic Dodge round",
    boxball: "Box Ball round",
    dino: "Jump Runner round",
    subway: "Lane Surfer round",
    color: "Color Rush round",
    memory: "Color Memory round"
  };

  if (entryName !== gameNames[game]) return entryName;

  const activePrize = getActivePrize() || defaultPrizeContext(price);
  return `${activePrize.name} - ${gameNames[game]}`;
}

function goToCheckout(prize) {
  const url = new URL("checkout.html", window.location.href);
  url.searchParams.set("entry", prize.name);
  url.searchParams.set("price", String(prize.price));
  url.searchParams.set("qty", String(prize.qty || 1));
  if (prize.game) {
    url.searchParams.set("game", prize.game);
    storeActivePrize({ name: prize.name, price: prize.price, game: prize.game });
  }
  window.location.href = url.href;
}

function clearCart() {
  cart.clear();
  try {
    window.localStorage.removeItem("lockshotCart");
  } catch {
    // Local previews can block storage; the basket still clears for this page load.
  }
}

function getTokenBank() {
  try {
    const bank = JSON.parse(window.localStorage.getItem("lockshotTokenBank") || "{}");
    const legacy = Number(window.localStorage.getItem("lockshotPaidAttempts") || 0);
    if (legacy && !bank.weekly && !bank.monthly && !bank.sports) {
      bank[prizeTokenKey()] = legacy;
    }
    return {
      weekly: Number(bank.weekly || 0),
      monthly: Number(bank.monthly || 0),
      sports: Number(bank.sports || 0)
    };
  } catch {
    return { weekly: 0, monthly: 0, sports: 0 };
  }
}

function storeTokenBank(bank) {
  try {
    window.localStorage.setItem("lockshotTokenBank", JSON.stringify({
      weekly: Number(bank.weekly || 0),
      monthly: Number(bank.monthly || 0),
      sports: Number(bank.sports || 0)
    }));
  } catch {
    // Local previews can block storage; the visible attempts still update for this page load.
  }
}

function getStoredPaidAttempts(prize = getCurrentPrizeContext()) {
  const bank = getTokenBank();
  return Number(bank[prizeTokenKey(prize)] || 0);
}

function storePaidAttempts(value, prize = getCurrentPrizeContext()) {
  const key = prizeTokenKey(prize);
  const bank = getTokenBank();
  bank[key] = Math.max(0, Number(value || 0));
  paidAttempts = bank[key];
  try {
    window.localStorage.setItem("lockshotPaidAttempts", String(paidAttempts));
  } catch {
    // Local previews can block storage; the visible attempts still update for this page load.
  }
  storeTokenBank(bank);
  renderQuickPlay();
  renderCompetitionTokenActions();
  renderGameMenuTokens();
  renderSportsEntryState();
}

function getStoredMoneyWon() {
  try {
    return {
      verified: Number(window.localStorage.getItem("lockshotMoneyWon") || 0),
      pending: Number(window.localStorage.getItem("lockshotPendingWon") || 0)
    };
  } catch {
    return { verified: 0, pending: 0 };
  }
}

function hydratePaidAttemptsFromUrl() {
  if (!gameSection) return;

  const params = new URLSearchParams(window.location.search);
  const attempts = Number(params.get("attempts") || 0);
  const prize = params.get("prize");
  const price = Number(params.get("price") || 10);
  let prizeContext = getActivePrize();

  if (prize) {
    prizeContext = { name: prize, price };
    storeActivePrize(prizeContext);
  }

  if (attempts) storePaidAttempts(attempts, prizeContext || getCurrentPrizeContext());
  paidAttempts = getStoredPaidAttempts(prizeContext || getCurrentPrizeContext());
}

function storePendingFixture(fixture) {
  try { localStorage.setItem("lockshotPendingFixture", JSON.stringify(fixture)); } catch {}
}
function getPendingFixture() {
  try { return JSON.parse(localStorage.getItem("lockshotPendingFixture") || "null"); } catch { return null; }
}
function clearPendingFixture() {
  try { localStorage.removeItem("lockshotPendingFixture"); } catch {}
}

function goToGame(entries, game = null) {
  if (game === "sports" || getActivePrize()?.game === "sports") {
    const url = new URL("sports-iq.html", window.location.href);
    url.hash = "prediction-arena";
    // Carry pending fixture through checkout so it auto-selects on return
    const pf = getPendingFixture();
    if (pf?.home) {
      url.searchParams.set("pfhome", pf.home);
      url.searchParams.set("pfaway", pf.away);
      url.searchParams.set("pfleague", pf.league || "");
      url.searchParams.set("pfstatus", pf.status || "Upcoming");
    }
    window.location.href = url.href;
    return;
  }
  const arcadeGames = ["car", "boxball", "dino", "subway", "color", "memory"];
  const safeGame = ["penalty", "gear", "drift", "boost", "reaction", "circle", "slice"].includes(game) ? game : null;
  const url = new URL(arcadeGames.includes(game) ? "arcade.html" : safeGame ? `${safeGame}.html` : "game.html", window.location.href);
  const activePrize = getActivePrize();

  url.searchParams.set("attempts", String(entries));
  if (arcadeGames.includes(game)) url.searchParams.set("game", game);
  if (activePrize?.name) {
    url.searchParams.set("prize", activePrize.name);
    url.searchParams.set("price", String(activePrize.price || 10));
  }
  window.location.href = url.href;
}

function goToGameCheckout(game) {
  const gameNames = {
    penalty: "Penalty Lock round",
    gear: "Gear Shift Lock round",
    drift: "Drift Line Lock round",
    boost: "Boost Lock round",
    reaction: "Timer Lock round",
    circle: "Circle Lock round",
    slice: "Slice Lock round",
    car: "Traffic Dodge round",
    boxball: "Box Ball round",
    dino: "Jump Runner round",
    subway: "Lane Surfer round",
    color: "Color Rush round",
    memory: "Color Memory round"
  };
  const params = new URLSearchParams(window.location.search);
  const urlPrize = params.get("prize");
  const urlPrice = Number(params.get("price"));
  const activePrize = getActivePrize() || (urlPrize ? { name: urlPrize, price: urlPrice || 5 } : defaultPrizeContext(5));
  const entryName = activePrize?.name ? `${activePrize.name} - ${gameNames[game]}` : gameNames[game];
  const entryPrice = activePrize?.price || 5;
  const url = new URL("checkout.html", window.location.href);
  url.searchParams.set("entry", entryName || "Lockshot game round");
  url.searchParams.set("price", String(entryPrice));
  url.searchParams.set("qty", "1");
  url.searchParams.set("game", game);
  window.location.href = url.href;
}

function requireAccount(message = "Create an account or log in before entering.") {
  if (isSignedIn()) return true;
  if (authMessage) authMessage.textContent = message;
  closeSlip();
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (!window.location.pathname.endsWith("account.html")) {
    const redirect = encodeURIComponent(`${page}${window.location.search || ""}${window.location.hash || ""}`);
    window.location.href = `account.html?redirect=${redirect}`;
  } else {
    goToPage("account");
  }
  return false;
}

function handleAuthGate(event) {
  if (isSignedIn()) return;
  event.preventDefault();
  if (authMessage) authMessage.textContent = "Log in or sign up before entering.";
  goToPage("account");
}

function getPlayerHighScore() {
  try {
    return Number(window.localStorage.getItem("lockshotSpotHighScore") || 0);
  } catch {
    return 0;
  }
}

function storePlayerHighScore(score) {
  try {
    window.localStorage.setItem("lockshotSpotHighScore", String(score));
  } catch {
    // Local file previews can block storage, so the visible score still updates for this session.
  }
  recordCompetitionPoints("Spot", Math.min(30, score));
}

function getPenaltyHighScore() {
  try {
    const stored = Number(window.localStorage.getItem("lockshotPenaltyHighScore") || 0);
    return stored > 30 ? scoreToCompetitionPoints(stored, 3000) : stored;
  } catch {
    return 0;
  }
}

function getModeHighScore(mode) {
  try {
    return Number(window.localStorage.getItem(`lockshot${mode}HighScore`) || 0);
  } catch {
    return 0;
  }
}

function getStoredScore(key) {
  try {
    return Number(window.localStorage.getItem(key) || 0);
  } catch {
    return 0;
  }
}

function storeModeHighScore(mode, score) {
  try {
    window.localStorage.setItem(`lockshot${mode}HighScore`, String(score));
  } catch {
    // Local file previews can block storage, so the visible score still updates for this session.
  }
  const pointMap = {
    Gear: scoreToCompetitionPoints(score, 3000),
    Drift: scoreToCompetitionPoints(score, 1000),
    Boost: scoreToCompetitionPoints(score, 3000)
  };
  recordCompetitionPoints(mode, pointMap[mode] || Math.min(30, score));
}

function storePenaltyHighScore(score) {
  try {
    window.localStorage.setItem("lockshotPenaltyHighScore", String(score));
  } catch {
    // Local file previews can block storage, so the visible score still updates for this session.
  }
  recordCompetitionPoints("Penalty", Math.min(30, score));
}

function updateHeader() {
  if (!topbar) return;
  topbar.classList.toggle("is-scrolled", window.scrollY > 24);
}

function playLogoCrash() {
  if (!brandLogo || logoHasPlayed) return;
  logoHasPlayed = true;
  brandLogo.classList.remove("is-animating");
  void brandLogo.offsetWidth;
  brandLogo.classList.add("is-animating");
}

function handleLogoTopReplay() {
  // Logo effect intentionally runs once on first page load.
}

function openSlip() {
  if (!drawer || !scrim) return;
  drawer.classList.add("is-open");
  scrim.classList.add("is-open");
  document.body.classList.add("is-slip-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeSlip() {
  if (!drawer || !scrim) return;
  drawer.classList.remove("is-open");
  scrim.classList.remove("is-open");
  document.body.classList.remove("is-slip-open");
  drawer.setAttribute("aria-hidden", "true");
}

function openMenu() {
  if (!menuOverlay) return;
  menuOverlay.classList.add("is-open");
  menuOverlay.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  if (!menuOverlay) return;
  menuOverlay.classList.remove("is-open");
  menuOverlay.setAttribute("aria-hidden", "true");
}

function routeFromHash() {
  const hash = window.location.hash.replace("#", "") || "top";
  return pageRoutes[hash] ? hash : "top";
}

function setActiveNav(route) {
  document.querySelectorAll(".bottom-nav a").forEach((link) => {
    const linkRoute = link.getAttribute("href")?.replace("#", "") || "top";
    link.classList.toggle("active", linkRoute === route);
  });
}

function showPage(route = routeFromHash(), shouldScroll = true) {
  document.body.dataset.page = route;
  setActiveNav(route);
  updateHeader();

  if (shouldScroll) {
    const target = document.querySelector(pageRoutes[route] || pageRoutes.top);
    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }
}

function goToPage(route) {
  if (!pageRoutes[route]) return;
  if (pageFiles[route] && !window.location.pathname.endsWith(pageFiles[route])) {
    window.location.href = pageFiles[route];
    return;
  }
  if (window.location.hash === `#${route}` || (!window.location.hash && route === "top")) {
    showPage(route);
  } else {
    window.location.hash = route === "top" ? "top" : route;
  }
}

function renderCount() {
  const count = totalEntries();
  if (cartCount) cartCount.textContent = count;
}

function competitionGameUrl(prize, tokens) {
  const url = new URL("game.html", window.location.href);
  url.searchParams.set("attempts", String(tokens));
  url.searchParams.set("prize", prize.name);
  url.searchParams.set("price", String(prize.price));
  return url.href;
}

function renderQuickPlay() {
  if (!quickPlayPanel) return;
  const bank = getTokenBank();
  const hasWeekly = bank.weekly > 0;
  const hasMonthly = bank.monthly > 0;
  quickPlayPanel.hidden = !(hasWeekly || hasMonthly);
  if (quickTotalCount) quickTotalCount.textContent = bank.weekly + bank.monthly;
  if (quickPlayOptions && !(hasWeekly || hasMonthly)) quickPlayOptions.hidden = true;
  if (quickPlayTrigger && !(hasWeekly || hasMonthly)) quickPlayTrigger.setAttribute("aria-expanded", "false");
  if (quickWeeklyCount) quickWeeklyCount.textContent = bank.weekly;
  if (quickMonthlyCount) quickMonthlyCount.textContent = bank.monthly;
  if (quickPlayWeekly) {
    quickPlayWeekly.hidden = !hasWeekly;
    quickPlayWeekly.href = competitionGameUrl({ name: "Weekly Giveaway: R2,500", price: 5 }, bank.weekly);
  }
  if (quickPlayMonthly) {
    quickPlayMonthly.hidden = !hasMonthly;
    quickPlayMonthly.href = competitionGameUrl({ name: "Monthly Giveaway: R10,000", price: 10 }, bank.monthly);
  }
}

function initQuickPlay() {
  if (!quickPlayTrigger || !quickPlayOptions || quickPlayTrigger.dataset.ready === "true") return;
  quickPlayTrigger.dataset.ready = "true";
  quickPlayPanel?.addEventListener("mouseenter", () => {
    quickPlayOptions.hidden = false;
    quickPlayTrigger.setAttribute("aria-expanded", "true");
  });
  quickPlayPanel?.addEventListener("mouseleave", () => {
    quickPlayOptions.hidden = true;
    quickPlayTrigger.setAttribute("aria-expanded", "false");
  });
  quickPlayTrigger.addEventListener("click", () => {
    const nextOpen = quickPlayOptions.hidden;
    quickPlayOptions.hidden = !nextOpen;
    quickPlayTrigger.setAttribute("aria-expanded", String(nextOpen));
  });
}

function renderAccount() {
  const bank = getTokenBank();
  const totalTokens = bank.weekly + bank.monthly + bank.sports;
  const money = getStoredMoneyWon();
  document.body.classList.toggle("is-signed-in", isSignedIn());
  if (accountTokens) accountTokens.textContent = totalTokens;
  if (accountWeeklyTokenCount) accountWeeklyTokenCount.textContent = bank.weekly;
  if (accountMonthlyTokenCount) accountMonthlyTokenCount.textContent = bank.monthly;
  if (accountWeeklyTokenNote) accountWeeklyTokenNote.textContent = bank.weekly ? `${bank.weekly} weekly token${bank.weekly === 1 ? "" : "s"} ready.` : "No weekly tokens available.";
  if (accountMonthlyTokenNote) accountMonthlyTokenNote.textContent = bank.monthly ? `${bank.monthly} monthly token${bank.monthly === 1 ? "" : "s"} ready.` : "No monthly tokens available.";
  if (accountWeeklyPlay) {
    accountWeeklyPlay.hidden = bank.weekly <= 0;
    accountWeeklyPlay.href = competitionGameUrl({ name: "Weekly Giveaway: R2,500", price: 5 }, bank.weekly);
  }
  if (accountMonthlyPlay) {
    accountMonthlyPlay.hidden = bank.monthly <= 0;
    accountMonthlyPlay.href = competitionGameUrl({ name: "Monthly Giveaway: R10,000", price: 10 }, bank.monthly);
  }
  renderQuickPlay();
  if (accountMoneyWon) accountMoneyWon.textContent = formatRand(money.verified);
  if (accountPendingWon) accountPendingWon.textContent = formatRand(money.pending);
  if (accountMoneyNote) {
    accountMoneyNote.textContent = money.verified
      ? "Verified winnings ready in your Lockshot record."
      : money.pending
        ? "Pending winnings are waiting for result checks."
        : "Verified winnings will appear here after result checks.";
  }
  if (isSignedIn()) {
    if (accountState) accountState.textContent = `Signed in as ${currentUser.name || "Lockshot player"}`;
    if (accountDetail) accountDetail.textContent = currentUser.demo ? `${currentUser.contact} - demo mode` : currentUser.contact;
    if (authMessage) {
      authMessage.textContent = currentUser.demo
        ? "Demo account active. Add Supabase keys when you are ready for real email login."
        : "Account active. You can enter competitions.";
    }
    if (loginButton) loginButton.textContent = "Account";
    if (signOutButton) signOutButton.hidden = false;
    authCards.forEach((card) => card.classList.add("is-signed-in"));
  } else {
    if (accountState) accountState.textContent = "Not signed in";
    if (accountDetail) accountDetail.textContent = "Create an account or log in to start playing.";
    if (authMessage) authMessage.textContent = "Account is required before entries can be added.";
    if (loginButton) loginButton.textContent = "Log in";
    if (signOutButton) signOutButton.hidden = true;
    authCards.forEach((card) => card.classList.remove("is-signed-in"));
  }
  renderSportsEntryState();
}

function totalEntries() {
  return [...cart.values()].reduce((sum, item) => sum + item.qty, 0);
}

function bulkDiscountForQty(qty) {
  if (qty >= 10) return 0.15;
  if (qty >= 5) return 0.1;
  if (qty >= 3) return 0.05;
  return 0;
}

function selectedUnitPrice() {
  const basePrice = selectedPrize.basePrice || selectedPrize.price;
  return basePrice * (1 - bulkDiscountForQty(selectedPrize.qty));
}

function renderCheckout() {
  const items = [...cart.values()];
  const count = totalEntries();
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (checkoutItems) checkoutItems.textContent = count ? `${count} skill entries` : "No entries yet";
  if (checkoutDetail) {
    checkoutDetail.textContent = count
      ? items.map((item) => `${item.qty} x ${item.name}`).join(" | ")
      : "Add a competition entry above to build your basket.";
  }
  if (checkoutTotal) checkoutTotal.textContent = formatRand(total);
  if (checkoutQty) checkoutQty.textContent = count || 1;
  if (payLabel) payLabel.textContent = count ? `Buy ${count} Entr${count === 1 ? "y" : "ies"} & Play` : "Add Entry First";
}

function updateCheckoutQty(qty) {
  const items = [...cart.values()];
  if (!items.length) return;
  const item = items[0];
  item.qty = Math.max(1, qty);
  cart.set(item.name, item);
  storeCart();
  renderCheckout();
}

function renderSlip() {
  if (slipPrice) slipPrice.textContent = formatRand(selectedUnitPrice() * selectedPrize.qty);
  if (slipName) {
    // On the sports page strip the "Sports Predict: " prefix for a cleaner match name
    const rawName = selectedPrize.name || "";
    slipName.textContent = rawName.replace(/^Sports Predict:\s*/i, "");
  }
  if (slipQty) slipQty.textContent = selectedPrize.qty;
  // Update singular/plural label on the sports slip
  const entryLabel = document.querySelector("[data-slip-entry-label]");
  if (entryLabel) entryLabel.textContent = selectedPrize.qty === 1 ? "y" : "ies";
  document.querySelectorAll("[data-bulk-qty]").forEach((item) => {
    item.classList.toggle("is-selected", Number(item.dataset.bulkQty) === selectedPrize.qty);
  });
}

function setHeroSlide(index) {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[activeHeroSlide];
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.toggle("is-sports-slide", slide.key === "sports");

  document.querySelectorAll("[data-hero-slide]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.heroSlide === slide.key);
  });
  document.querySelectorAll("[data-slide-copy]").forEach((item) => {
    item.hidden = item.dataset.slideCopy !== slide.key;
  });
  document.querySelectorAll("[data-timer-card]").forEach((item) => {
    item.hidden = item.dataset.timerCard !== slide.key;
    item.classList.toggle("is-active", item.dataset.timerCard === slide.key);
  });
  document.querySelectorAll(".countdown").forEach((item) => {
    item.classList.toggle("is-hidden", !document.querySelector(`[data-timer-card="${slide.key}"]`));
  });
  document.querySelectorAll("[data-slide-dot]").forEach((item) => {
    item.classList.toggle("active", item.dataset.slideDot === slide.key);
  });

  if (heroKicker) heroKicker.textContent = slide.kicker;
  if (heroTitle) heroTitle.textContent = slide.title;
  if (heroButton) {
    heroButton.textContent = slide.button;
    heroButton.setAttribute("href", slide.href || "competitions.html");
  }
}

function initHeroSwipe() {
  const hero = document.querySelector(".hero");
  if (!hero || hero.dataset.swipeReady === "true") return;
  hero.dataset.swipeReady = "true";
  let startX = 0, startY = 0;

  // Touch events — reliable on mobile regardless of touch-action
  hero.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  hero.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    setHeroSlide(activeHeroSlide + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // Pointer events for mouse drag on desktop
  hero.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    startX = e.clientX;
    startY = e.clientY;
  });
  hero.addEventListener("pointerup", (e) => {
    if (e.pointerType === "touch") return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    setHeroSlide(activeHeroSlide + (dx < 0 ? 1 : -1));
  });

  // Keyboard arrow keys
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  setHeroSlide(activeHeroSlide - 1);
    if (e.key === "ArrowRight") setHeroSlide(activeHeroSlide + 1);
  });
}

function updateGamePreview() {
  if (gameStatus) {
    const label = activeGame === "penalty" ? "round" : "attempt";
    gameStatus.textContent = paidAttempts ? `${paidAttempts} ${label}${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";
  }

  if (gameNote) {
    gameNote.textContent = paidAttempts
      ? "Tap the image where you believe the missing ball should be, then submit your Lockshot."
      : "Pay for entries, then place your marker where the missing ball should be.";
  }
}

function renderSpotGame() {
  if (attemptsLeft) attemptsLeft.textContent = paidAttempts;
  if (currentScoreLabel) currentScoreLabel.textContent = currentScore === null ? "-" : currentScore;
  if (playerHighScoreLabel) playerHighScoreLabel.textContent = playerHighScore;
  if (submitSpotButton) submitSpotButton.disabled = !paidAttempts || !markerPosition;
  if (activeGame === "spot" && gameStatus) gameStatus.textContent = paidAttempts ? `${paidAttempts} attempt${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";
}

function renderPenaltyGame() {
  if (penaltyAttemptsLeft) penaltyAttemptsLeft.textContent = paidAttempts;
  if (penaltyShotCount) penaltyShotCount.textContent = `${penaltyShotNumber} / 3`;
  if (penaltyCurrentScoreLabel) penaltyCurrentScoreLabel.textContent = penaltyScore === null ? "-" : penaltyScore;
  if (penaltyHighScoreLabel) penaltyHighScoreLabel.textContent = penaltyHighScore;
  if (resetPenaltyButton) {
    resetPenaltyButton.disabled = true;
    resetPenaltyButton.textContent = penaltyRoundComplete ? "Round complete" : "Round in progress";
  }
  if (penaltyNote && !penaltyStarted) {
    penaltyNote.textContent = paidAttempts ? "Press Start Game when you are ready. One round gives you 3 shots." : "Pay for entries, then one entry unlocks a full 3-shot round.";
  }
  if (activeGame === "penalty" && gameStatus) gameStatus.textContent = paidAttempts ? `${paidAttempts} round${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";

  if (penaltyStartScreen) {
    penaltyStartScreen.classList.toggle("is-open", activeGame === "penalty" && paidAttempts > 0 && !penaltyStarted && !penaltyRoundComplete);
  }
  if (penaltyEndScreen) {
    penaltyEndScreen.classList.toggle("is-open", activeGame === "penalty" && penaltyRoundComplete && penaltyShowEndScreen);
  }
  if (buyMoreTriesButton) buyMoreTriesButton.hidden = paidAttempts > 0;
  if (penaltyEndText) {
    penaltyEndText.innerHTML = paidAttempts
      ? `Your final round score is <strong data-penalty-final-score>${penaltyRoundScore || 0}</strong>/30. You still have ${paidAttempts} round${paidAttempts === 1 ? "" : "s"} left.`
      : `Your final round score is <strong data-penalty-final-score>${penaltyRoundScore || 0}</strong>/30. Buy more rounds to keep playing.`;
  }
  if (penaltyFinalScore) penaltyFinalScore.textContent = penaltyRoundScore;
  renderScoreboard();
}

function renderGearGame() {
  if (gearRoundsLeft) gearRoundsLeft.textContent = paidAttempts;
  if (gearShiftCount) gearShiftCount.textContent = `${gearShiftNumber} / 3`;
  if (gearScoreLabel) gearScoreLabel.textContent = gearCurrentScore === null ? "-" : gearCurrentScore;
  if (gearHighScoreLabel) gearHighScoreLabel.textContent = scoreToCompetitionPoints(gearHighScore, 3000);
  if (gearStarted && !gearLocked && gearTapButton) gearTapButton.textContent = `Shift Now (${gearTimeLeft}s)`;
  if ((!gearStarted || gearLocked) && gearTapButton) gearTapButton.textContent = "Shift Now";
  if (gearTapButton) gearTapButton.disabled = !gearStarted || gearLocked || !paidAttempts;
  if (gearNote && !gearStarted) {
    gearNote.textContent = paidAttempts ? "Press Start Game when you are ready. One round gives you 3 shifts." : "Pay for entries, then one entry unlocks a full 3-shift round.";
  }
  if (gearStartScreen) gearStartScreen.classList.toggle("is-open", activeGame === "gear" && paidAttempts > 0 && !gearStarted && !(gearShiftNumber === 3 && gearLocked));
  if (gearEndScreen) gearEndScreen.classList.toggle("is-open", activeGame === "gear" && gearShiftNumber === 3 && gearLocked && gearShowEndScreen);
  if (buyMoreGearButton) buyMoreGearButton.hidden = paidAttempts > 0;
  if (gearEndText) {
    gearEndText.innerHTML = paidAttempts
      ? `Your final round score is <strong data-gear-final-score>${gearRoundScore || 0}</strong>. You still have ${paidAttempts} round${paidAttempts === 1 ? "" : "s"} left.`
      : `Your final round score is <strong data-gear-final-score>${gearRoundScore || 0}</strong>. Buy more rounds to keep playing.`;
  }
  if (gearFinalScore) gearFinalScore.textContent = gearRoundScore;
  if (activeGame === "gear" && gameStatus) gameStatus.textContent = paidAttempts ? `${paidAttempts} round${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";
  renderScoreboard();
}

function renderDriftGame() {
  if (driftRoundsLeft) driftRoundsLeft.textContent = paidAttempts;
  if (driftScoreLabel) driftScoreLabel.textContent = driftScore === null ? "-" : driftScore;
  if (driftHighScoreLabel) driftHighScoreLabel.textContent = scoreToCompetitionPoints(driftHighScore, 1000);
  if (submitDriftButton) {
    submitDriftButton.disabled = true;
    submitDriftButton.textContent = driftStarted && driftReady
      ? driftRoundTimer ? `Timer ${driftCountdown}s` : "Touch to start 5s"
      : "5 second timer";
  }
  if (driftNote && !driftStarted) {
    driftNote.textContent = paidAttempts ? "Press Start Game to preview the racing line." : "Pay for entries, then one entry unlocks a drift round.";
  }
  if (driftStartScreen) driftStartScreen.classList.toggle("is-open", activeGame === "drift" && paidAttempts > 0 && !driftStarted && driftScore === null);
  if (driftEndScreen) driftEndScreen.classList.toggle("is-open", activeGame === "drift" && driftScore !== null);
  if (buyMoreDriftButton) buyMoreDriftButton.hidden = paidAttempts > 0;
  if (driftEndText) {
    driftEndText.innerHTML = paidAttempts
      ? `Your score is <strong data-drift-final-score>${driftScore || 0}</strong>. You still have ${paidAttempts} round${paidAttempts === 1 ? "" : "s"} left.`
      : `Your score is <strong data-drift-final-score>${driftScore || 0}</strong>. Buy more rounds to keep playing.`;
  }
  if (driftFinalScore) driftFinalScore.textContent = driftScore || 0;
  if (activeGame === "drift" && gameStatus) gameStatus.textContent = paidAttempts ? `${paidAttempts} round${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";
  renderScoreboard();
}

function renderScoreboard() {
  if (scoreboardPenalty) scoreboardPenalty.textContent = penaltyHighScore;
  if (scoreboardGear) scoreboardGear.textContent = scoreToCompetitionPoints(gearHighScore, 3000);
  if (scoreboardDrift) scoreboardDrift.textContent = scoreToCompetitionPoints(driftHighScore, 1000);
  if (scoreboardBoost) scoreboardBoost.textContent = scoreToCompetitionPoints(boostHighScore, 3000);
  if (accountScorePenalty) accountScorePenalty.textContent = penaltyHighScore;
  if (accountScoreGear) accountScoreGear.textContent = scoreToCompetitionPoints(gearHighScore, 3000);
  if (accountScoreDrift) accountScoreDrift.textContent = scoreToCompetitionPoints(driftHighScore, 1000);
  if (accountScoreBoost) accountScoreBoost.textContent = scoreToCompetitionPoints(boostHighScore, 3000);
  renderMainLeaderboard();
}

function renderGameMenuTokens() {
  const choices = document.querySelectorAll("[data-game-choice][data-game-href]");
  if (!choices.length) return;
  const activePrize = getCurrentPrizeContext();
  const tokens = getStoredPaidAttempts(activePrize);
  paidAttempts = tokens;
  choices.forEach((choice) => choice.classList.toggle("has-tokens", canPlayGameChoice(choice, tokens, activePrize)));
  if (gameStatus) {
    gameStatus.textContent = tokens
      ? `${tokens} token${tokens === 1 ? "" : "s"} ready for ${activePrize?.name || "your selected competition"}. Play unlocks only on matching games.`
      : "No tokens yet. Add a weekly or monthly giveaway entry first.";
  }
}

function canPlayGameChoice(choice, tokens = getStoredPaidAttempts(), activePrize = getCurrentPrizeContext()) {
  if (!tokens) return false;
  if (!activePrize?.game) return true;
  return choice?.dataset?.gameChoice === activePrize.game;
}

function renderCompetitionTokenActions() {
  const playButtons = document.querySelectorAll("[data-prize-play]");
  if (!playButtons.length) return;
  const bank = getTokenBank();
  const activePrize = getCurrentPrizeContext();
  document.body.classList.toggle("has-game-tokens", bank.weekly + bank.monthly + bank.sports > 0);
  playButtons.forEach((button) => {
    const prize = { name: button.dataset.prizePlay || "", price: Number(button.dataset.price || 5) };
    const matchesToken = getStoredPaidAttempts(prize) > 0;
    button.disabled = !matchesToken;
    button.classList.toggle("is-token-match", matchesToken);
    button.setAttribute("aria-hidden", matchesToken ? "false" : "true");
  });
}

function getLockedPredictionCount() {
  try { return Number(localStorage.getItem("lockshotLockedPredictions") || 0); } catch { return 0; }
}
function incrementLockedPredictions() {
  try { localStorage.setItem("lockshotLockedPredictions", String(getLockedPredictionCount() + 1)); } catch {}
  renderMyTicketsPill();
}
function renderMyTicketsPill() {
  const pill = document.querySelector("[data-sports-ticket-pill]");
  const pillCount = document.querySelector("[data-pill-ticket-count]");
  if (!pill) return;
  const count = getLockedPredictionCount();
  pill.hidden = count === 0;
  if (pillCount) pillCount.textContent = count;
}

function renderSportsEntryState() {
  const tokens = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" });
  const hasSportsEntry = tokens > 0;
  document.body.classList.toggle("has-sports-entry", hasSportsEntry);
  // Update token badge in the fixtures header
  const badge = document.querySelector("[data-sports-token-badge]");
  const countEl = document.querySelector("[data-sports-token-count]");
  if (badge) badge.classList.toggle("has-tokens", hasSportsEntry);
  if (countEl) countEl.textContent = tokens;
  // Sync multi-ticket tabs to entry count
  initSportsTickets(tokens || 1);
  renderTicketTabs();

}

function renderBoostGame() {
  const multiplierText = `${boostMultiplier.toFixed(2)}x`;
  const progress = Math.min(1, (boostMultiplier - 1) / Math.max(1, boostCrashAt - 1));
  const riskText = boostCrashed ? "Overload" : progress > 0.78 ? "Danger" : progress > 0.52 ? "Hot" : "Climbing";
  if (boostRoundsLeft) boostRoundsLeft.textContent = paidAttempts;
  if (boostMultiplierLabel) boostMultiplierLabel.textContent = multiplierText;
  if (boostPanelMultiplier) boostPanelMultiplier.textContent = multiplierText;
  if (boostRiskLabel) boostRiskLabel.textContent = riskText;
  if (boostScoreLabel) boostScoreLabel.textContent = boostScore === null ? "-" : boostScore;
  if (boostHighScoreLabel) boostHighScoreLabel.textContent = scoreToCompetitionPoints(boostHighScore, 3000);
  if (boostLockScoreButton) boostLockScoreButton.disabled = !boostRunning || boostCrashed || !paidAttempts;
  if (boostNote && !boostStarted) {
    boostNote.textContent = paidAttempts ? "Press Start Game, then tap anywhere to lock before overload." : "Pay for entries, then one entry unlocks a Boost Lock round.";
  }
  if (boostStartScreen) boostStartScreen.classList.toggle("is-open", activeGame === "boost" && paidAttempts > 0 && !boostStarted && boostScore === null);
  if (boostEndScreen) boostEndScreen.classList.toggle("is-open", activeGame === "boost" && !boostRunning && boostScore !== null);
  if (buyMoreBoostButton) buyMoreBoostButton.hidden = paidAttempts > 0;
  if (boostEndText) {
    boostEndText.innerHTML = paidAttempts
      ? `Your score is <strong data-boost-final-score>${boostScore || 0}</strong>. You still have ${paidAttempts} round${paidAttempts === 1 ? "" : "s"} left.`
      : `Your score is <strong data-boost-final-score>${boostScore || 0}</strong>. Buy more rounds to keep playing.`;
  }
  if (boostFinalScore) boostFinalScore.textContent = boostScore || 0;
  if (activeGame === "boost" && gameStatus) gameStatus.textContent = paidAttempts ? `${paidAttempts} round${paidAttempts === 1 ? "" : "s"} unlocked` : "No entries unlocked yet";
  if (boostBoard) boostBoard.classList.toggle("is-crashed", boostCrashed);
  if (boostBoard) {
    boostBoard.classList.toggle("is-warning", riskText === "Warning");
    boostBoard.classList.toggle("is-danger", riskText === "Danger");
  }
  renderScoreboard();
}

function scoreSpotLock(position) {
  const target = { x: 62, y: 38 };
  const distance = Math.hypot(position.x - target.x, position.y - target.y);
  return Math.max(0, Math.round(1000 - distance * 22));
}

function scorePenaltyLock(position) {
  const distance = Math.hypot(position.x - penaltyBallPosition.x, position.y - penaltyBallPosition.y);
  if (distance <= 6.5) return 10;
  if (distance <= 12) return 5;
  return 0;
}

function setPenaltySpeed() {
  const speed = [1.8, 2.45, 3.2][penaltyShotNumber - 1] || 1.8;
  const xDirection = penaltyVelocity.x < 0 ? -1 : 1;
  const yDirection = penaltyVelocity.y < 0 ? -1 : 1;
  penaltyVelocity.x = xDirection * speed;
  penaltyVelocity.y = yDirection * speed * 0.82;
}

function resetPenaltyRound() {
  window.clearTimeout(penaltyAdvanceTimer);
  penaltyScore = null;
  penaltyShotNumber = 1;
  penaltyRoundScore = 0;
  penaltyTapLocked = false;
  penaltyRoundComplete = false;
  penaltyShowEndScreen = false;
  if (penaltyBoard) penaltyBoard.classList.remove("has-tap");
  setPenaltySpeed();
}

function movePenaltyBall() {
  if (!penaltyBall) return;

  penaltyBallPosition.x += penaltyVelocity.x;
  penaltyBallPosition.y += penaltyVelocity.y;

  if (penaltyBallPosition.x < 13 || penaltyBallPosition.x > 87) {
    penaltyVelocity.x *= -1;
    penaltyVelocity.y += (Math.random() - 0.5) * 0.44;
  }

  if (penaltyBallPosition.y < 16 || penaltyBallPosition.y > 66) {
    penaltyVelocity.y *= -1;
    penaltyVelocity.x += (Math.random() - 0.5) * 0.44;
  }

  penaltyVelocity.x = Math.max(-3.8, Math.min(3.8, penaltyVelocity.x));
  penaltyVelocity.y = Math.max(-3.05, Math.min(3.05, penaltyVelocity.y));
  penaltyBallPosition.x = Math.max(13, Math.min(87, penaltyBallPosition.x));
  penaltyBallPosition.y = Math.max(16, Math.min(66, penaltyBallPosition.y));

  penaltyBall.style.setProperty("--ball-x", `${penaltyBallPosition.x}%`);
  penaltyBall.style.setProperty("--ball-y", `${penaltyBallPosition.y}%`);
}

function showTapPop(position, score) {
  if (!tapPop) return;

  tapPop.style.setProperty("--pop-x", `${position.x}%`);
  tapPop.style.setProperty("--pop-y", `${position.y}%`);
  tapPop.textContent = score > 0 ? `+${score}` : "Miss +0";
  tapPop.classList.toggle("is-miss", score === 0);
  tapPop.classList.remove("is-showing");
  void tapPop.offsetWidth;
  tapPop.classList.add("is-showing");
}

function showModePop(popEl, text, isMiss = false) {
  if (!popEl) return;
  popEl.style.setProperty("--pop-x", "50%");
  popEl.style.setProperty("--pop-y", "48%");
  popEl.textContent = text;
  popEl.classList.toggle("is-miss", isMiss);
  popEl.classList.remove("is-showing");
  void popEl.offsetWidth;
  popEl.classList.add("is-showing");
}

function advancePenaltyShot() {
  penaltyTapLocked = false;
  if (penaltyBoard) penaltyBoard.classList.remove("has-tap");

  if (penaltyRoundComplete) {
    penaltyStarted = false;
    stopPenaltyMovement();
    if (penaltyNote) {
      penaltyNote.textContent = paidAttempts ? "Round complete. Press Start Game to use another round." : "No rounds left. Add more entries to play again.";
    }
  } else {
    penaltyShotNumber = Math.min(3, penaltyShotNumber + 1);
    setPenaltySpeed();
    if (penaltyNote) penaltyNote.textContent = `Shot ${penaltyShotNumber} of 3. The ball is faster now. Shot 3 is the hardest.`;
  }

  renderPenaltyGame();
}

function startPenaltyMovement() {
  if (penaltyAnimation || !penaltyBall) return;

  const tick = () => {
    movePenaltyBall();
    penaltyAnimation = window.requestAnimationFrame(tick);
  };
  penaltyAnimation = window.requestAnimationFrame(tick);
}

function stopPenaltyMovement() {
  if (!penaltyAnimation) return;
  window.cancelAnimationFrame(penaltyAnimation);
  penaltyAnimation = null;
}

function resetGearRound() {
  gearValue = 0;
  gearDirection = 1;
  gearShiftNumber = 1;
  gearRoundScore = 0;
  gearCurrentScore = null;
  gearLocked = false;
  gearShowEndScreen = false;
  stopGearShiftTimer();
  setGearZone();
  renderGearGame();
}

function setGearZone() {
  gearZoneWidth = Math.max(5, 7 - gearShiftNumber * 0.75);
  gearZoneCenter = 50 + Math.random() * 38;
  const startValue = Math.max(4, gearZoneCenter - gearZoneWidth / 2);
  const endValue = Math.min(98, gearZoneCenter + gearZoneWidth / 2);
  const startAngle = startValue * 2.24;
  const endAngle = endValue * 2.24;
  if (gearDial) {
    gearDial.style.setProperty("--zone-start", `${startAngle}deg`);
    gearDial.style.setProperty("--zone-end", `${endAngle}deg`);
  }
}

function stopGearShiftTimer() {
  window.clearTimeout(gearShiftTimer);
  window.clearInterval(gearShiftCountdown);
  gearShiftTimer = null;
  gearShiftCountdown = null;
}

function startGearShiftTimer() {
  stopGearShiftTimer();
  gearTimeLeft = 10;
  renderGearGame();
  gearShiftCountdown = window.setInterval(() => {
    gearTimeLeft = Math.max(0, gearTimeLeft - 1);
    renderGearGame();
  }, 1000);
  gearShiftTimer = window.setTimeout(() => handleGearTap(true), 10000);
}

function moveGearNeedle() {
  if (!gearNeedle) return;
  const speed = [1.25, 1.8, 2.45][gearShiftNumber - 1] || 1.25;
  gearValue += speed * gearDirection;

  if (gearValue >= 100) {
    gearValue = 100;
    gearDirection = -1;
  }

  if (gearValue <= 0) {
    gearValue = 0;
    gearDirection = 1;
  }

  const angle = -112 + gearValue * 2.24;
  gearNeedle.style.setProperty("--needle-angle", `${angle}deg`);
  if (gearRpm) gearRpm.textContent = Math.round(gearValue * 90);
}

function startGearMovement() {
  if (gearAnimation || !gearNeedle) return;
  const tick = () => {
    moveGearNeedle();
    gearAnimation = window.requestAnimationFrame(tick);
  };
  gearAnimation = window.requestAnimationFrame(tick);
}

function stopGearMovement() {
  if (!gearAnimation) return;
  window.cancelAnimationFrame(gearAnimation);
  gearAnimation = null;
}

function handleGearTap(timedOut = false) {
  if (!gearStarted || gearLocked || !paidAttempts) return;

  stopGearShiftTimer();
  const distance = Math.abs(gearValue - gearZoneCenter);
  const perfectWindow = gearZoneWidth / 2;
  const shiftScore = timedOut || distance > perfectWindow ? 0 : Math.max(0, Math.round(1000 - distance * (860 / perfectWindow)));
  gearRoundScore += shiftScore;
  gearCurrentScore = gearRoundScore;
  gearLocked = true;
  showModePop(gearPop, timedOut ? "Time +0" : shiftScore ? `+${shiftScore}` : "Miss +0", shiftScore === 0);

  if (gearShiftNumber === 3) {
    storePaidAttempts(Math.max(0, paidAttempts - 1));
    gearHighScore = Math.max(gearHighScore, gearRoundScore);
    storeModeHighScore("Gear", gearHighScore);
    saveGameScoreToSupabase("Gear Shift Lock", gearRoundScore);
    gearStarted = false;
    gearShowEndScreen = false;
    stopGearMovement();
    if (gearNote) gearNote.textContent = timedOut ? `Time ran out. Round score: ${gearRoundScore}. Calculating result...` : `Shift score: ${shiftScore}. Round score: ${gearRoundScore}. Calculating result...`;
    renderGearGame();
    window.setTimeout(() => {
      gearShowEndScreen = true;
      if (gearNote) {
        gearNote.textContent = paidAttempts ? `Round score: ${gearRoundScore}. Press Continue to use another round.` : `Round score: ${gearRoundScore}. No rounds left.`;
      }
      renderGearGame();
    }, 2000);
    return;
  }

  if (gearNote) gearNote.textContent = timedOut ? `Shift ${gearShiftNumber} timed out. Next shift loading.` : `Shift ${gearShiftNumber} score: ${shiftScore}. Next shift loading.`;
  renderGearGame();
  window.setTimeout(() => {
    gearShiftNumber += 1;
    gearLocked = false;
    setGearZone();
    if (gearNote) gearNote.textContent = `Shift ${gearShiftNumber} of 3. Hit the new green zone before the timer ends.`;
    startGearShiftTimer();
    renderGearGame();
  }, 650);
}

function resetDriftRound() {
  driftPoints = [];
  driftScore = null;
  driftDrawing = false;
  driftReady = false;
  driftCountdown = 5;
  window.clearInterval(driftCountdownTimer);
  window.clearTimeout(driftRoundTimer);
  driftCountdownTimer = null;
  driftRoundTimer = null;
  let nextLineIndex = Math.floor(Math.random() * driftLineVariants.length);
  if (driftLineVariants.length > 1 && nextLineIndex === lastDriftLineIndex) {
    nextLineIndex = (nextLineIndex + 1) % driftLineVariants.length;
  }
  lastDriftLineIndex = nextLineIndex;
  currentDriftLine = driftLineVariants[nextLineIndex];
  if (idealLine && currentDriftLine) idealLine.setAttribute("d", currentDriftLine.path);
  if (playerLine) playerLine.setAttribute("d", "");
  if (driftBoard) driftBoard.classList.remove("show-ideal");
  renderDriftGame();
}

function finishDriftRound() {
  if (!driftStarted || !paidAttempts) return;

  window.clearInterval(driftCountdownTimer);
  window.clearTimeout(driftRoundTimer);
  driftCountdownTimer = null;
  driftRoundTimer = null;
  driftDrawing = false;
  driftReady = false;
  driftScore = scoreDriftLine();
  storePaidAttempts(Math.max(0, paidAttempts - 1));
  driftHighScore = Math.max(driftHighScore, driftScore);
  storeModeHighScore("Drift", driftHighScore);
  saveGameScoreToSupabase("Drift Line Lock", driftScore);
  showModePop(driftPop, driftScore ? `+${driftScore}` : "Miss +0", driftScore === 0);
  driftStarted = false;
  if (driftNote) driftNote.textContent = paidAttempts ? `Score: ${driftScore}. Press Start Game to use another round.` : `Score: ${driftScore}. No rounds left.`;
  renderSpotGame();
  renderPenaltyGame();
  renderGearGame();
  renderDriftGame();
  renderBoostGame();
}

function startDriftCountdown() {
  if (driftRoundTimer || !driftReady) return;

  driftCountdown = 5;
  if (driftNote) driftNote.textContent = "Keep tracing. Scoring in 5 seconds.";
  renderDriftGame();
  driftCountdownTimer = window.setInterval(() => {
    driftCountdown = Math.max(0, driftCountdown - 1);
    if (driftNote && driftCountdown > 0) driftNote.textContent = `Keep tracing. Scoring in ${driftCountdown} seconds.`;
    renderDriftGame();
  }, 1000);
  driftRoundTimer = window.setTimeout(finishDriftRound, 5000);
}

function pointFromEvent(event) {
  const rect = driftBoard.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100)),
    y: Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100))
  };
}

function drawDriftPath() {
  if (!playerLine || !driftPoints.length) return;
  const [first, ...rest] = driftPoints;
  const d = [`M${first.x.toFixed(1)} ${first.y.toFixed(1)}`, ...rest.map((point) => `L${point.x.toFixed(1)} ${point.y.toFixed(1)}`)].join(" ");
  playerLine.setAttribute("d", d);
}

function idealDriftY(x) {
  return (currentDriftLine || driftLineVariants[0]).fn(x);
}

function scoreDriftLine() {
  if (driftPoints.length < 8) return 0;
  const distance = driftPoints.reduce((sum, point) => sum + Math.abs(point.y - idealDriftY(point.x)), 0) / driftPoints.length;
  const coverage = Math.min(1, (Math.max(...driftPoints.map((p) => p.x)) - Math.min(...driftPoints.map((p) => p.x))) / 72);
  return Math.max(0, Math.round((1000 - distance * 22) * coverage));
}

function resetBoostRound() {
  boostMultiplier = 1;
  boostScore = null;
  boostCrashed = false;
  boostRunning = false;
  boostWarningLevel = 0;
  boostCrashAt = 1.85 + Math.pow(Math.random(), 1.7) * 7.7;
  if (boostLine) boostLine.style.setProperty("--boost-progress", "2%");
  if (boostJet) {
    boostJet.style.setProperty("--boost-progress", "2%");
  }
  renderBoostGame();
}

function stopBoostRun() {
  if (!boostAnimation) return;
  window.cancelAnimationFrame(boostAnimation);
  boostAnimation = null;
}

function updateBoostTrack() {
  const progress = Math.min(1, (boostMultiplier - 1) / Math.max(1, boostCrashAt - 1));
  if (boostLine) boostLine.style.setProperty("--boost-progress", `${Math.max(2, progress * 100)}%`);
  if (boostJet) {
    boostJet.style.setProperty("--boost-progress", `${Math.max(2, progress * 100)}%`);
  }
}

function startBoostRun() {
  if (boostAnimation || !paidAttempts) return;
  boostStarted = true;
  boostRunning = true;
  boostCrashed = false;
  boostScore = null;
  boostMultiplier = 1;
  boostWarningLevel = 0;
  boostStartedAt = performance.now();
  boostCrashAt = 1.85 + Math.pow(Math.random(), 1.7) * 7.7;
  if (boostNote) boostNote.textContent = "Launch live. Tap anywhere to lock before overload.";

  const tick = (now) => {
    const elapsed = (now - boostStartedAt) / 1000;
    boostMultiplier = 1 + elapsed * 0.22 + Math.pow(elapsed, 1.42) * 0.08;
    updateBoostTrack();

    const progress = Math.min(1, (boostMultiplier - 1) / Math.max(1, boostCrashAt - 1));
    if (progress > 0.78 && boostWarningLevel < 2) {
      boostWarningLevel = 2;
      if (boostNote) boostNote.textContent = "Danger zone. Lock now.";
    } else if (progress > 0.52 && boostWarningLevel < 1) {
      boostWarningLevel = 1;
      if (boostNote) boostNote.textContent = "Hot zone. The multiplier is climbing faster.";
    }

    if (boostMultiplier >= boostCrashAt) {
      boostMultiplier = boostCrashAt;
      boostRunning = false;
      boostCrashed = true;
      boostScore = 0;
      storePaidAttempts(Math.max(0, paidAttempts - 1));
      saveGameScoreToSupabase("Boost Lock", 0);
      if (paidAttempts) boostStarted = false;
      showModePop(boostPop, "Overload +0", true);
      if (boostNote) boostNote.textContent = paidAttempts ? "Overload. Press Continue to launch another round." : "Overload. No rounds left.";
      stopBoostRun();
      renderBoostGame();
      return;
    }

    renderBoostGame();
    boostAnimation = window.requestAnimationFrame(tick);
  };

  boostAnimation = window.requestAnimationFrame(tick);
  renderBoostGame();
}

function lockBoostScore() {
  if (!boostRunning || !paidAttempts) return;
  boostRunning = false;
  stopBoostRun();
  boostScore = Math.round(boostMultiplier * boostMultiplier * 210);
  storePaidAttempts(Math.max(0, paidAttempts - 1));
  if (paidAttempts) boostStarted = false;
  boostHighScore = Math.max(boostHighScore, boostScore);
  storeModeHighScore("Boost", boostHighScore);
  saveGameScoreToSupabase("Boost Lock", boostScore);
  showModePop(boostPop, `+${boostScore}`, false);
  if (boostNote) boostNote.textContent = paidAttempts ? `Locked at ${boostMultiplier.toFixed(2)}x. Press Continue to launch another round.` : `Locked at ${boostMultiplier.toFixed(2)}x. No rounds left.`;
  renderBoostGame();
}

function switchGame(game) {
  activeGame = ["gear", "drift", "boost"].includes(game) ? game : "penalty";

  document.querySelectorAll("[data-game-choice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.gameChoice === activeGame);
  });

  document.querySelectorAll("[data-game-area]").forEach((area) => {
    area.classList.toggle("is-active", area.dataset.gameArea === activeGame);
  });

  stopPenaltyMovement();
  stopGearMovement();
  stopBoostRun();

  if (activeGame === "penalty") {
    if (gameNote) gameNote.textContent = paidAttempts ? "Spot Lock is ready when you switch back." : "Pay for entries to unlock game attempts.";
    if (penaltyNote) penaltyNote.textContent = paidAttempts ? "Press Start Game when you are ready. One round gives you 3 shots." : "Pay for entries, then one entry unlocks a full 3-shot round.";
    setPenaltySpeed();
    if (penaltyStarted) startPenaltyMovement();
    renderPenaltyGame();
  } else if (activeGame === "gear") {
    if (gearNote) gearNote.textContent = paidAttempts ? "Press Start Game when you are ready. One round gives you 3 shifts." : "Pay for entries, then one entry unlocks a full 3-shift round.";
    if (gearStarted) startGearMovement();
    renderGearGame();
  } else if (activeGame === "drift") {
    if (driftNote) driftNote.textContent = paidAttempts ? "Press Start Game to preview the racing line." : "Pay for entries, then one entry unlocks a drift round.";
    renderDriftGame();
  } else if (activeGame === "boost") {
    if (boostNote) boostNote.textContent = paidAttempts ? "Press Start Game when you are ready. Lock the charge before overload." : "Pay for entries, then one entry unlocks a Boost Lock round.";
    renderBoostGame();
  }

  const activeArea = document.querySelector(`[data-game-area="${activeGame}"]`);
  if (activeArea) {
    activeArea.scrollIntoView({ behavior: "auto", block: "start" });
  }
}

function renderCountdown(fields, endsAt) {
  const remaining = Math.max(0, endsAt - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const pad = (value) => String(value).padStart(2, "0");

  if (fields.days) fields.days.textContent = pad(days);
  if (fields.hours) fields.hours.textContent = pad(hours);
  if (fields.minutes) fields.minutes.textContent = pad(minutes);
  if (fields.seconds) fields.seconds.textContent = pad(seconds);
}

function getCashpoolRoundState(now = new Date()) {
  const startHour = 12;
  const endHour = 24;
  const roundHours = 2;
  const currentHour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const base = new Date(now);
  base.setHours(startHour, 0, 0, 0);

  if (currentHour < startHour) {
    const opensAt = new Date(now);
    opensAt.setHours(startHour, 0, 0, 0);
    return { active: false, label: "Opens", round: 0, game: cashpoolGameRotation[0], endsAt: opensAt.getTime(), remaining: 0 };
  }

  if (currentHour >= endHour) {
    const opensAt = new Date(now);
    opensAt.setDate(opensAt.getDate() + 1);
    opensAt.setHours(startHour, 0, 0, 0);
    return { active: false, label: "Closed", round: 0, game: cashpoolGameRotation[0], endsAt: opensAt.getTime(), remaining: 0 };
  }

  const elapsedRounds = Math.floor((now.getHours() - startHour) / roundHours);
  const endRoundHour = startHour + (elapsedRounds + 1) * roundHours;
  const roundEnd = new Date(now);
  roundEnd.setHours(endRoundHour, 0, 0, 0);
  return {
    active: true,
    label: "Round ends",
    round: elapsedRounds + 1,
    game: cashpoolGameRotation[elapsedRounds % cashpoolGameRotation.length],
    endsAt: roundEnd.getTime(),
    remaining: Math.max(0, roundEnd.getTime() - now.getTime())
  };
}

function getCashpoolRoundEnd() {
  return getCashpoolRoundState().active ? getCashpoolRoundState().endsAt : Date.now();
}

function updateCountdown() {
  renderCountdown(weeklyCountdownFields, weeklyEndsAt);
  renderCountdown(monthlyCountdownFields, monthlyEndsAt);
  const cashpoolState = getCashpoolRoundState();
  if (cashpoolState.active) {
    renderCountdown(cashpoolCountdownFields, cashpoolState.endsAt);
  } else {
    renderCountdown(cashpoolCountdownFields, Date.now());
  }
  document.querySelectorAll("[data-cashpool-current-game]").forEach((item) => {
    item.textContent = cashpoolState.active ? cashpoolState.game : "Opens at 12pm";
  });
  document.querySelectorAll("[data-cashpool-round-label]").forEach((item) => {
    item.textContent = cashpoolState.active ? `Round ${cashpoolState.round}` : cashpoolState.label;
  });
  renderCashpoolLeaderboard(cashpoolState);
  renderMainLeaderboard();
}

function renderCashpoolLeaderboard(cashpoolState = getCashpoolRoundState()) {
  const names = document.querySelectorAll("[data-cashpool-leader-name]");
  const scores = document.querySelectorAll("[data-cashpool-leader-score]");
  const note = document.querySelector("[data-cashpool-leaderboard-note]");
  if (!names.length) return;

  const rows = cashpoolState.active
    ? [
        { name: "You", score: Math.max(penaltyHighScore, gearHighScore, driftHighScore, boostHighScore, playerHighScore) || 0 },
        { name: "Aisha K.", score: 1280 + cashpoolState.round * 17 },
        { name: "Thabo M.", score: 1190 + cashpoolState.round * 13 }
      ].sort((a, b) => b.score - a.score)
    : [
        { name: "Round opens at 12pm", score: 0 },
        { name: "Leaderboard closed", score: 0 },
        { name: "Next reset every 2 hours", score: 0 }
      ];

  rows.forEach((row, index) => {
    if (names[index]) names[index].textContent = row.name;
    if (scores[index]) scores[index].textContent = row.score;
  });
  if (note) {
    note.textContent = cashpoolState.active
      ? `${cashpoolState.game} is active now. This board resets at the end of the 2-hour round.`
      : "The R500 Cashpool opens from 12pm to 12am and resets every 2 hours.";
  }
}

function scoreToCompetitionPoints(score, maxScore = 3000) {
  if (!score) return 0;
  return Math.max(1, Math.min(30, Math.round((score / maxScore) * 30)));
}

function arcadeHighPoints(mode, maxScore = 1500) {
  const score = getModeHighScore(mode);
  return score > 30 ? scoreToCompetitionPoints(score, maxScore) : Math.min(30, score);
}

function getCompetitionScoreBank() {
  try {
    return JSON.parse(window.localStorage.getItem("lockshotCompetitionScoreBank") || "{}");
  } catch {
    return {};
  }
}

function storeCompetitionScoreBank(bank) {
  try {
    window.localStorage.setItem("lockshotCompetitionScoreBank", JSON.stringify(bank));
  } catch {
    // Score separation is best-effort in local previews.
  }
}

function recordCompetitionPoints(gameKey, points, type = getPrizeStandingsType()) {
  if (!gameKey || !points) return;
  const bank = getCompetitionScoreBank();
  bank[type] = bank[type] || {};
  bank[type][gameKey] = Math.max(Number(bank[type][gameKey] || 0), Math.min(30, points));
  storeCompetitionScoreBank(bank);
}

function getCompetitionPointTotal(type = activeStandingsType) {
  const points = getCompetitionScoreBank()[type] || {};
  return Object.values(points).reduce((total, value) => total + Number(value || 0), 0);
}

function getPlayerCompetitionPoints() {
  return {
    "Penalty Lock": Math.min(30, penaltyHighScore),
    "Gear Shift Lock": scoreToCompetitionPoints(gearHighScore, 3000),
    "Drift Line Lock": scoreToCompetitionPoints(driftHighScore, 1000),
    "Boost Lock": scoreToCompetitionPoints(boostHighScore, 3000),
    "Timer Lock": scoreToCompetitionPoints(getStoredScore("lockshotHighReaction"), 1000),
    "Circle Lock": scoreToCompetitionPoints(getStoredScore("lockshotHighCircle"), 1500),
    "Slice Lock": scoreToCompetitionPoints(getStoredScore("lockshotHighSlice"), 1600),
    "Traffic Dodge": arcadeHighPoints("car"),
    "Box Ball": arcadeHighPoints("boxball"),
    "Jump Runner": arcadeHighPoints("dino"),
    "Lane Surfer": arcadeHighPoints("subway"),
    "Color Rush": arcadeHighPoints("color"),
    "8 Colour Tower": arcadeHighPoints("memory", 1600)
  };
}

function renderGameChoicePoints() {
  const playerPoints = getPlayerCompetitionPoints();
  const keyByChoice = {
    penalty: "Penalty Lock",
    gear: "Gear Shift Lock",
    drift: "Drift Line Lock",
    boost: "Boost Lock",
    reaction: "Timer Lock",
    circle: "Circle Lock",
    slice: "Slice Lock",
    car: "Traffic Dodge",
    boxball: "Box Ball",
    dino: "Jump Runner",
    subway: "Lane Surfer",
    color: "Color Rush",
    memory: "8 Colour Tower"
  };

  document.querySelectorAll("[data-game-choice]").forEach((button) => {
    const pointsEl = button.querySelector("[data-game-points]");
    if (!pointsEl) return;
    const key = keyByChoice[button.dataset.gameChoice];
    const points = key ? playerPoints[key] || 0 : 0;
    pointsEl.textContent = `${points} pts`;
    pointsEl.classList.toggle("has-points", points > 0);
  });
}

function getMainCompetitionLeaderboard(type = activeStandingsType) {
  const userScore = getCompetitionPointTotal(type);
  const sampleRows = type === "monthly"
    ? [
        { name: "Monthly leader waiting", score: 0 },
        { name: "Next monthly player", score: 0 },
        { name: "Third monthly place", score: 0 }
      ]
    : [
        { name: "Weekly leader waiting", score: 0 },
        { name: "Next weekly player", score: 0 },
        { name: "Third weekly place", score: 0 }
      ];
  const rows = [{ name: currentUser?.name ? "You" : "Your score", score: userScore, player: true }, ...sampleRows].sort((a, b) => b.score - a.score);
  return rows;
}

function renderMainLeaderboard() {
  const names = document.querySelectorAll("[data-main-leader-name]");
  const scores = document.querySelectorAll("[data-main-leader-score]");
  const position = document.querySelector("[data-player-leaderboard-position]");
  const title = document.querySelector("[data-standings-title]");
  const kicker = document.querySelector("[data-standings-kicker]");
  renderGameChoicePoints();
  if (!names.length && !position && !title) return;

  const type = activeStandingsType;
  if (title) title.textContent = type === "monthly" ? "Monthly standings" : "Weekly standings";
  if (kicker) kicker.textContent = type === "monthly" ? "Monthly giveaway leaderboard" : "Weekly giveaway leaderboard";
  document.querySelectorAll("[data-standings-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.standingsTab === type);
  });
  // Apply colour skin
  document.querySelectorAll(".main-leaderboard").forEach((board) => {
    board.classList.toggle("mode-monthly", type === "monthly");
  });

  const rows = getMainCompetitionLeaderboard(type);
  rows.slice(0, 3).forEach((row, index) => {
    if (names[index]) names[index].textContent = row.score ? row.name : [type === "monthly" ? "Waiting for monthly scores" : "Waiting for weekly scores", "Next player", "Next player"][index];
    if (scores[index]) scores[index].textContent = `${row.score} pts`;
  });

  const playerIndex = rows.findIndex((row) => row.player);
  const playerScore = rows[playerIndex]?.score || 0;
  if (position) {
    position.textContent = playerScore
      ? `You are #${playerIndex + 1} on the ${type} board with ${playerScore} points from your games.`
      : `Your ${type} position appears here after you submit a score. Each game can add up to 30 points.`;
  }
}

function initStandingsSwitch() {
  const buttons = document.querySelectorAll("[data-standings-tab]");
  if (!buttons.length) return;
  activeStandingsType = getPrizeStandingsType();

  // Auto-cycle only on pages that opt in with data-standings-auto-cycle
  const shouldAutoCycle = !!document.querySelector("[data-standings-auto-cycle]");
  const CYCLE = ["weekly", "monthly"];
  let cycleTimer = null;

  function switchTo(type) {
    activeStandingsType = type;
    renderMainLeaderboard();
  }

  function startCycle() {
    if (!shouldAutoCycle) return;
    clearInterval(cycleTimer);
    let idx = CYCLE.indexOf(activeStandingsType);
    if (idx < 0) idx = 0;
    cycleTimer = setInterval(() => {
      idx = (idx + 1) % CYCLE.length;
      switchTo(CYCLE[idx]);
    }, 5000);
  }

  buttons.forEach((button) => {
    if (button.dataset.standingsReady === "true") return;
    button.dataset.standingsReady = "true";
    button.addEventListener("click", () => {
      switchTo(button.dataset.standingsTab || "weekly");
      startCycle(); // reset the 5 s clock from the tab the user picked
    });
  });

  renderMainLeaderboard();
  startCycle();
}

function initMatchIqChallenge() {
  const form = document.querySelector("[data-match-iq-form]");
  if (!form) return;
  if (form.dataset.matchIqReady === "true") return;
  form.dataset.matchIqReady = "true";

  const matchField = form.querySelector("[data-match-iq-match]");
  const resultField = form.querySelector("[data-match-iq-result]");
  const reasonField = form.querySelector("[data-match-iq-reason]");
  const status = form.querySelector("[data-match-iq-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const reason = reasonField?.value.trim() || "";

    if (reason.length < 24) {
      if (status) status.textContent = "Add more match analysis before calculating your skill score.";
      return;
    }

    const matchScore = (matchField?.selectedIndex || 0) * 17;
    const resultScore = (resultField?.selectedIndex || 0) * 23;
    const analysisScore = Math.min(360, reason.length * 6);
    const skillScore = 520 + matchScore + resultScore + analysisScore;

    if (status) {
      status.textContent = `Submitted. Skill score: ${skillScore}. Prediction accuracy is verified after the match review.`;
    }
  });
}

// ── Wallet (global — runs on all pages) ──────────────────────
let _walletBalance = null;

async function loadWalletBalance() {
  const client = getSupabaseClient();
  if (!client || !currentUser?.id) return null;
  try {
    const { data } = await client.from("wallets").select("balance").eq("user_id", currentUser.id).maybeSingle();
    _walletBalance = parseFloat(data?.balance ?? 0);
  } catch { _walletBalance = 0; }
  updateWalletUI();
  return _walletBalance;
}

function updateWalletUI() {
  const bal = _walletBalance ?? 0;
  const fmt = `R${bal.toFixed(2)}`;
  document.querySelectorAll("[data-wallet-balance-display]").forEach(el => el.textContent = fmt);
  document.querySelectorAll("[data-wallet-main-balance]").forEach(el => el.textContent = bal.toFixed(2));
  document.querySelectorAll("[data-wallet-chip]").forEach(chip => { chip.hidden = !currentUser; });
}

async function renderWalletPage() {
  await loadWalletBalance();
  const client = getSupabaseClient();
  const listEl = document.querySelector("[data-wallet-tx-list]");
  if (!listEl || !client || !currentUser?.id) return;
  listEl.innerHTML = `<p class="wallet-tx-empty">Loading…</p>`;
  try {
    const { data } = await client.from("wallet_transactions")
      .select("type, amount, description, created_at")
      .eq("user_id", currentUser.id)
      .order("created_at", { ascending: false })
      .limit(50);
    if (!data?.length) {
      listEl.innerHTML = `<p class="wallet-tx-empty">No transactions yet.</p>`;
      return;
    }
    listEl.innerHTML = data.map(tx => {
      const isCredit = ["topup","win","refund"].includes(tx.type);
      const sign = isCredit ? "+" : "-";
      const date = new Date(tx.created_at).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" });
      return `<div class="wallet-tx-row">
        <div class="wallet-tx-info">
          <span class="wallet-tx-desc">${tx.description || tx.type}</span>
          <span class="wallet-tx-date">${date}</span>
        </div>
        <span class="wallet-tx-amount ${isCredit ? "credit" : "debit"}">${sign}R${parseFloat(tx.amount).toFixed(2)}</span>
      </div>`;
    }).join("");
  } catch { listEl.innerHTML = `<p class="wallet-tx-empty">Could not load transactions.</p>`; }
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function initTopupButtons() {
  // Show banner based on Ozow redirect result
  const params = new URLSearchParams(window.location.search);
  const topupState = params.get("topup");
  const banner = document.getElementById("topup-banner");
  if (banner && topupState) {
    if (topupState === "success") {
      banner.style.cssText = "display:block;background:#0e3d1a;color:#4ade80;border:1px solid #166534;margin-bottom:1rem;padding:.85rem 1.1rem;border-radius:.75rem;font-weight:600;font-size:.95rem;text-align:center;";
      banner.textContent = "Payment successful! Your wallet will update shortly.";
    } else if (topupState === "cancelled") {
      banner.style.cssText = "display:block;background:#2d1a0e;color:#f97316;border:1px solid #7c2d12;margin-bottom:1rem;padding:.85rem 1.1rem;border-radius:.75rem;font-weight:600;font-size:.95rem;text-align:center;";
      banner.textContent = "Payment was cancelled. No funds were added.";
    } else if (topupState === "error") {
      banner.style.cssText = "display:block;background:#2d0e0e;color:#f87171;border:1px solid #7f1d1d;margin-bottom:1rem;padding:.85rem 1.1rem;border-radius:.75rem;font-weight:600;font-size:.95rem;text-align:center;";
      banner.textContent = "Payment failed. Please try again or contact support.";
    }
    window.history.replaceState({}, "", window.location.pathname);
  }

  document.querySelectorAll("[data-topup-amount]").forEach(btn => {
    if (btn._topupBound) return;
    btn._topupBound = true;
    btn.addEventListener("click", async () => {
      const amount = parseFloat(btn.dataset.topupAmount);
      if (!amount || !currentUser?.id) { alert("Please log in to add funds."); return; }

      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Redirecting…";

      try {
        const res = await fetch("/api/ozow-init", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, userId: currentUser.id }),
        });
        const data = await res.json();
        if (!data.payUrl || !data.fields) throw new Error(data.error || "Init failed");

        const form = document.createElement("form");
        form.method = "POST";
        form.action = data.payUrl;
        Object.entries(data.fields).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
      } catch {
        btn.disabled = false;
        btn.textContent = orig;
        alert("Could not start payment. Please try again.");
      }
    });
  });
}

function initSportsIqExperience() {
  const app = document.querySelector("[data-sports-iq-app]");
  if (!app || app.dataset.ready === "true") return;
  app.dataset.ready = "true";

  // Render the My Tickets pill on load
  renderMyTicketsPill();

  // Floating My Tickets pill → open tickets drawer
  const ticketPill = document.querySelector("[data-sports-ticket-pill]");
  const ticketsDrawer = document.getElementById("my-tickets-drawer");
  const ticketsDrawerClose = document.getElementById("my-tickets-drawer-close");
  const ticketsDrawerList = document.getElementById("my-tickets-drawer-list");

  function openMyTicketsDrawer() {
    if (!ticketsDrawer) return;
    const saved = (() => { try { return JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]"); } catch { return []; } })();
    if (!saved.length) {
      if (ticketsDrawerList) ticketsDrawerList.innerHTML = `<p style="color:rgba(255,255,255,0.45);text-align:center;padding:32px 0">No tickets yet — lock a prediction to see it here.</p>`;
    } else {
      if (ticketsDrawerList) ticketsDrawerList.innerHTML = saved.map(t => `
        <div class="myt-card">
          <div class="myt-card-head">
            <div>
              <strong class="myt-match">${t.match}</strong>
              <span class="myt-league">${t.league || ""}</span>
            </div>
            <span class="myt-status">🔒 Locked</span>
          </div>
          <div class="myt-rows">
            ${(t.rows || []).map(r => `
              <div class="myt-row">
                <span class="myt-label">${r.label}</span>
                <span class="myt-value">${r.value}</span>
                <span class="myt-pts">${r.pts}</span>
              </div>
            `).join("")}
          </div>
          <div class="myt-foot">Max 30 pts · Verified after full time</div>
        </div>
      `).join("");
    }
    ticketsDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMyTicketsDrawer() {
    if (!ticketsDrawer) return;
    ticketsDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (ticketPill) ticketPill.addEventListener("click", openMyTicketsDrawer);
  if (ticketsDrawerClose) ticketsDrawerClose.addEventListener("click", closeMyTicketsDrawer);
  if (ticketsDrawer) ticketsDrawer.addEventListener("click", (e) => { if (e.target === ticketsDrawer) closeMyTicketsDrawer(); });

  // ── Results page: fetch actual match data and compare to predictions ─────────

  async function findFixtureIdByMatchName(matchName) {
    const api = window.LOCKSHOT_SPORTS_API;
    if (!api?.key || !api?.baseUrl) return null;
    const h = { "x-apisports-key": api.key };
    const cacheKey = `lockshotFixtureId_${matchName.replace(/\s/g, "_")}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;
    try {
      const parts = matchName.split(" vs ");
      const homePart = parts[0]?.trim().split(" ")[0];
      const awayPart = parts[1]?.trim().split(" ")[0];
      if (!homePart || !awayPart) return null;
      for (const teamId of [85, 42, 50, 33, 40, 47, 49, 34, 36, 35]) {
        const r = await fetch(`${api.baseUrl}/fixtures?team=${teamId}&season=2025&last=20`, { headers: h }).then(x => x.json());
        const f = r.response?.find(fix =>
          (fix.teams.home.name.toLowerCase().includes(homePart.toLowerCase()) || fix.teams.away.name.toLowerCase().includes(homePart.toLowerCase())) &&
          (fix.teams.home.name.toLowerCase().includes(awayPart.toLowerCase()) || fix.teams.away.name.toLowerCase().includes(awayPart.toLowerCase()))
        );
        if (f) {
          const fid = String(f.fixture.id);
          localStorage.setItem(cacheKey, fid);
          return fid;
        }
      }
    } catch {}
    return null;
  }

  async function fetchMatchActuals(fixtureId) {
    if (!fixtureId) return null;
    const cacheKey = `lockshotActuals_${fixtureId}`;
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (cached && cached.fetched) {
        const maxAge = cached.isFinished ? 86400000 : 7200000; // 24h if FT, 2h if still live
        if (Date.now() - cached.fetched < maxAge) return cached;
      }
    } catch {}

    const api = window.LOCKSHOT_SPORTS_API;
    if (!api?.key || !api?.baseUrl) return null;
    const h = { "x-apisports-key": api.key };

    try {
      const [fixRes, statsRes, eventsRes] = await Promise.all([
        fetch(`${api.baseUrl}/fixtures?id=${fixtureId}`, { headers: h }).then(r => r.json()),
        fetch(`${api.baseUrl}/fixtures/statistics?fixture=${fixtureId}`, { headers: h }).then(r => r.json()).catch(() => null),
        fetch(`${api.baseUrl}/fixtures/events?fixture=${fixtureId}`, { headers: h }).then(r => r.json()).catch(() => null)
      ]);

      const fix = fixRes?.response?.[0];
      if (!fix) return null;

      const statusShort = fix.fixture?.status?.short || "";
      const isFinished  = ["FT", "AET", "PEN"].includes(statusShort);
      const homeGoals   = fix.goals?.home ?? null;
      const awayGoals   = fix.goals?.away ?? null;

      // Parse statistics
      let homePoss = null, awayPoss = null, totalCorners = null, totalCards = null;
      const statsArr = statsRes?.response || [];
      if (statsArr.length >= 2) {
        const getStat = (arr, type) => (arr.find(s => s.type === type) || {}).value;
        const hStats = statsArr[0]?.statistics || [];
        const aStats = statsArr[1]?.statistics || [];
        homePoss = parseInt(getStat(hStats, "Ball Possession")) || null;
        awayPoss = parseInt(getStat(aStats, "Ball Possession")) || null;
        const hCorn = parseInt(getStat(hStats, "Corner Kicks") || "0");
        const aCorn = parseInt(getStat(aStats, "Corner Kicks") || "0");
        totalCorners = (isNaN(hCorn) ? 0 : hCorn) + (isNaN(aCorn) ? 0 : aCorn);
        const hYel = parseInt(getStat(hStats, "Yellow Cards") || "0");
        const aYel = parseInt(getStat(aStats, "Yellow Cards") || "0");
        const hRed = parseInt(getStat(hStats, "Red Cards") || "0");
        const aRed = parseInt(getStat(aStats, "Red Cards") || "0");
        totalCards = (isNaN(hYel)?0:hYel) + (isNaN(aYel)?0:aYel) + (isNaN(hRed)?0:hRed) + (isNaN(aRed)?0:aRed);
      }

      // Parse events — first real goal (not missed penalty)
      let firstScorerName = null, firstGoalMinute = null;
      const events = eventsRes?.response || [];
      const firstGoalEvent = events.find(e => e.type === "Goal" && e.detail !== "Missed Penalty");
      if (firstGoalEvent) {
        firstScorerName  = firstGoalEvent.player?.name || null;
        firstGoalMinute  = firstGoalEvent.time?.elapsed || null;
      }

      const actuals = { homeGoals, awayGoals, homePoss, awayPoss, totalCorners, totalCards,
        firstScorerName, firstGoalMinute, status: statusShort, isFinished, fetched: Date.now() };
      try { localStorage.setItem(cacheKey, JSON.stringify(actuals)); } catch {}
      return actuals;
    } catch { return null; }
  }

  function compareTicketRows(rows, actuals) {
    if (!rows?.length) return [];
    return rows.map(r => {
      const label  = (r.label || "").toLowerCase();
      const val    = (r.value || "—").trim();
      const maxPts = parseInt(r.pts) || 0;

      // Not finished yet or no actuals
      if (!actuals || actuals.homeGoals === null) return { ...r, status: "pending", actualVal: "—" };

      // Scoreline
      if (label.includes("score") && !label.includes("first")) {
        if (actuals.homeGoals === null) return { ...r, status: "pending", actualVal: "—" };
        const actualStr = `${actuals.homeGoals} - ${actuals.awayGoals}`;
        const userNorm  = val.replace(/\s*[-:]\s*/g, " - ");
        const correct   = userNorm === actualStr;
        return { ...r, status: correct ? "correct" : "wrong", actualVal: actualStr, earnedPts: correct ? maxPts : 0 };
      }

      // Possession / Territory
      if (label.includes("possess") || label.includes("territory")) {
        if (actuals.homePoss === null) return { ...r, status: "pending", actualVal: "—" };
        const actualStr  = `${actuals.homePoss}% - ${actuals.awayPoss}%`;
        const userHomePct = parseInt(val.split(/[-–]/)[0]) || 0;
        const correct     = (userHomePct >= 50) === (actuals.homePoss >= 50);
        return { ...r, status: correct ? "correct" : "wrong", actualVal: actualStr, earnedPts: correct ? maxPts : 0 };
      }

      // Corners / Lineouts
      if (label.includes("corner") || label.includes("lineout")) {
        if (actuals.totalCorners === null) return { ...r, status: "pending", actualVal: "—" };
        const correct = parseInt(val) === actuals.totalCorners;
        return { ...r, status: correct ? "correct" : "wrong", actualVal: String(actuals.totalCorners), earnedPts: correct ? maxPts : 0 };
      }

      // Cards
      if (label.includes("card")) {
        if (actuals.totalCards === null) return { ...r, status: "pending", actualVal: "—" };
        const correct = parseInt(val) === actuals.totalCards;
        return { ...r, status: correct ? "correct" : "wrong", actualVal: String(actuals.totalCards), earnedPts: correct ? maxPts : 0 };
      }

      // First scorer
      if (label.includes("scorer") || label.includes("try scorer")) {
        if (!actuals.firstScorerName) return { ...r, status: "pending", actualVal: "—" };
        const norm = s => s.toLowerCase().replace(/[^a-z]/g, "");
        const uN = norm(val), aN = norm(actuals.firstScorerName);
        const correct = uN.length > 1 && aN.length > 1 && (aN.includes(uN) || uN.includes(aN));
        return { ...r, status: correct ? "correct" : "wrong", actualVal: actuals.firstScorerName, earnedPts: correct ? maxPts : 0 };
      }

      // Minute of first goal
      if (label.includes("minute") || label.includes("first goal")) {
        if (actuals.firstGoalMinute === null) return { ...r, status: "pending", actualVal: "—" };
        const diff = Math.abs((parseInt(val) || 0) - actuals.firstGoalMinute);
        const correct = diff <= 5;
        return { ...r, status: correct ? "correct" : "wrong", actualVal: `${actuals.firstGoalMinute}'`, earnedPts: correct ? maxPts : 0 };
      }

      // MOTM / Player — manual verification only
      return { ...r, status: "pending", actualVal: "Admin" };
    });
  }

  async function renderResultsPage() {
    const container = document.querySelector("[data-results-list]");
    if (!container) return;

    const tickets = (() => { try { return JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]"); } catch { return []; } })();

    if (!tickets.length) {
      container.innerHTML = `<p class="sports-results-empty"><i data-lucide="shield-check"></i> No predictions yet — lock a ticket on the Predict tab to see your results here.</p>`;
      if (typeof lucide !== "undefined") lucide.createIcons();
      return;
    }

    container.innerHTML = `<p class="rpage-loading">Checking results…</p>`;

    const pairs = await Promise.all(tickets.map(async t => {
      if (t.sport && t.sport !== "soccer") return { ticket: t, actuals: null };
      // Auto-lookup fixture ID by match name if missing
      if (!t.fixtureId && t.match) {
        const found = await findFixtureIdByMatchName(t.match);
        if (found) {
          t.fixtureId = found;
          // Save back to localStorage so future loads are instant
          try {
            const all = JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]");
            all.forEach(x => { if (x.id === t.id) x.fixtureId = found; });
            localStorage.setItem("lockshotMyTickets", JSON.stringify(all));
          } catch {}
        }
      }
      const actuals = t.fixtureId ? await fetchMatchActuals(t.fixtureId) : null;
      return { ticket: t, actuals };
    }));

    container.innerHTML = pairs.map(({ ticket, actuals }) => {
      const compared   = compareTicketRows(ticket.rows || [], actuals);
      const earned     = compared.reduce((s, r) => s + (r.earnedPts || 0), 0);
      const possible   = compared.reduce((s, r) => s + (parseInt(r.pts) || 0), 0);
      const hasPending = compared.some(r => r.status === "pending");
      const isFinished = actuals?.isFinished;

      const badgeCls = isFinished && !hasPending ? "rcard-badge--done"
                     : isFinished ? "rcard-badge--partial"
                     : "rcard-badge--pending";
      const badgeText = isFinished && !hasPending ? `${earned} / ${possible} pts`
                      : isFinished ? `${earned} pts · some pending`
                      : actuals ? "In progress"
                      : "Awaiting result";

      const lockedDate = new Date(ticket.lockedAt).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" });

      const rowsHtml = compared.map(r => {
        const icon = r.status === "correct" ? "✓" : r.status === "wrong" ? "✗" : "⏳";
        const cls  = r.status === "correct" ? "rrow--correct" : r.status === "wrong" ? "rrow--wrong" : "rrow--pending";
        const ptsText = r.status === "correct" ? `+${parseInt(r.pts)}` : r.status === "wrong" ? "0 pts" : r.pts;
        return `<div class="rcard-row ${cls}">
          <span class="rrow-icon">${icon}</span>
          <div class="rrow-body">
            <span class="rrow-label">${r.label}</span>
            <div class="rrow-comparison">
              <span class="rrow-your">You: <strong>${r.value}</strong></span>
              ${r.actualVal !== undefined ? `<span class="rrow-actual">Actual: <strong>${r.actualVal}</strong></span>` : ""}
            </div>
          </div>
          <span class="rrow-pts ${r.status === "correct" ? "rrow-pts--won" : ""}">${ptsText}</span>
        </div>`;
      }).join("");

      return `<div class="rcard">
        <div class="rcard-head">
          <div class="rcard-title-block">
            <strong class="rcard-match">${ticket.match || "Match"}</strong>
            ${ticket.league ? `<span class="rcard-league">${ticket.league}</span>` : ""}
          </div>
          <span class="rcard-badge ${badgeCls}">${badgeText}</span>
        </div>
        <span class="rcard-date">${lockedDate}</span>
        <div class="rcard-rows">${rowsHtml}</div>
        ${isFinished && !hasPending ? `<div class="rcard-foot">Total: <strong>${earned} / ${possible} pts</strong></div>` : ""}
      </div>`;
    }).join("");

    if (typeof lucide !== "undefined") lucide.createIcons();

    // Feed actual earned points back into the board standings
    updateBoardFromResults(pairs);
  }

  // Push verified prediction points into the per-match leaderboard entries
  function updateBoardFromResults(pairs) {
    const uid  = currentUser?.id || currentUser?.email;
    const name = currentUser?.full_name || currentUser?.user_metadata?.full_name || currentUser?.email || "You";
    if (!uid) return;

    let totalEarned = 0;
    let finishedCount = 0;

    (pairs || []).forEach(({ ticket, actuals }) => {
      const compared  = compareTicketRows(ticket.rows || [], actuals);
      const earned    = compared.reduce((s, r) => s + (r.earnedPts || 0), 0);
      const isFinished = actuals?.isFinished;
      if (!isFinished) return;

      totalEarned += earned;
      finishedCount++;

      // Update that match's per-fixture board entry
      const [home = "", away = ""] = (ticket.match || "").split(" vs ").map(s => s.trim());
      if (!home) return;
      const boardKey = `lockshotSportsBoard:${home.toLowerCase().replace(/\s+/g, "-")}-vs-${away.toLowerCase().replace(/\s+/g, "-")}`;
      let entries = (() => { try { return JSON.parse(localStorage.getItem(boardKey) || "[]"); } catch { return []; } })();
      const idx = entries.findIndex(e => e.uid === uid);
      const entry = { uid, name, pts: earned, pending: false };
      if (idx >= 0) entries[idx] = entry; else entries.push(entry);
      entries.sort((a, b) => b.pts - a.pts);
      try { localStorage.setItem(boardKey, JSON.stringify(entries.slice(0, 30))); } catch {}
    });

    // Persist totals so the board tab can show them without re-fetching API
    try {
      localStorage.setItem("lockshotPredictionTotals", JSON.stringify({ uid, name, totalEarned, finishedCount, updated: Date.now() }));
    } catch {}

    renderSportsLeaderboard();
    renderPredictionScoreSummary(totalEarned, finishedCount);
  }

  // Recompute board from locally cached actuals (no API calls needed — uses what was already fetched)
  function refreshBoardFromCache() {
    const uid  = currentUser?.id || currentUser?.email;
    if (!uid) return;
    const tickets = (() => { try { return JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]"); } catch { return []; } })();
    if (!tickets.length) return;
    const pairs = tickets.map(t => {
      const actuals = t.fixtureId
        ? (() => { try { return JSON.parse(localStorage.getItem(`lockshotActuals_${t.fixtureId}`) || "null"); } catch { return null; } })()
        : null;
      return { ticket: t, actuals };
    });
    updateBoardFromResults(pairs);
  }

  async function refreshBoardFromSupabase() {
    const client = getSupabaseClient();
    if (!client) return;
    try {
      const { data, error } = await client
        .from("sports_predictions")
        .select("user_id, pts_awarded, profiles(full_name)")
        .eq("status", "graded");
      if (error || !data?.length) return;
      const byUser = {};
      data.forEach(p => {
        const uid = p.user_id;
        if (!byUser[uid]) byUser[uid] = { uid, name: p.profiles?.full_name || "Player", pts: 0 };
        byUser[uid].pts += (p.pts_awarded || 0);
      });
      let entries = loadBoardEntries();
      Object.values(byUser).forEach(su => {
        const idx = entries.findIndex(e => e.uid === su.uid);
        if (idx >= 0) { entries[idx].pts = Math.max(entries[idx].pts, su.pts); entries[idx].pending = false; }
        else entries.push({ uid: su.uid, name: su.name, pts: su.pts, pending: false });
      });
      entries.sort((a, b) => b.pts - a.pts);
      saveBoardEntries(entries);
      renderSportsLeaderboard();
    } catch {}
  }

  function renderPredictionScoreSummary(totalEarned, finishedCount) {
    const el = document.querySelector("[data-pred-score-summary]");
    if (!el) return;
    if (!currentUser || finishedCount === 0) { el.hidden = true; return; }
    el.hidden = false;
    const ptsEl  = el.querySelector("[data-pss-pts]");
    const metaEl = el.querySelector("[data-pss-meta]");
    if (ptsEl)  ptsEl.textContent  = totalEarned;
    if (metaEl) metaEl.textContent = `pts from ${finishedCount} verified prediction${finishedCount === 1 ? "" : "s"}`;
  }

  const picks = document.querySelectorAll("[data-sports-pick]");
  const lockButton = document.querySelector("[data-lock-pick]");
  const lockLabel = document.querySelector("[data-lock-label]");
  const slider = document.querySelector("[data-confidence-slider]");
  const output = document.querySelector("[data-confidence-output]");
  const riskLabel = document.querySelector("[data-risk-label]");
  const lockedState = document.querySelector("[data-locked-state]");
  const tournamentSummary = document.querySelector("[data-tournament-lock-summary]");
  const tournamentEnter = document.querySelector("[data-enter-sports-tournament]");
  const scorelinePrediction = document.querySelector("[data-scoreline-prediction]");
  const countdown = document.querySelector("[data-sports-countdown]");
  let selectedPick = document.querySelector(".pick-card.is-selected")?.dataset.sportsPick || "selected team";
  let selectedTournamentSport = document.querySelector("[data-tournament-sport].is-active")?.dataset.tournamentSport || "soccer";
  let kickoffSeconds = 4934;

  // Map bottom-nav hrefs → page ids
  const SPORTS_PAGE_MAP = {
    "#live-fixtures":    "live",
    "#prediction-arena": "predict",
    "#sports-standings": "board",
    "#sports-results":   "results",
    "#sports-wallet":    "wallet"
  };

  function switchSportsPage(pageId) {
    document.querySelectorAll("[data-sports-page]").forEach((page) => {
      page.classList.toggle("page-active", page.dataset.sportsPage === pageId);
    });
    document.querySelectorAll("[data-sports-nav]").forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", (SPORTS_PAGE_MAP[href] || "live") === pageId);
    });
    window.scrollTo({ top: 0, behavior: "instant" });
    if (pageId === "results") renderResultsPage();
    if (pageId === "board") {
      // Restore cached totals immediately (no API hit), then refresh board rows
      const stored = (() => { try { return JSON.parse(localStorage.getItem("lockshotPredictionTotals") || "null"); } catch { return null; } })();
      if (stored) renderPredictionScoreSummary(stored.totalEarned, stored.finishedCount);
      refreshBoardFromCache();
      refreshBoardFromSupabase(); // pull graded pts from Supabase for global leaderboard
    }
    if (pageId === "wallet") renderWalletPage();
  }

  // Wallet chip → go to wallet page (sports-iq only)
  document.querySelector("[data-wallet-chip]")?.addEventListener("click", () => switchSportsPage("wallet"));

  document.querySelectorAll("[data-sports-nav]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const pageId = SPORTS_PAGE_MAP[href];
      if (!pageId) return; // external link (e.g. account.html) — navigate normally

      event.preventDefault();

      // Predict tab requires a paid entry — bounce to Live if not paid yet
      if (pageId === "predict") {
        const hasPaid = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" }) > 0;
        if (!hasPaid) { switchSportsPage("live"); return; }
      }

      switchSportsPage(pageId);
      history.replaceState(null, "", href);
    });
  });

  const tournamentTemplates = {
    soccer: {
      name: "Soccer",
      score: ["Scoreline", "2 - 1", "Exact score: 10 pts"],
      control: ["Possession", "54% - 46%", "Closest split: 5 pts"],
      setPiece: ["Corners", "9", "Exact total: 3 pts"],
      discipline: ["Cards", "4", "Exact total: 3 pts"],
      firstScorer: ["First scorer", "Player name", "Correct player: 4 pts"],
      firstTime: ["Minute of first goal", "23", "Within 5 min: 2 pts"],
      player: ["Man of the Match", "Player name", "Correct player: 3 pts"]
    },
    rugby: {
      name: "Rugby",
      score: ["Scoreline", "28 - 19", "Exact score: 10 pts"],
      control: ["Territory", "58% - 42%", "Closest split: 5 pts"],
      setPiece: ["Lineouts won", "12", "Exact total: 3 pts"],
      discipline: ["Cards", "1", "Exact total: 3 pts"],
      firstScorer: ["First try scorer", "Player name", "Correct player: 4 pts"],
      firstTime: ["Minute of first try", "18", "Within 5 min: 2 pts"],
      player: ["Man of the Match", "Player name", "Correct player: 3 pts"]
    },
    cricket: {
      name: "Cricket",
      score: ["Winning margin", "18 runs", "Closest margin: 10 pts"],
      control: ["Powerplay score", "48/1", "Closest score: 5 pts"],
      setPiece: ["Total sixes", "11", "Exact total: 3 pts"],
      discipline: ["Wickets lost", "7", "Exact total: 3 pts"],
      firstScorer: ["Top run scorer", "Player name", "Correct player: 4 pts"],
      firstTime: ["First wicket over", "4", "Within 2 overs: 2 pts"],
      player: ["Player of the Match", "Player name", "Correct player: 3 pts"]
    },
    "formula-one": {
      name: "Formula One",
      pickerDefault: "Pick a driver",
      score: ["Podium order", "VER, NOR, HAM", "Exact order: 10 pts"],
      control: ["Fastest lap driver", "Driver name", "Correct driver: 5 pts"],
      setPiece: ["Safety cars", "1", "Exact total: 3 pts"],
      discipline: ["DNFs", "3", "Exact total: 3 pts"],
      firstScorer: ["Race winner", "Driver name", "Correct driver: 4 pts"],
      firstTime: ["Lap of first pit stop", "14", "Within 3 laps: 2 pts"],
      player: ["Driver of the Day", "Driver name", "Correct driver: 3 pts"]
    },
    netball: {
      name: "Netball",
      score: ["Scoreline", "54 - 49", "Exact score: 10 pts"],
      control: ["Centre pass converts", "78%", "Closest percent: 5 pts"],
      setPiece: ["Intercepts", "8", "Exact total: 3 pts"],
      discipline: ["Penalties", "34", "Closest total: 3 pts"],
      firstScorer: ["First goal scorer", "Player name", "Correct player: 4 pts"],
      firstTime: ["Minute of first goal", "1", "Within 2 min: 2 pts"],
      player: ["Player of the Match", "Player name", "Correct player: 3 pts"]
    }
  };

  // Sports that use a numeric home–away scoreline (show steppers)
  const SCORELINE_STEPPER_SPORTS = new Set(["soccer", "rugby", "netball"]);

  function updateTournamentFields() {
    const template = tournamentTemplates[selectedTournamentSport] || tournamentTemplates.soccer;
    const isF1      = selectedTournamentSport === "formula-one";
    const useSteppers = SCORELINE_STEPPER_SPORTS.has(selectedTournamentSport);
    const steppersEl     = document.querySelector("[data-scoreline-steppers]");
    const textInputEl    = document.querySelector("[data-scoreline-text]");
    const podiumPickersEl = document.getElementById("f1-podium-pickers");

    // Show the right score-input style for the sport
    if (steppersEl)      steppersEl.hidden      = !useSteppers;
    if (textInputEl)     textInputEl.hidden      = useSteppers || isF1;   // F1 uses podium pickers
    if (podiumPickersEl) podiumPickersEl.hidden  = !isF1;

    // Reset hidden combined value when switching away from stepper sports
    if (!useSteppers) {
      const hidden = document.querySelector("[data-scoreline-prediction]");
      if (hidden) hidden.value = "";
    }

    document.querySelectorAll("[data-tournament-field]").forEach((field) => {
      const config = template[field.dataset.tournamentField];
      if (!config) return;
      const label = field.querySelector("[data-field-label]");
      const input = field.querySelector("[data-field-input]");
      const points = field.querySelector("[data-field-points]");
      if (label) label.textContent = config[0];
      if (input) input.placeholder = config[1];
      if (points) points.textContent = config[2];
    });

    // Swap "Pick a player" ↔ "Pick a driver" on player-picker labels
    const pickerDefault = template.pickerDefault || "Pick a player";
    document.querySelectorAll("[data-picker-default]").forEach(el => {
      const cur = el.textContent.trim();
      if (cur === "Pick a player" || cur === "Pick a driver") {
        el.textContent = pickerDefault;
      }
    });
  }

  // ── Possession slider ─────────────────────────────────────────────────────
  document.addEventListener("input", (event) => {
    const slider = event.target.closest("[data-possession-slider]");
    if (!slider) return;
    const homeVal = parseInt(slider.value, 10);
    const awayVal = 100 - homeVal;
    const homeFill   = document.querySelector("[data-possession-home-fill]");
    const awayFill   = document.querySelector("[data-possession-away-fill]");
    const homePct    = document.querySelector("[data-possession-home-pct]");
    const awayPct    = document.querySelector("[data-possession-away-pct]");
    const hiddenPoss = document.querySelector("[data-possession-value]");
    if (homeFill)   homeFill.style.width   = `${homeVal}%`;
    if (awayFill)   awayFill.style.width   = `${awayVal}%`;
    if (homePct)    homePct.textContent    = `${homeVal}%`;
    if (awayPct)    awayPct.textContent    = `${awayVal}%`;
    if (hiddenPoss) hiddenPoss.value       = `${homeVal}% - ${awayVal}%`;
  });

  // ── Player picker open/close ─────────────────────────────────────────────
  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-picker-open]");
    if (!opener) return;
    const target = opener.dataset.pickerOpen;
    const wrap   = document.getElementById("player-picker-panel");
    const panel  = document.querySelector("[data-player-picker]");
    if (!wrap || !panel) return;
    const alreadyOpen = !wrap.hidden && panel.dataset.pickerTarget === target;
    if (alreadyOpen) {
      wrap.hidden = true;
    } else {
      panel.dataset.pickerTarget = target;
      wrap.hidden = false;
      wrap.scrollIntoView({ behavior: "smooth", block: "nearest" });
      // Re-wire player buttons to the newly targeted input
      panel.querySelectorAll("[data-pick-player]").forEach(btn => {
        btn.onclick = null;
        btn.addEventListener("click", () => {
          const name = btn.dataset.pickPlayer;
          const input = document.querySelector(`[data-player-input="${target}"]`);
          const label = document.querySelector(`[data-player-label="${target}"]`);
          if (input) input.value = name;
          if (label) label.textContent = name;
          panel.querySelectorAll("[data-pick-player]").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          wrap.hidden = true;
        });
      });
    }
  });

  // ── Scoreline stepper click handler ──────────────────────────────────────
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-score-adjust]");
    if (!btn) return;
    const side  = btn.dataset.scoreAdjust; // "home" | "away"
    const delta = parseInt(btn.dataset.delta, 10) || 0;
    const display = document.querySelector(side === "home" ? "[data-home-score]" : "[data-away-score]");
    if (!display) return;
    const next = Math.max(0, (parseInt(display.textContent, 10) || 0) + delta);
    display.textContent = next;
    // Sync combined hidden input
    const home = parseInt(document.querySelector("[data-home-score]")?.textContent || "0", 10);
    const away = parseInt(document.querySelector("[data-away-score]")?.textContent || "0", 10);
    const hidden = document.querySelector("[data-scoreline-prediction]");
    if (hidden) hidden.value = `${home} - ${away}`;
  });

  function updateLockLabel() {
    if (lockLabel) lockLabel.textContent = "Submit Predictions";
  }

  function updateConfidence() {
    const value = Number(slider?.value || 74);
    if (output) output.textContent = value;
    if (riskLabel) {
      riskLabel.textContent = value >= 82 ? "High conviction" : value >= 62 ? "Aggressive" : value >= 38 ? "Measured" : "Low risk";
    }
  }

  picks.forEach((pick) => {
    pick.addEventListener("click", () => {
      selectedPick = pick.dataset.sportsPick || selectedPick;
      picks.forEach((item) => item.classList.toggle("is-selected", item === pick));
      if (lockedState) lockedState.classList.remove("is-active");
      updateLockLabel();
    });
  });

  document.addEventListener("click", (event) => {
    const sportsEntryButton = event.target.closest("[data-sports-entry-add]");
    if (sportsEntryButton) {
      if (!requireAccount("Create an account or log in before adding a sports prediction entry.")) return;

      // Store which fixture this entry is for so it auto-selects after checkout
      const fixtureCard = sportsEntryButton.closest("[data-live-fixture]");
      if (fixtureCard) {
        storePendingFixture({
          home: fixtureCard.dataset.home || "",
          away: fixtureCard.dataset.away || "",
          league: fixtureCard.dataset.league || "",
          status: fixtureCard.dataset.status || "Upcoming"
        });
      }

      // If already has a paid sports entry, skip payment — go straight to predictions
      const alreadyPaid = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" }) > 0;
      if (alreadyPaid) {
        // Make sure the prediction arena is visible
        renderSportsEntryState();
        if (fixtureCard) setSportsPredictionMatch(fixtureCard);
        // Sync sport tab
        const matchSport = activeSportsFilter || "soccer";
        selectedTournamentSport = matchSport;
        document.querySelectorAll("[data-tournament-sport]").forEach((btn) => {
          btn.classList.toggle("is-active", btn.dataset.tournamentSport === matchSport);
        });
        updateTournamentFields();
        if (lockedState) lockedState.classList.remove("is-active");
        switchSportsPage("predict");
        return;
      }

      // Not yet paid — open payment slip
      selectedPrize = {
        name: sportsEntryButton.dataset.sportsEntryAdd,
        price: Number(sportsEntryButton.dataset.price || 5),
        basePrice: Number(sportsEntryButton.dataset.price || 5),
        qty: 1,
        game: "sports"
      };
      renderSlip();
      renderCount();
      openSlip();
      return;
    }

    const fixture = event.target.closest("[data-live-fixture]");
    if (!fixture) return;
    const alreadySelected = document.querySelector("[data-live-fixture].is-selected");
    if (alreadySelected && alreadySelected !== fixture) return;
    setSportsPredictionMatch(fixture);
    if (lockedState) lockedState.classList.remove("is-active");

    // Sync tournament sport tab to the active fixture filter
    const sportMap = { soccer: "soccer", rugby: "rugby", cricket: "cricket", "formula-one": "formula-one", netball: "netball" };
    const matchSport = sportMap[activeSportsFilter] || "soccer";
    if (matchSport !== selectedTournamentSport) {
      selectedTournamentSport = matchSport;
      document.querySelectorAll("[data-tournament-sport]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.tournamentSport === matchSport);
      });
      updateTournamentFields();
    }

    updateLockLabel();
    // Ensure arena is visible; if already paid switch straight to predict tab
    renderSportsEntryState();
    const hasPaid = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" }) > 0;
    if (hasPaid) switchSportsPage("predict");
  });

  if (slider) slider.addEventListener("input", updateConfidence);

  if (tournamentEnter) {
    tournamentEnter.addEventListener("click", () => {
      document.querySelector(".tournament-prediction-grid")?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Focus first stepper up-button if visible, otherwise fall back to hidden input
      const firstStepBtn = document.querySelector("[data-score-adjust='home'][data-delta='1']:not([hidden])");
      if (firstStepBtn && !firstStepBtn.closest("[hidden]")) {
        firstStepBtn.focus();
      } else {
        document.querySelector("[data-scoreline-text]:not([hidden])")?.focus();
      }
    });
  }

  document.querySelectorAll("[data-tournament-sport]").forEach((button) => {
    button.addEventListener("click", () => {
      const sport = button.dataset.tournamentSport || selectedTournamentSport;
      selectedTournamentSport = sport;
      document.querySelectorAll("[data-tournament-sport]").forEach((item) => item.classList.toggle("is-active", item === button));
      updateTournamentFields();
      if (lockedState) lockedState.classList.remove("is-active");

      // Two-way sync: also switch the fixture list to the same sport
      if (sport !== activeSportsFilter) {
        activeSportsFilter = sport;
        document.querySelectorAll("[data-sport-filter]").forEach((btn) =>
          btn.classList.toggle("is-active", btn.dataset.sportFilter === sport)
        );
        loadSportsApiFixtures();
      }
    });
  });

  // Slow-scroll hint so users know more sport tabs are off-screen
  // Slow-scroll hint for any overflowing tab row
  function startTabRowDrift(row) {
    if (!row) return;
    let paused = false;
    let stopped = false;
    let pos = 0; // float accumulator — scrollLeft only accepts integers
    let resumeTimer = null;

    function drift() {
      if (stopped) return;
      if (!paused && row.offsetParent !== null) {
        const maxScroll = row.scrollWidth - row.clientWidth;
        if (maxScroll > 0) {
          pos += 0.18; // slow drift
          if (pos >= maxScroll) pos = 0;
          row.scrollLeft = Math.round(pos);
        }
      }
      requestAnimationFrame(drift);
    }

    row.addEventListener("mouseenter", () => { paused = true; }, { passive: true });
    row.addEventListener("mouseleave", () => { paused = false; }, { passive: true });

    // On touch: pause immediately; after finger lifts wait 1.5 s then
    // resume from wherever the user scrolled to (no jump).
    row.addEventListener("touchstart", () => {
      paused = true;
      clearTimeout(resumeTimer);
    }, { passive: true });

    row.addEventListener("touchend", () => {
      resumeTimer = setTimeout(() => {
        pos = row.scrollLeft; // sync so drift continues from current position
        paused = false;
      }, 1500);
    }, { passive: true });

    row.addEventListener("click", () => { stopped = true; }, { once: true });
    requestAnimationFrame(drift);
  }

  // Drift both the Live-page sport filter row and the Predict-page sport picker
  startTabRowDrift(document.querySelector(".sports-tabs"));
  startTabRowDrift(document.querySelector(".sport-choice-row"));

  document.querySelectorAll("[data-sport-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSportsFilter = button.dataset.sportFilter || "soccer";
      document.querySelectorAll("[data-sport-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      loadSportsApiFixtures();
      // Sync prediction arena sport tabs to match fixture filter
      selectedTournamentSport = activeSportsFilter;
      document.querySelectorAll("[data-tournament-sport]").forEach((btn) =>
        btn.classList.toggle("is-active", btn.dataset.tournamentSport === activeSportsFilter)
      );
      updateTournamentFields();
      if (lockedState) lockedState.classList.remove("is-active");
    });
  });

  if (lockButton) {
    lockButton.addEventListener("click", () => {
      const hasSportsEntry = getStoredPaidAttempts({ name: "Sports Predict", game: "sports" }) > 0;
      if (!hasSportsEntry) {
        if (tournamentSummary) tournamentSummary.textContent = "Add a live sports prediction entry before locking predictions.";
        if (lockedState) lockedState.classList.add("is-active");
        return;
      }

      // Save current field values into the active ticket and mark it locked
      saveTicketState();
      _sportsTickets[_activeTicketIdx].locked = true;

      // Deduct one sports entry token now that this ticket is locked
      const sportsCtx = { name: "Sports Predict", game: "sports" };
      const remaining = getStoredPaidAttempts(sportsCtx);
      storePaidAttempts(Math.max(0, remaining - 1), sportsCtx);
      renderSportsEntryState();

      // Add this locked ticket to the My Tickets pill
      incrementLockedPredictions();

      const ticketNum   = _activeTicketIdx + 1;
      const totalTickets = _sportsTickets.length;
      const useSteppers = SCORELINE_STEPPER_SPORTS.has(selectedTournamentSport);
      const scorelineVal = useSteppers
        ? scorelinePrediction?.value.trim()
        : document.querySelector("[data-scoreline-text]")?.value.trim();
      const sportName = tournamentTemplates[selectedTournamentSport]?.name || "Sports";
      const scoreFieldLabel = document.querySelector("[data-tournament-field='score'] [data-field-label]")?.textContent?.toLowerCase() || "score";

      const ticketSuffix = totalTickets > 1 ? ` (Ticket ${ticketNum} of ${totalTickets})` : "";
      if (lockLabel) lockLabel.textContent = "Predictions locked ✓";
      if (lockButton) lockButton.disabled = true;
      if (tournamentSummary) {
        tournamentSummary.textContent = `${sportName} ticket ${ticketNum} locked${scorelineVal ? ` · ${scoreFieldLabel}: ${scorelineVal}` : ""}. Max 30 pts, verified after official results.`;
      }
      if (lockedState) { lockedState.classList.add("is-active"); lockedState.hidden = false; }
      if (navigator.vibrate) navigator.vibrate(80);

      // Populate and reveal the prediction ticket stub
      const ticket = document.getElementById("pred-ticket");
      if (ticket) {
        const template = tournamentTemplates[selectedTournamentSport] || tournamentTemplates.soccer;
        const selFixture = document.querySelector("[data-live-fixture].is-selected");
        const tMatch = ticket.querySelector("[data-ticket-match]");
        const tMeta  = ticket.querySelector("[data-ticket-meta]");
        const tRows  = ticket.querySelector("[data-ticket-rows]");
        if (tMatch) tMatch.textContent = (selFixture ? `${selFixture.dataset.home} vs ${selFixture.dataset.away}` : "—") + ticketSuffix;
        if (tMeta)  tMeta.textContent  = selFixture?.dataset.league || "";
        const useSteppers2 = SCORELINE_STEPPER_SPORTS.has(selectedTournamentSport);
        const scoreVal       = useSteppers2 ? scorelinePrediction?.value.trim() : document.querySelector("[data-scoreline-text]")?.value.trim();
        const possVal        = document.querySelector("[data-possession-value]")?.value;
        const setPieceVal    = document.querySelector("[data-tournament-field='setPiece'] [data-field-input]")?.value;
        const disciplineVal  = document.querySelector("[data-tournament-field='discipline'] [data-field-input]")?.value;
        const firstScorerVal = document.querySelector("[data-player-input='firstScorer']")?.value;
        const firstTimeVal   = document.querySelector("[data-tournament-field='firstTime'] [data-field-input]")?.value;
        const motmVal        = document.querySelector("[data-player-input='motm']")?.value;
        const rows = [
          { label: template.score[0],       value: scoreVal       || "—", pts: "10 pts" },
          { label: template.control[0],     value: possVal        || "—", pts: "5 pts"  },
          { label: template.setPiece[0],    value: setPieceVal    || "—", pts: "3 pts"  },
          { label: template.discipline[0],  value: disciplineVal  || "—", pts: "3 pts"  },
          { label: template.firstScorer[0], value: firstScorerVal || "—", pts: "4 pts"  },
          { label: template.firstTime[0],   value: firstTimeVal ? `${firstTimeVal}'` : "—", pts: "2 pts" },
          { label: template.player[0],      value: motmVal        || "—", pts: "3 pts"  },
        ];
        if (tRows) tRows.innerHTML = rows.map(r =>
          `<div class="pred-ticket-row">
            <span class="pred-ticket-label">${r.label}</span>
            <span class="pred-ticket-value">${r.value}</span>
            <span class="pred-ticket-pts">${r.pts}</span>
          </div>`
        ).join("");
        ticket.hidden = false;
        if (typeof lucide !== "undefined") lucide.createIcons();
        window.setTimeout(() => ticket.scrollIntoView({ behavior: "smooth", block: "center" }), 160);

        // Save full ticket to My Tickets history
        (() => {
          const selFixture2 = document.querySelector("[data-live-fixture].is-selected");
          const savedTicket = {
            id: Date.now(),
            match: selFixture2 ? `${selFixture2.dataset.home || ""} vs ${selFixture2.dataset.away || ""}` : "Match",
            league: selFixture2?.dataset.league || "",
            lockedAt: new Date().toISOString(),
            fixtureId: selFixture2?.dataset.fixtureId || null,
            sport: selectedTournamentSport || "soccer",
            rows
          };
          try {
            const existing = JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]");
            existing.unshift(savedTicket); // newest first
            localStorage.setItem("lockshotMyTickets", JSON.stringify(existing.slice(0, 50)));
          } catch {}
        })();
      }

      // Record entry in leaderboard (0 pts pending verification)
      const uid  = currentUser?.id || currentUser?.email;
      const name = currentUser?.full_name || currentUser?.user_metadata?.full_name || currentUser?.email || "You";
      if (uid) {
        renderSportsLeaderboard({ uid, name, pts: 0, pending: true });
      }

      // Save prediction to Supabase so admin can see it
      (async () => {
        const client = getSupabaseClient();
        if (!client) { console.warn("[Lockshot] No Supabase client — prediction not saved"); return; }
        if (!currentUser?.id) { console.warn("[Lockshot] No logged-in user — prediction not saved"); return; }
        const selFixture = document.querySelector("[data-live-fixture].is-selected");
        const matchName  = selFixture
          ? `${selFixture.dataset.home || ""} vs ${selFixture.dataset.away || ""}`
          : "Unknown match";
        const useSteppers3 = typeof SCORELINE_STEPPER_SPORTS !== "undefined" && SCORELINE_STEPPER_SPORTS.has(selectedTournamentSport);
        const predScore    = useSteppers3
          ? document.querySelector("[data-scoreline-prediction]")?.value || ""
          : document.querySelector("[data-scoreline-text]")?.value || "";
        const predPoss     = document.querySelector("[data-possession-value]")?.value || "";
        const predFirst    = document.querySelector("[data-player-input='firstScorer']")?.value || "";
        const predCorners  = rows.find(r => r.label === "Corners")?.value || null;
        const predCards    = rows.find(r => r.label === "Cards")?.value || null;
        const predMinute   = rows.find(r => r.label === "Minute of first goal")?.value || null;
        const predMotm     = rows.find(r => r.label === "Man of the Match")?.value || null;
        const { error: predErr } = await client.from("sports_predictions").insert({
          user_id:     currentUser.id,
          match:       matchName,
          sport:       selectedTournamentSport || "soccer",
          ticket_num:  ticketNum,
          score_pred:  predScore,
          possession:  predPoss,
          first_scorer: predFirst,
          corners_pred: predCorners,
          cards_pred:   predCards,
          minute_pred:  predMinute,
          motm_pred:    predMotm,
          status:      "pending"
        });
        if (predErr) console.error("[Lockshot] Prediction save failed:", predErr.message, predErr.details, predErr.hint);
        else console.log("[Lockshot] Prediction saved to Supabase ✓");
      })();

      // Auto-advance to next unlocked ticket, or show all-done message
      renderTicketTabs();
      const nextIdx = _sportsTickets.findIndex((t, i) => i > _activeTicketIdx && !t.locked);
      if (nextIdx !== -1) {
        window.setTimeout(() => {
          _activeTicketIdx = nextIdx;
          loadTicketState();
          renderTicketTabs();
          const switcher = document.getElementById("pred-ticket-switcher");
          if (switcher) switcher.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 900);
      } else {
        // All tickets locked
        window.setTimeout(() => {
          if (lockedState) lockedState.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 80);
      }
    });
  }

  function tickCountdown() {
    if (!countdown) return;
    const statusLabel = document.querySelector("[data-featured-status-label]");
    if (["Scoreline", "Status", "Upcoming"].includes(statusLabel?.textContent || "") || countdown.textContent === "--") return;

    const kickoffTarget = parseInt(countdown.dataset.kickoffTarget, 10);
    if (kickoffTarget > 0) {
      // Compute accurate diff from real kickoff timestamp every tick
      const diff = Math.max(0, Math.floor((kickoffTarget - Date.now()) / 1000));
      if (diff === 0) { countdown.textContent = "LIVE"; return; }
      const days  = Math.floor(diff / 86400);
      const hh = String(Math.floor((diff % 86400) / 3600)).padStart(2, "0");
      const mm = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const ss = String(diff % 60).padStart(2, "0");
      countdown.textContent = days > 0 ? `${days}d ${hh}:${mm}:${ss}` : `${hh}:${mm}:${ss}`;
    } else {
      // Fallback: demo fixtures without a timestamp — just decrement
      kickoffSeconds = Math.max(0, kickoffSeconds - 1);
      const hh = String(Math.floor(kickoffSeconds / 3600)).padStart(2, "0");
      const mm = String(Math.floor((kickoffSeconds % 3600) / 60)).padStart(2, "0");
      const ss = String(kickoffSeconds % 60).padStart(2, "0");
      countdown.textContent = `${hh}:${mm}:${ss}`;
    }
  }

  // ── Per-game leaderboard ──────────────────────────────────
  const BOARD_PRIZES = ["R250", "R100", "R50"];
  const BOARD_PRIZES_LABEL = [
    "[data-board-pts-1]",
    "[data-board-pts-2]",
    "[data-board-pts-3]"
  ];

  function getBoardKey() {
    const fixture = document.querySelector("[data-live-fixture].is-selected");
    const home = fixture?.dataset.home || "match";
    const away = fixture?.dataset.away || "";
    return `lockshotSportsBoard:${home.toLowerCase().replace(/\s+/g, "-")}-vs-${away.toLowerCase().replace(/\s+/g, "-")}`;
  }

  function loadBoardEntries() {
    try { return JSON.parse(localStorage.getItem(getBoardKey()) || "[]"); } catch { return []; }
  }

  function saveBoardEntries(entries) {
    try { localStorage.setItem(getBoardKey(), JSON.stringify(entries.slice(0, 30))); } catch {}
  }

  function renderSportsLeaderboard(newEntry = null) {
    let entries = loadBoardEntries();

    if (newEntry) {
      const idx = entries.findIndex(e => e.uid === newEntry.uid);
      if (idx >= 0) entries[idx] = { ...entries[idx], ...newEntry };
      else entries.push(newEntry);
      entries.sort((a, b) => b.pts - a.pts);
      saveBoardEntries(entries);
    }

    // Update fixture kicker — show most recent predicted match, not the live tab selection
    const kicker = document.querySelector("[data-board-fixture-kicker]");
    if (kicker) {
      try {
        const tickets = JSON.parse(localStorage.getItem("lockshotMyTickets") || "[]");
        const lastMatch = tickets[0]?.match;
        kicker.textContent = lastMatch ? `${lastMatch} · standings` : "Prediction standings";
      } catch {
        kicker.textContent = "Prediction standings";
      }
    }

    // Podium top 3
    ["1","2","3"].forEach((n, i) => {
      const e = entries[i];
      const nameEl = document.querySelector(`[data-board-name-${n}]`);
      const ptsEl  = document.querySelector(`[data-board-pts-${n}]`);
      if (nameEl) nameEl.textContent = e ? e.name : "—";
      if (ptsEl)  ptsEl.textContent  = e ? `${e.pts} pts` : "0 pts";
    });

    // Full list — rebuild dynamically so it grows with entries
    const listEl = document.querySelector(".sports-board-list");
    const uid = currentUser?.id || currentUser?.email;
    if (listEl) {
      if (!entries.length) {
        listEl.innerHTML = `<li class="board-empty-row"><strong>-</strong><span>Waiting for entries</span><em>0 pts</em></li>`;
      } else {
        listEl.innerHTML = entries.map((e, i) => {
          const isYou = uid && e.uid === uid;
          return `<li data-board-row${isYou ? ' class="board-row--you"' : ""}>
            <strong data-board-pos>#${i + 1}</strong>
            <span data-board-player>${e.name}${isYou ? ' <em class="you-tag">You</em>' : ""}${e.pending ? ' <em class="pending-tag">⏳</em>' : ""}</span>
            <em data-board-score>${e.pts} pts</em>
          </li>`;
        }).join("");
      }
    }

    // Your position bar (sticky bottom)
    if (uid) {
      const userIdx = entries.findIndex(e => e.uid === uid);
      const youRow  = document.querySelector("[data-board-you-row]");
      if (youRow) {
        if (userIdx >= 0) {
          youRow.hidden = false;
          const youPos = youRow.querySelector("[data-board-you-pos]");
          const youPts = youRow.querySelector("[data-board-you-pts]");
          if (youPos) youPos.textContent = `#${userIdx + 1}`;
          if (youPts) youPts.textContent = `${entries[userIdx].pts} pts`;
        } else {
          youRow.hidden = true;
        }
      }
    }
  }

  // Re-render board whenever fixture is selected
  document.addEventListener("click", (evt) => {
    if (evt.target.closest("[data-live-fixture]")) {
      window.setTimeout(renderSportsLeaderboard, 50);
    }
  });

  // ──────────────────────────────────────────────────────────

  // Auto-select fixture if returning from checkout with pending fixture params
  function applyPendingFixtureFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const pfhome = params.get("pfhome");
    const pfaway = params.get("pfaway");
    if (!pfhome || !pfaway) {
      // Try localStorage pending fixture
      const pf = getPendingFixture();
      if (pf?.home) autoSelectFixture(pf.home, pf.away, pf.league, pf.status);
      return;
    }
    autoSelectFixture(pfhome, pfaway, params.get("pfleague") || "", params.get("pfstatus") || "Upcoming");
    clearPendingFixture();
    // Clean up URL params without reload
    const clean = new URL(window.location.href);
    ["pfhome","pfaway","pfleague","pfstatus"].forEach(k => clean.searchParams.delete(k));
    history.replaceState(null, "", clean.toString());
  }

  function autoSelectFixture(home, away, league, status) {
    // Try to find in feed first
    const all = document.querySelectorAll("[data-live-fixture]");
    let found = null;
    all.forEach(card => {
      if (card.dataset.home === home && card.dataset.away === away) found = card;
    });
    if (found) {
      setSportsPredictionMatch(found);
      found.classList.add("is-selected");
    } else {
      // Build a synthetic source object for the banner
      setSportsPredictionMatch({ dataset: { home, away, league, status, score: "TBC" } });
    }
    // Sync sport tab to active filter
    const sport = activeSportsFilter || "soccer";
    selectedTournamentSport = sport;
    document.querySelectorAll("[data-tournament-sport]").forEach(btn =>
      btn.classList.toggle("is-active", btn.dataset.tournamentSport === sport)
    );
    updateTournamentFields();
  }

  updateLockLabel();
  updateConfidence();
  updateTournamentFields();
  renderSportsLeaderboard();
  tickCountdown();
  window.setInterval(tickCountdown, 1000);

  // Expose board helpers globally so they work after login and on-demand
  window._lockshotRefreshBoard = refreshBoardFromCache;
  window._lockshotBoardSummary = renderPredictionScoreSummary;

  // Refresh Results button — clears actuals cache and re-fetches
  document.querySelector("[data-refresh-results]")?.addEventListener("click", () => {
    Object.keys(localStorage).filter(k => k.startsWith("lockshotActuals_")).forEach(k => localStorage.removeItem(k));
    renderResultsPage();
  });
  window.setInterval(updateFixtureCountdowns, 1000); // tick card countdowns every second

  // Apply after fixtures have had time to load
  window.setTimeout(applyPendingFixtureFromUrl, 1800);

  // If we land on sports-iq with a hash pointing to a non-live page
  // (e.g. returning from payment with #prediction-arena), switch to it now.
  const _initialPage = SPORTS_PAGE_MAP[window.location.hash] || "live";
  if (_initialPage !== "live") switchSportsPage(_initialPage);
}

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!requireAccount("Create an account or log in before adding an entry.")) return;
    const prize = {
      name: button.dataset.add,
      price: Number(button.dataset.price),
      basePrice: Number(button.dataset.price),
      qty: 1,
      game: button.dataset.game || ""
    };
    selectedPrize = { ...prize };
    renderSlip();
    renderCount();
    openSlip();
  });
});

document.querySelectorAll("[data-slip-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPrize = {
      name: button.dataset.slipChoice,
      price: Number(button.dataset.price),
      basePrice: Number(button.dataset.price),
      qty: 1,
      game: button.dataset.game || ""
    };
    document.querySelectorAll("[data-slip-choice]").forEach((item) => item.classList.toggle("is-active", item === button));
    renderSlip();
  });
});

document.querySelectorAll("[data-slip-step]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPrize.qty = Math.max(1, selectedPrize.qty + Number(button.dataset.slipStep));
    renderSlip();
  });
});

document.querySelectorAll("[data-bulk-qty]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPrize.qty = Number(button.dataset.bulkQty);
    renderSlip();
  });
});

document.querySelectorAll("[data-auth-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.authTab;
    document.querySelectorAll("[data-auth-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-auth-form]").forEach((form) => form.classList.toggle("is-active", form.dataset.authForm === tab));
  });
});

const signupForm = document.querySelector('[data-auth-form="signup"]');
if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-signup-name]")?.value.trim();
    const contact = document.querySelector("[data-signup-contact]")?.value.trim();
    const password = document.querySelector("[data-signup-password]")?.value.trim();

    if (!name || !contact || !password) {
      if (authMessage) authMessage.textContent = "Fill in name, contact, and password to create an account.";
      return;
    }

    if (!termsCheck?.checked || !ageCheck?.checked) {
      if (authMessage) authMessage.textContent = "Accept the terms and confirm you are over 18 to sign up.";
      return;
    }

    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client.auth.signUp({
        email: contact,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/account.html`
        }
      });

      if (error) {
        if (authMessage) authMessage.textContent = error.message;
        return;
      }

      storeCurrentUser({
        id: data.user?.id,
        name,
        contact: data.user?.email || contact,
        createdAt: data.user?.created_at || new Date().toISOString()
      });
      if (data.user) await upsertSupabaseProfile(data.user);
      if (authMessage) authMessage.textContent = "Account created. Check your email if confirmation is required.";
      redirectAfterAuth();
      return;
    }

    const demoAccount = { name, contact, password, createdAt: new Date().toISOString() };
    storeDemoAccount(demoAccount);
    storeCurrentUser({ name, contact, createdAt: demoAccount.createdAt, demo: true });
    if (authMessage) authMessage.textContent = "Demo account created. Add Supabase keys later for real email login.";
    goToPage("competitions");
  });
}

document.querySelectorAll("[data-social-login]").forEach((button) => {
  button.addEventListener("click", async () => {
    const provider = button.dataset.socialLogin || "Social";
    const providerId = provider.toLowerCase() === "facebook" ? "facebook" : "google";
    const client = getSupabaseClient();
    if (!client) {
      if (authMessage) authMessage.textContent = `${provider} sign in needs Supabase keys in auth-config.js.`;
      return;
    }
    const { error } = await client.auth.signInWithOAuth({
      provider: providerId,
      options: { redirectTo: `${window.location.origin}/account.html` }
    });
    if (error && authMessage) authMessage.textContent = error.message;
  });
});

document.querySelectorAll("[data-auth-gate]").forEach((link) => {
  link.addEventListener("click", handleAuthGate);
});

document.querySelectorAll("[data-forgot-password]").forEach((button) => {
  button.addEventListener("click", async () => {
    const contact = document.querySelector("[data-login-contact]")?.value.trim();
    if (!contact) {
      if (authMessage) authMessage.textContent = "Enter your email first, then press Forgot password.";
      return;
    }

    const client = getSupabaseClient();
    if (!client) {
      if (authMessage) authMessage.textContent = "Password reset needs the real Supabase publishable key in auth-config.js.";
      return;
    }

    const { error } = await client.auth.resetPasswordForEmail(contact, {
      redirectTo: `${window.location.origin}/account.html`
    });

    if (authMessage) authMessage.textContent = error ? error.message : "Password reset email sent.";
  });
});

const loginForm = document.querySelector('[data-auth-form="login"]');
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const contact = document.querySelector("[data-login-contact]")?.value.trim();
    const password = document.querySelector("[data-login-password]")?.value.trim();

    if (!contact || !password) {
      if (authMessage) authMessage.textContent = "Enter your contact and password to log in.";
      return;
    }

    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client.auth.signInWithPassword({
        email: contact,
        password
      });

      if (error) {
        if (authMessage) authMessage.textContent = error.message;
        return;
      }

      storeCurrentUser({
        id: data.user?.id,
        name: data.user?.user_metadata?.full_name || data.user?.email || "Lockshot player",
        contact: data.user?.email || contact,
        createdAt: data.user?.created_at || new Date().toISOString()
      });
      if (data.user) await upsertSupabaseProfile(data.user);
      if (authMessage) authMessage.textContent = "Logged in. You can now enter Lockshot competitions.";
      redirectAfterAuth();
      return;
    }

    const demoAccount = findDemoAccount(contact);
    if (demoAccount && demoAccount.password !== password) {
      if (authMessage) authMessage.textContent = "That password does not match this demo account.";
      return;
    }

    const fallbackUser = demoAccount || {
      name: "Lockshot player",
      contact,
      password,
      createdAt: new Date().toISOString()
    };
    if (!demoAccount) storeDemoAccount(fallbackUser);

    storeCurrentUser({
      name: fallbackUser.name,
      contact: fallbackUser.contact,
      createdAt: fallbackUser.createdAt,
      demo: true
    });
    if (authMessage) authMessage.textContent = "Logged in with a demo account. You can now enter Lockshot competitions.";
    goToPage("competitions");
  });
}

if (signOutButton) {
  signOutButton.addEventListener("click", async () => {
    const client = getSupabaseClient();
    if (client) await client.auth.signOut();
    storeCurrentUser(null);
    clearCart();
    storePaidAttempts(0);
    renderCount();
    renderCheckout();
    renderPenaltyGame();
    renderGearGame();
    renderDriftGame();
    if (authMessage) authMessage.textContent = "Signed out. Create an account or log in to play again.";
  });
}

if (confirmAdd) {
  confirmAdd.addEventListener("click", async () => {
    if (!requireAccount("Create an account or log in before adding an entry.")) return;
    const unitPrice = selectedUnitPrice();
    const client = getSupabaseClient();
    const uid = currentUser?.id;

    // ── Always pay from wallet ────────────────────────────────
    if (client && uid) {
      const { data: walletData } = await client.from("wallets").select("balance").eq("user_id", uid).maybeSingle();
      const balance = parseFloat(walletData?.balance ?? 0);

      if (balance < unitPrice) {
        closeSlip();
        if (typeof switchSportsPage === "function") switchSportsPage("wallet");
        else window.location.href = "sports-iq.html#sports-wallet";
        alert(`Insufficient wallet balance (R${balance.toFixed(2)}). Please top up your wallet.`);
        return;
      }

      // Deduct from wallet
      const newBalance = parseFloat((balance - unitPrice).toFixed(2));
      await client.from("wallets").upsert({ user_id: uid, balance: newBalance, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
      await client.from("wallet_transactions").insert({ user_id: uid, type: "spend", amount: unitPrice, description: `Entry: ${selectedPrize.name}` });

      if (typeof _walletBalance !== "undefined") { _walletBalance = newBalance; updateWalletUI(); }

      // Grant access
      const prizeCtx = { name: selectedPrize.name, game: selectedPrize.game };
      storePaidAttempts((getStoredPaidAttempts(prizeCtx) || 0) + (selectedPrize.qty || 1), prizeCtx);

      closeSlip();
      renderCount();

      // For sports — go to predict tab
      if (selectedPrize?.game === "sports") {
        renderSportsEntryState();
        const pendingFix = getPendingFixture();
        if (pendingFix) {
          const match = document.querySelector(`[data-live-fixture][data-home="${pendingFix.home}"][data-away="${pendingFix.away}"]`);
          if (match) setSportsPredictionMatch(match);
        }
        switchSportsPage("predict");
        return;
      }

      // For games — go directly to the game
      goToGame(getStoredPaidAttempts(prizeCtx));
      return;
    }

    // ── Fallback: no wallet (not logged in properly) ──────────
    closeSlip();
    alert("Please log in to use your wallet.");
  });
}

document.querySelectorAll("[data-prize-play]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!requireAccount("Create an account or log in before choosing a competition.")) return;
    selectedPrize = {
      name: button.dataset.prizePlay || "Weekly Giveaway: R2,500",
      price: Number(button.dataset.price || 10),
      qty: 1
    };
    const tokens = getStoredPaidAttempts(selectedPrize);
    if (!tokens) {
      openSlip(selectedPrize);
      return;
    }

    const prizeName = selectedPrize.name;
    const prizePrice = selectedPrize.price;
    storeActivePrize({ name: prizeName, price: prizePrice });
    goToGame(tokens);
  });
});

startGameButtons.forEach((startGameButton) => {
  startGameButton.addEventListener("click", () => {
    const entries = totalEntries();

    if (!entries) {
      if (checkoutStatus) checkoutStatus.textContent = "Add entries before payment.";
      goToPage("checkout");
      return;
    }

    if (checkoutStatus) checkoutStatus.textContent = "Payment successful. Loading your skill game choices...";
    const paidItem = [...cart.values()][0];
    let paidPrize = getCurrentPrizeContext();
    if (paidItem && !paidItem.name.includes(" - ")) {
      paidPrize = { name: paidItem.name, price: paidItem.price, game: paidItem.game };
      storeActivePrize(paidPrize);
    }
    storePaidAttempts(getStoredPaidAttempts(paidPrize) + entries, paidPrize);
    clearCart();
    penaltyStarted = false;
    gearStarted = false;
    driftStarted = false;
    boostStarted = false;
    boostRunning = false;
    stopBoostRun();
    markerPosition = null;
    currentScore = null;
    resetPenaltyRound();
    resetGearRound();
    resetDriftRound();
    resetBoostRound();
    if (spotBoard) spotBoard.classList.remove("has-marker");
    renderSpotGame();
    renderPenaltyGame();
    renderGearGame();
    renderDriftGame();
    renderBoostGame();
    updateGamePreview();
    window.setTimeout(() => {
      const paidGame = new URLSearchParams(window.location.search).get("game");
      goToGame(entries, paidGame);
    }, 500);
  });
});

document.querySelectorAll("[data-checkout-step]").forEach((button) => {
  button.addEventListener("click", () => {
    updateCheckoutQty(totalEntries() + Number(button.dataset.checkoutStep));
  });
});

document.querySelectorAll("[data-checkout-bulk]").forEach((button) => {
  button.addEventListener("click", () => {
    updateCheckoutQty(Number(button.dataset.checkoutBulk));
  });
});

document.querySelectorAll("[data-play-different]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const url = new URL(link.getAttribute("href") || "game.html", window.location.href);
    if (paidAttempts) url.searchParams.set("attempts", String(paidAttempts));
    const activePrize = getActivePrize();
    if (activePrize?.name) {
      url.searchParams.set("prize", activePrize.name);
      url.searchParams.set("price", String(activePrize.price || 10));
    }
    event.preventDefault();
    window.location.href = url.href;
  });
});

document.querySelectorAll("[data-game-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.gameHref) {
      if (!paidAttempts) {
        if (gameStatus) gameStatus.textContent = "Add tokens first, then Play unlocks on matching games.";
        return;
      }
      if (!canPlayGameChoice(button)) {
        if (gameStatus) gameStatus.textContent = "These tokens belong to a different game.";
        return;
      }
      const url = new URL(button.dataset.gameHref, window.location.href);
      if (paidAttempts) url.searchParams.set("attempts", String(paidAttempts));
      window.location.href = url.href;
      return;
    }
    switchGame(button.dataset.gameChoice);
  });
});

startPenaltyButtons.forEach((startPenaltyButton) => {
  startPenaltyButton.addEventListener("click", () => {
    if (!paidAttempts) {
      if (penaltyNote) penaltyNote.textContent = "Add entries and press Pay now to unlock Penalty Lock.";
      return;
    }

    penaltyStarted = true;
    resetPenaltyRound();
    if (penaltyNote) penaltyNote.textContent = "Shot 1 of 3. Hit the moving ball for 10 points. It gets faster every shot.";
    startPenaltyMovement();
    renderPenaltyGame();
  });
});

if (spotBoard) {
  spotBoard.addEventListener("click", (event) => {
    if (!paidAttempts) {
      if (gameNote) gameNote.textContent = "Add entries and press Pay now to unlock Spot Lock attempts.";
      return;
    }

    const rect = spotBoard.getBoundingClientRect();
    markerPosition = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    };
    currentScore = null;

    if (spotMarker) {
      spotMarker.style.setProperty("--x", `${markerPosition.x}%`);
      spotMarker.style.setProperty("--y", `${markerPosition.y}%`);
    }
    spotBoard.classList.add("has-marker");
    renderSpotGame();
  });
}

if (submitSpotButton) {
  submitSpotButton.addEventListener("click", () => {
    if (!paidAttempts || !markerPosition) return;

    currentScore = scoreSpotLock(markerPosition);
    storePaidAttempts(Math.max(0, paidAttempts - 1));
    playerHighScore = Math.max(playerHighScore, currentScore);
    storePlayerHighScore(playerHighScore);
    saveGameScoreToSupabase("Spot Lock", currentScore);
    markerPosition = null;
    if (spotBoard) spotBoard.classList.remove("has-marker");
    if (gameNote) {
      gameNote.textContent = paidAttempts
        ? `Submitted. Your score was ${currentScore}. Place your next Lockshot.`
        : `Submitted. Your score was ${currentScore}. No attempts left.`;
    }
    renderSpotGame();
  });
}

if (penaltyBoard) {
  penaltyBoard.addEventListener("click", (event) => {
    if (event.target.closest(".game-overlay")) return;

    if (!penaltyStarted) {
      if (penaltyNote) penaltyNote.textContent = "Press Start Game first.";
      return;
    }

    if (!paidAttempts) {
      if (penaltyNote) penaltyNote.textContent = "Add entries and press Pay now to unlock Penalty Lock attempts.";
      return;
    }

    if (penaltyTapLocked) {
      if (penaltyNote) penaltyNote.textContent = penaltyRoundComplete ? "New round loading..." : "Next shot loading...";
      return;
    }

    const rect = penaltyBoard.getBoundingClientRect();
    const tapPosition = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    };

    const shotScore = scorePenaltyLock(tapPosition);
    penaltyRoundScore += shotScore;
    penaltyScore = penaltyRoundScore;
    penaltyTapLocked = true;
    showTapPop(tapPosition, shotScore);

    if (penaltyShotNumber === 3) {
      storePaidAttempts(Math.max(0, paidAttempts - 1));
      penaltyRoundComplete = true;
      penaltyShowEndScreen = false;
      penaltyHighScore = Math.max(penaltyHighScore, penaltyRoundScore);
      storePenaltyHighScore(penaltyHighScore);
      saveGameScoreToSupabase("Penalty Lock", penaltyRoundScore);
    }

    if (penaltyTap) {
      penaltyTap.style.setProperty("--tap-x", `${tapPosition.x}%`);
      penaltyTap.style.setProperty("--tap-y", `${tapPosition.y}%`);
    }
    penaltyBoard.classList.add("has-tap");

    if (penaltyNote) {
      if (penaltyRoundComplete) {
        penaltyNote.textContent = `${shotScore ? "On target" : "Miss"}. Round score: ${penaltyRoundScore}/30. Calculating result...`;
      } else {
        penaltyNote.textContent = `Shot ${penaltyShotNumber}: ${shotScore === 10 ? "+10 on target" : shotScore === 5 ? "+5 close hit" : "+0 miss"}. Next shot starts automatically.`;
      }
    }

    renderSpotGame();
    renderPenaltyGame();
    window.clearTimeout(penaltyAdvanceTimer);
    if (penaltyRoundComplete) {
      stopPenaltyMovement();
      penaltyStarted = false;
      penaltyAdvanceTimer = window.setTimeout(() => {
        penaltyShowEndScreen = true;
        if (penaltyNote) {
          penaltyNote.textContent = paidAttempts
            ? `Round complete. Round score: ${penaltyRoundScore}/30. Press Continue to use another round.`
            : `Round complete. Round score: ${penaltyRoundScore}/30. No rounds left.`;
        }
        renderPenaltyGame();
      }, 2000);
    } else {
      penaltyAdvanceTimer = window.setTimeout(advancePenaltyShot, 760);
    }
  });
}

if (buyMoreTriesButton) {
  buyMoreTriesButton.addEventListener("click", () => {
    penaltyStarted = false;
    stopPenaltyMovement();
    goToGameCheckout("penalty");
    renderPenaltyGame();
  });
}

startGearButtons.forEach((startGearButton) => {
  startGearButton.addEventListener("click", () => {
    if (!paidAttempts) {
      if (gearNote) gearNote.textContent = "Add entries and press Pay now to unlock Gear Shift Lock.";
      return;
    }

    gearStarted = true;
    resetGearRound();
    if (gearNote) gearNote.textContent = "Shift 1 of 3. Hit the green zone before the timer ends.";
    startGearMovement();
    startGearShiftTimer();
    renderGearGame();
  });
});

if (gearBoard) {
  gearBoard.addEventListener("click", (event) => {
    if (event.target.closest(".game-overlay")) return;
    handleGearTap();
  });
}
if (gearTapButton) gearTapButton.addEventListener("click", handleGearTap);

if (buyMoreGearButton) {
  buyMoreGearButton.addEventListener("click", () => {
    gearStarted = false;
    stopGearShiftTimer();
    stopGearMovement();
    goToGameCheckout("gear");
    renderGearGame();
  });
}

startDriftButtons.forEach((startDriftButton) => {
  startDriftButton.addEventListener("click", () => {
    if (!paidAttempts) {
      if (driftNote) driftNote.textContent = "Add entries and press Pay now to unlock Drift Line Lock.";
      return;
    }

    driftStarted = true;
    resetDriftRound();
    if (driftBoard) driftBoard.classList.add("show-ideal");
    if (driftNote) driftNote.textContent = "Memorise the green line.";
    window.setTimeout(() => {
      if (driftBoard) driftBoard.classList.remove("show-ideal");
      driftReady = true;
      if (driftNote) driftNote.textContent = "Trace the racing line from left to right. Timer starts when you touch.";
      renderDriftGame();
    }, 1300);
    renderDriftGame();
  });
});

if (driftBoard) {
  driftBoard.addEventListener("pointerdown", (event) => {
    if (!driftStarted || !paidAttempts) {
      if (driftNote) driftNote.textContent = "Press Start Game first.";
      return;
    }
    if (!driftReady) {
      if (driftNote) driftNote.textContent = "Memorise the green line first.";
      return;
    }
    event.preventDefault();
    driftBoard.setPointerCapture?.(event.pointerId);
    driftDrawing = true;
    if (driftRoundTimer) {
      driftPoints.push(pointFromEvent(event));
    } else {
      driftPoints = [pointFromEvent(event)];
    }
    startDriftCountdown();
    drawDriftPath();
    renderDriftGame();
  });

  driftBoard.addEventListener("pointermove", (event) => {
    if (!driftDrawing) return;
    event.preventDefault();
    driftPoints.push(pointFromEvent(event));
    if (driftPoints.length > 120) driftPoints.shift();
    drawDriftPath();
    renderDriftGame();
  });

  window.addEventListener("pointerup", () => {
    driftDrawing = false;
    renderDriftGame();
  });
}

if (submitDriftButton) {
  submitDriftButton.addEventListener("click", () => {
    if (!driftStarted || !paidAttempts || driftPoints.length < 8) return;

    driftScore = scoreDriftLine();
    storePaidAttempts(Math.max(0, paidAttempts - 1));
    driftHighScore = Math.max(driftHighScore, driftScore);
    storeModeHighScore("Drift", driftHighScore);
    saveGameScoreToSupabase("Drift Line Lock", driftScore);
    showModePop(driftPop, driftScore ? `+${driftScore}` : "Miss +0", driftScore === 0);
    driftStarted = false;
    if (driftNote) driftNote.textContent = paidAttempts ? `Score: ${driftScore}. Press Start Game to use another round.` : `Score: ${driftScore}. No rounds left.`;
    renderSpotGame();
    renderPenaltyGame();
    renderGearGame();
    renderDriftGame();
    renderBoostGame();
  });
}

startBoostButtons.forEach((startBoostButton) => {
  startBoostButton.addEventListener("click", () => {
    if (!paidAttempts) {
      if (boostNote) boostNote.textContent = "Add entries and press Pay now to unlock Boost Lock.";
      return;
    }

    resetBoostRound();
    startBoostRun();
  });
});

if (boostLockScoreButton) boostLockScoreButton.addEventListener("click", lockBoostScore);
if (boostBoard) boostBoard.addEventListener("click", (event) => {
  if (event.target.closest(".game-overlay")) return;
  lockBoostScore();
});

if (buyMoreBoostButton) {
  buyMoreBoostButton.addEventListener("click", () => {
    boostStarted = false;
    boostRunning = false;
    stopBoostRun();
    goToGameCheckout("boost");
    renderBoostGame();
  });
}

if (buyMoreDriftButton) {
  buyMoreDriftButton.addEventListener("click", () => {
    driftStarted = false;
    goToGameCheckout("drift");
    renderDriftGame();
  });
}

if (resetPenaltyButton) {
  resetPenaltyButton.addEventListener("click", () => {
    if (penaltyNote) penaltyNote.textContent = "The shots move automatically after each tap.";
  });
}

document.querySelectorAll(".ball-point").forEach((point) => {
  point.addEventListener("click", () => {
    document.querySelectorAll(".ball-point").forEach((item) => item.classList.remove("active"));
    point.classList.add("active");
  });
});

if (openCartButton) openCartButton.addEventListener("click", () => {
  if (!requireAccount("Create an account before opening your basket.")) return;
  renderSlip();
  openSlip();
});
if (closeCartButton) closeCartButton.addEventListener("click", closeSlip);
if (scrim) scrim.addEventListener("click", closeSlip);
if (openMenuButton) openMenuButton.addEventListener("click", openMenu);
if (closeMenuButton) closeMenuButton.addEventListener("click", closeMenu);
if (menuOverlay) {
  menuOverlay.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

window.addEventListener("hashchange", () => showPage(routeFromHash()));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSlip();
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  updateHeader();
  handleLogoTopReplay();
}, { passive: true });

window.addEventListener("load", () => {
  syncSupabaseUser();
  setHeroSlide(activeHeroSlide);
  initHeroSwipe();
  initStandingsSwitch();
  renderCount();
  renderQuickPlay();
  initQuickPlay();
  renderAccount();
  renderSlip();
  renderCheckout();
  renderCompetitionTokenActions();
  updateGamePreview();
  renderSpotGame();
  renderPenaltyGame();
  renderGearGame();
  renderDriftGame();
  renderBoostGame();
  renderGameMenuTokens();
  initMatchIqChallenge();
  initSportsIqExperience();
  loadSupabaseLeaderboard();
  loadSportsApiFixtures();
  if (sportsRefreshTimer) window.clearInterval(sportsRefreshTimer);
  sportsRefreshTimer = window.setInterval(loadSportsApiFixtures, 20 * 60 * 1000);
  showPage(routeFromHash(), false);
  updateHeader();
  playLogoCrash();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  initTopupButtons();
  if (currentUser) { renderWalletPage(); }
});

renderCount();
renderQuickPlay();
initQuickPlay();
syncSupabaseUser();
setHeroSlide(activeHeroSlide);
initHeroSwipe();
initStandingsSwitch();
renderAccount();
renderSlip();
renderCheckout();
renderCompetitionTokenActions();
updateGamePreview();
renderSpotGame();
renderPenaltyGame();
renderGearGame();
renderDriftGame();
renderBoostGame();
renderGameMenuTokens();
initMatchIqChallenge();
initSportsIqExperience();
loadSupabaseLeaderboard();
loadSportsApiFixtures();
if (sportsRefreshTimer) window.clearInterval(sportsRefreshTimer);
sportsRefreshTimer = window.setInterval(loadSportsApiFixtures, 20 * 60 * 1000);
showPage(routeFromHash(), false);
updateHeader();
playLogoCrash();
window.setTimeout(updateHeader, 0);
window.setTimeout(updateHeader, 250);
updateCountdown();
setInterval(updateCountdown, 1000);
setInterval(() => setHeroSlide(activeHeroSlide + 1), 5200);

/* ── Competition cards auto-scroll (mobile only) ── */
function initCardsAutoScroll() {
  const cars = document.querySelector('.competitions-page .cars');
  if (!cars || window.innerWidth > 720) return;

  let userInteracting = false;
  let paused = false;
  let dir = 1; // 1 = drift right toward R10k, -1 = drift back to R2.5k
  const speed = 0.6; // px per rAF tick (~36 px/s at 60 fps)

  // Disable snap so the rAF animation can move freely
  cars.style.scrollSnapType = 'none';

  cars.addEventListener('touchstart', () => {
    userInteracting = true;
    cars.style.scrollSnapType = 'x mandatory'; // restore snap for manual swipe
  }, { passive: true });
  cars.addEventListener('touchend', () => {
    setTimeout(() => {
      userInteracting = false;
      cars.style.scrollSnapType = 'none'; // disable again for auto-scroll
    }, 4000);
  }, { passive: true });

  function tick() {
    if (!userInteracting && !paused) {
      cars.scrollLeft += speed * dir;
      const maxScroll = cars.scrollWidth - cars.clientWidth;

      if (dir === 1 && cars.scrollLeft >= maxScroll - 1) {
        paused = true;
        setTimeout(() => { dir = -1; paused = false; }, 2500); // pause at R10k end
      } else if (dir === -1 && cars.scrollLeft <= 1) {
        paused = true;
        setTimeout(() => { dir = 1; paused = false; }, 2500);  // pause at R2.5k end
      }
    }
    requestAnimationFrame(tick);
  }

  setTimeout(tick, 1200); // small delay before starting
}
initCardsAutoScroll();
