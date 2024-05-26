import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signin } from "../../user";

  
  export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "jsmith",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            console.log("credentials", credentials)
          if (!credentials?.username || !credentials?.password) return null;
          const { username, password } = credentials;
          const response = await signin({
            email: username,
            password: password
          })
          console.log("response", response)
          if (response.status == 401) {
            return null;
          }
          const user = response.data;
          console.log("user actio", user)
          return user;
        },
      }),
    ],
    
    callbacks: {  
      async jwt({ token, user }) {
        return user ? { ...token, ...user } : token;  
      },
      async session({ token, session }) {
        session.user = token.user;
        session.backendTokens = token.backendTokens;
  
        return session;
      },
    },
    pages: {
        signIn: "/signin",
        signOut: "/signout",
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
  