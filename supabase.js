// ================================================================
//  supabase.js — Shared Supabase client
//  Replace the two constants below with your project values.
//  Find them in: Supabase Dashboard → Project Settings → API
// ================================================================

const SUPABASE_URL      = 'https://xonubfsyqghhqyjymiae.supabase.co';       // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvbnViZnN5cWdoaHF5anltaWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NzUxMzMsImV4cCI6MjA5MDM1MTEzM30.6hiplZhP4BQjRX_cuUtqfT8F2lpXcPSxlEtzlwLsqHQ';  // public anon key

// Initialise client (relies on the UMD CDN build loaded before this file)
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
