import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jtykpayixzxahabxfvot.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWtwYXlpeHp4YWhhYnhmdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxODc2MzgsImV4cCI6MjEwMzc2MzYzOH0.Z47dY9hdZ8alSTZyEMjTfyDXbWjkomsHxw64QpV7dSI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);