import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://miuyvkgajpojyvuccmal.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdXl2a2dhanBvanl2dWNjbWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNzM5NTMsImV4cCI6MjA4MDk0OTk1M30.-T0B8bEJlbrRzoQD-uDw5LGccAoCQgqxm9ZvP39tm3Q";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
