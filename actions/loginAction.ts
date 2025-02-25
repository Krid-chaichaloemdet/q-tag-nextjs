"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { error } from "console";
import { prisma } from "@/prisma/prisma";

export const loginAction = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.parse(data);
  if (!validatedData) {
    return { error: "Inavlid input data" };
  }
  const { email, password } = validatedData;

  const userExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!userExists || !userExists?.password || !userExists?.email) {
    return { error: "User not found" };
  }

  try {
    await signIn('credentials', {
        email: userExists.email,
        password: password,
        redirectTo: '/user/profile'
    })
  } catch (error) {
    if(error instanceof AuthError) {
        switch (error.type) {
            case "CredentialsSignin":
            return { error: "Invalid credentials"};
            default:
                return { error: "Please confirm your email address"};
        }
    }
    throw error
  }

  return { success: "User logged in successfully!"}
};
