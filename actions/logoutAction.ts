"use server";

import { signOut } from "@/auth";


export const LogoutAction = async () => {
    await signOut()
}