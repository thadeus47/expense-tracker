import { createClient } from "@supabase/supabase-js";

export const createServerClient = () => {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  // console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  // console.log("Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return client;
};