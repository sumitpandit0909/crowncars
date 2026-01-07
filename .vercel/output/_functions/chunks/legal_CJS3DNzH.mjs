import { s as supabase } from './supabase_BIsWE_c6.mjs';

async function fetchLegalPage(type) {
  try {
    const { data, error } = await supabase.from("legal_pages").select("title, content_mdx, updated_at").eq("type", type).eq("is_active", true).maybeSingle();
    if (error) {
      console.error(`Error fetching legal page (${type}):`, error);
      return null;
    }
    return data;
  } catch (err) {
    console.error(`Exception fetching legal page (${type}):`, err);
    return null;
  }
}

export { fetchLegalPage as f };
