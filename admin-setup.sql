-- ============================================================
-- Lockshot Admin Setup SQL
-- Run this once in Supabase → SQL Editor
-- ============================================================

-- 1. Add new columns to the profiles table
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS last_sign_in  timestamptz,
  ADD COLUMN IF NOT EXISTS provider      text DEFAULT 'email',
  ADD COLUMN IF NOT EXISTS blocked       boolean DEFAULT false;

-- 2. Make sure skill_score has a safe default so upsert never breaks
ALTER TABLE public.profiles
  ALTER COLUMN skill_score SET DEFAULT 0;

-- ============================================================
-- RLS POLICIES
-- Replace 'YOUR_ADMIN_EMAIL' with your actual email address
-- ============================================================

-- Allow every authenticated user to read/write their own profile
-- (this policy usually already exists — safe to run anyway)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename  = 'profiles'
      AND policyname = 'Users can upsert own profile'
  ) THEN
    EXECUTE $policy$
      CREATE POLICY "Users can upsert own profile"
      ON public.profiles
      FOR ALL
      USING      (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
    $policy$;
  END IF;
END $$;

-- Allow the admin to SELECT all profiles (for the dashboard)
DROP POLICY IF EXISTS "Admin can read all profiles" ON public.profiles;
CREATE POLICY "Admin can read all profiles"
  ON public.profiles
  FOR SELECT
  USING (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- Allow the admin to UPDATE any profile (for block/unblock)
DROP POLICY IF EXISTS "Admin can update all profiles" ON public.profiles;
CREATE POLICY "Admin can update all profiles"
  ON public.profiles
  FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- ============================================================
-- entries table (tracks paid competition entries)
-- Create only if it doesn't exist yet
-- ============================================================
CREATE TABLE IF NOT EXISTS public.entries (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  competition  text NOT NULL,
  qty          int  NOT NULL DEFAULT 1,
  amount       numeric(10,2) NOT NULL DEFAULT 0,
  created_at   timestamptz DEFAULT now()
);

-- Enable RLS on entries
ALTER TABLE public.entries ENABLE ROW LEVEL SECURITY;

-- Users see their own entries
DROP POLICY IF EXISTS "Users see own entries" ON public.entries;
CREATE POLICY "Users see own entries"
  ON public.entries FOR SELECT
  USING (auth.uid() = user_id);

-- Admin sees all entries
DROP POLICY IF EXISTS "Admin sees all entries" ON public.entries;
CREATE POLICY "Admin sees all entries"
  ON public.entries FOR SELECT
  USING (auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL');

-- ============================================================
-- game_scores table (tracks individual game round results)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.game_scores (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  game       text NOT NULL,
  score      int  NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.game_scores ENABLE ROW LEVEL SECURITY;

-- Users can insert their own scores
DROP POLICY IF EXISTS "Users insert own scores" ON public.game_scores;
CREATE POLICY "Users insert own scores"
  ON public.game_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can read their own scores
DROP POLICY IF EXISTS "Users read own scores" ON public.game_scores;
CREATE POLICY "Users read own scores"
  ON public.game_scores FOR SELECT
  USING (auth.uid() = user_id);

-- Admin sees all game scores
DROP POLICY IF EXISTS "Admin sees all scores" ON public.game_scores;
CREATE POLICY "Admin sees all scores"
  ON public.game_scores FOR SELECT
  USING (auth.jwt() ->> 'email' = 'samuelhyera.hyera7@gmail.com');

-- ============================================================
-- sports_predictions table (tracks sports predict submissions)
-- ============================================================
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
  USING (auth.jwt() ->> 'email' = 'samuelhyera.hyera7@gmail.com');

-- Admin can update predictions (to award points)
DROP POLICY IF EXISTS "Admin updates predictions" ON public.sports_predictions;
CREATE POLICY "Admin updates predictions"
  ON public.sports_predictions FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'samuelhyera.hyera7@gmail.com');
