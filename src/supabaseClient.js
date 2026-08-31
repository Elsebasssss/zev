import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iucfdagkvfpumpxbysei.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1Y2ZkYWdrdmZwdW1weGJ5c2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTU0MTYsImV4cCI6MjEwMzc3MTQxNn0.OEcDtPii3W2MBE5cZy1g3yLgV_yuGbZXSg_bxjuR6j4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);