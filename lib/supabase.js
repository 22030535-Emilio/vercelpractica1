import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://xvbllxuycicdzjurzqhm.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'sb_publishable_OtIX3F5Fu-WLrgYVBBj35A_v6n7q81v';

export const supabase = createClient(supabaseUrl, supabaseKey);
