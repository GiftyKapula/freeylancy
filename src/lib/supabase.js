import { createClient } from "@supabase/supabase-js";

// Note: The URL you provided had .cov - I'm assuming it should be .co
const supabaseUrl = "https://fwmrnzztnuiruabnxvno.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bXJuenp0bnVpcnVhYm54dm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMjIzMDYsImV4cCI6MjA3NjY5ODMwNn0.wuoIIHYuBJfNOV_QS7DvV6KEf-Q0JaX2n_1B9wEDpjY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
