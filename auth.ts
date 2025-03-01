import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/prisma";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { getAccountByUserId } from "./data/account";


export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({ user, account}) {
        if( account?.provider !== 'credentails') {
            return true
        }
        const existingUser = await getUserById(user.id ?? '')
        if(!existingUser?.emailVerified) {
            return false
        }
        return true
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOauth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.image = existingUser.image;
      token.role = existingUser.role    
      return {
        ...token, role: existingUser?.role ,memberType: existingUser.memberType,
        credit: existingUser.credit, active : existingUser.active
      }
    },
    async session({ token, session }) {
      session.user = {
        ...session.user,
        // role: token.role,
        // credit: token.credit,
        // memberType: token.memberType,
        // active: token.active
      }
      return session
   
    },
  //   async redirect({ url, baseUrl }) {
  //   // Allows relative callback URLs
  //   if (url.startsWith("/")) return `${baseUrl}${url}`

  //   // Allows callback URLs on the same origin
  //   if (new URL(url).origin === baseUrl) return url

  //   return baseUrl
  // }
  },
});
