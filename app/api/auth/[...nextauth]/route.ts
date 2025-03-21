import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // Explicitly set JWT (default without adapter)
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub; // Use sub from JWT as user ID
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Set sub on sign-in
      }
      return token;
    },
  },
});

export const { GET, POST } = handlers;