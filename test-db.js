
import { createClient } from "@supabase/supabase-js";

// Manually reading env vars for test script (assuming running with node --env-file=.env)
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing env vars");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testToken() {
    console.log("Testing connection...");
    try {
        const { data, error } = await supabase.from('cars').select('count', { count: 'exact', head: true });
        if (error) {
            console.error("Supabase Error:", error);
            process.exit(1);
        }
        console.log("Success! Connection Verified.");
    } catch (err) {
        console.error("Exception:", err);
        process.exit(1);
    }
}

testToken();
