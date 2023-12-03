import { createClient } from '@supabase/supabase-js'

const sbApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

// Check if the environment variables are defined
if (!sbUrl || !sbApiKey) {
    throw new Error("Supabase URL and/or API Key are not defined in environment variables.");
}

const supabaseClient = createClient(sbUrl, sbApiKey)

export { supabaseClient }
