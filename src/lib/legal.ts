export const prerender = false;
import { supabase } from "./supabase";

export interface LegalPageData {
    title: string;
    content_mdx: string;
    updated_at: string;
}

export async function fetchLegalPage(type: 'privacy' | 'terms'): Promise<LegalPageData | null> {
    try {
        const { data, error } = await supabase
            .from('legal_pages')
            .select('title, content_mdx, updated_at')
            .eq('type', type)
            .eq('is_active', true)
            .maybeSingle();

        if (error) {
            console.error(`Error fetching legal page (${type}):`, error);
            return null;
        }

        return data as LegalPageData;
    } catch (err) {
        console.error(`Exception fetching legal page (${type}):`, err);
        return null;
    }
}
