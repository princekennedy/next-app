
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_NEXT_PUBLIC_SUPABASE_URLL || "https://xymgyqsjfcalovilxbtm.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bWd5cXNqZmNhbG92aWx4YnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MTYwNTQsImV4cCI6MjA1MjE5MjA1NH0.pY56lvZ1UlbBwYU1JqEf6-wI_Hm-p9ks4E_3iILHBrY"


export const supabase = createClient(supabaseUrl, supabaseKey);

