import { createClient } from '@supabase/supabase-js';

const supabaseUrl = undefined                            ;
const supabaseAnonKey = undefined                                 ;
{
  console.error("Supabase environment variables are missing!");
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
