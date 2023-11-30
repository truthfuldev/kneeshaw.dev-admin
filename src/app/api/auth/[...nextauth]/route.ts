import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/signin"
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com"
        },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials: any, req: any) {
        console.log(credentials);

        let user = null;
        if (credentials.email === "truthfuldev@gmail.com") {
          user = {
            email: "truthfuldev@gmail.com",
            password: "123456"
          };
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, session }) {
      // the processing of JWT occurs before handling sessions.
      console.log("jwt callback ", { token, user, session });

      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
        token.role = user.role;
        token.id = user.id;
      }

      return token;
    },

    //  The session receives the token from JWT
    async session({ session, token, user }) {
      console.log("session callback ", { token, user, session });

      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken as string,
          refreshToken: token.refreshToken as string,
          role: token.role,
          id: token.id
        },
        error: token.error
      };
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
