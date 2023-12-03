import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import axiosInstance from "@/app/api/axiosInstance";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  // session: {
  //   strategy: "jwt"
  // },

  pages: {
    signIn: "/auth/signin"
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com"
        },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials: any) {
        const { email, password } = credentials;

        const res = await axiosInstance.post("/auth/login", {
          email,
          password
        });

        if (res.status === 200) {
          return res.data;
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      console.log("jwt callback ", { token, user, account });

      if (account && account.type === "credentials") {
        token.user = user;
        token.accessToken = user.accessToken;
      }

      return token;
    },

    async session({ session, token }) {
      console.log("session callback ", { session, token });

      session.accessToken = token.accessToken;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
