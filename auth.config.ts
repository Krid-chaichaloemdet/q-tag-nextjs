import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig} from "next-auth"
import { LoginSchema } from "./schemas"
import { prisma } from "./prisma/prisma"
// import bcrypt from "bcryptjs"

export default { 
    providers :[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials){
                const validatedDate = LoginSchema.safeParse(credentials)
                if(!validatedDate.success) return null;
                const { email,} = validatedDate.data
                 const user = await prisma.user.findFirst({
                    where: {
                        email: email
                    }
                 })
                 if(!user || !user.password || !user.email){
                    return null
                 }
                //  const passwordMatch = await bcrypt.compare(password, user.password)
                 if(user) {
                    return user
                 }
                 return null
            }
        })
    ]
} satisfies NextAuthConfig