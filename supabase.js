// ================================================================
//  supabase.js — Shared Supabase client
//  Replace the two constants below with your project values.
//  Find them in: Supabase Dashboard → Project Settings → API
// ================================================================

const SUPABASE_URL      = 'YOUR_SUPABASE_URL';       // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // public anon key

// Initialise client (relies on the UMD CDN build loaded before this file)
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
