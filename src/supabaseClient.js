import { createClient } from '@supabase/supabase-js';

// Reemplaza estas dos constantes con las credenciales de tu proyecto en Supabase
const supabaseUrl = 'https://TU_PROYECTO.supabase.co';
const supabaseAnonKey = 'TU_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);