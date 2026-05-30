-- ============================================================
-- Lockshot Admin Setup SQL  (v2 — run this in full each time)
-- Supabase → SQL Editor → paste all → Run
-- Safe to re-run: uses IF NOT EXISTS / DROP IF EXISTS
-- ============================================================

-- ── 1. profiles table — add every column the app needs ──────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS full_name    text,
  ADD COLUMN IF NOT EXISTS email        text,
  ADD COLUMN IF NOT EXISTS last_sign_in timestamptz,
  ADD COLUMN IF NOT EXISTS provider     text DEFAULT 'email',
  ADD COLUMN IF NOT EXISTS blocked      boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS skill_score  int DEFAULT 0;

-- Make sure skill_score never breaks upsert
ALTER TABLE public.profiles
  ALTER COLUMN skill_score SET DEFAULT 0;

-- ── 2. RLS on profiles ───────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users manage their own profile
DROP POLICY IF EXISTS "Users can upsert own profile" ON public.profiles;
CREATE POLICY "Users can upsert own profile"
  ON public.profiles FOR ALL
  USING      (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Admin reads ALL profiles
DROP POLICY IF EXISTS "Admin can read all profiles" ON public.profiles;
CREATE POLICY "Admin can read all profiles"
  ON public.profiles FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

-- Admin updates ANY profile (block/unblock)
DROP POLICY IF EXISTS "Admin can update all profiles" ON public.profiles;
CREATE POLICY "Admin can update all profiles"
  ON public.profiles FOR UPDATE
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

-- ── 3. entries table ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.entries (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  competition text NOT NULL,
  qty         int  NOT NULL DEFAULT 1,
  amount      numeric(10,2) NOT NULL DEFAULT 0,
  created_at  timestamptz DEFAULT now()
);

ALTER TABLE public.entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users see own entries" ON public.entries;
CREATE POLICY "Users see own entries"
  ON public.entries FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users insert own entries" ON public.entries;
CREATE POLICY "Users insert own entries"
  ON public.entries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin sees all entries" ON public.entries;
CREATE POLICY "Admin sees all entries"
  ON public.entries FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

-- ── 4. game_scores table ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.game_scores (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  game       text NOT NULL,
  score      int  NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.game_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users insert own scores" ON public.game_scores;
CREATE POLICY "Users insert own scores"
  ON public.game_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users read own scores" ON public.game_scores;
CREATE POLICY "Users read own scores"
  ON public.game_scores FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin sees all scores" ON public.game_scores;
CREATE POLICY "Admin sees all scores"
  ON public.game_scores FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

-- ── 5. sports_predictions table ──────────────────────────────
CREATE TABLE IF NOT EXISTS public.sports_predictions (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  match        text NOT NULL,
  sport        text DEFAULT 'soccer',
  ticket_num   int  DEFAULT 1,
  score_pred   text,
  possession   text,
  first_scorer text,
  status       text DEFAULT 'pending',
  pts_awarded  int  DEFAULT 0,
  created_at   timestamptz DEFAULT now()
);

ALTER TABLE public.sports_predictions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users insert own predictions" ON public.sports_predictions;
CREATE POLICY "Users insert own predictions"
  ON public.sports_predictions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users read own predictions" ON public.sports_predictions;
CREATE POLICY "Users read own predictions"
  ON public.sports_predictions FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admin sees all predictions" ON public.sports_predictions;
CREATE POLICY "Admin sees all predictions"
  ON public.sports_predictions FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

DROP POLICY IF EXISTS "Admin updates predictions" ON public.sports_predictions;
CREATE POLICY "Admin updates predictions"
  ON public.sports_predictions FOR UPDATE
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users WHERE email = 'samuelhyera.hyera7@gmail.com'
    )
  );

-- ── 6. Add missing prediction columns ────────────────────────
ALTER TABLE public.sports_predictions
  ADD COLUMN IF NOT EXISTS corners_pred text,
  ADD COLUMN IF NOT EXISTS cards_pred   text,
  ADD COLUMN IF NOT EXISTS minute_pred  text,
  ADD COLUMN IF NOT EXISTS motm_pred    text;

-- Fix admin policies to use jwt() instead of subquery
DROP POLICY IF EXISTS "Admin sees all predictions" ON public.sports_predictions;
CREATE POLICY "Admin sees all predictions"
  ON public.sports_predictions FOR SELECT
  USING (auth.jwt() ->> 'email' = 'samuelhyera.hyera7@gmail.com');

DROP POLICY IF EXISTS "Admin updates predictions" ON public.sports_predictions;
CREATE POLICY "Admin updates predictions"
  ON public.sports_predictions FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'samuelhyera.hyera7@gmail.com');

-- Users can also read ALL graded predictions for the global leaderboard
DROP POLICY IF EXISTS "Users read graded predictions" ON public.sports_predictions;
CREATE POLICY "Users read graded predictions"
  ON public.sports_predictions FOR SELECT
  USING (status = 'graded');

-- ── Done ─────────────────────────────────────────────────────
-- After running this, reload the admin dashboard.
-- Users will appear once they log in (profile is upserted on login).
