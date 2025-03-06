import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import GoogleProvider from "next-auth/providers/google";

//exports essential authentication functions that will be used throughout the application:
export const { handlers, auth, signIn, signOut } = NextAuth({
  // configures Supabase as the database adapter for storing user sessions and authentication data.
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  }),
  // sets up Google OAuth authentication with credentials stored in environment variables.
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // callback enhances the session object by adding the user's ID from the database to the session information, making it available throughout the application.
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id; // Add user ID to session
      return session;
    },
  },
});


