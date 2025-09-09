sql
CREATE TABLE IF NOT EXISTS materials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  family TEXT,
  key_properties JSONB,
  characteristics TEXT[],
  typical_applications TEXT[],
  manufacturability JSONB,
  cost_tier TEXT,
  availability TEXT,
  standards TEXT[],
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
