'use server'

import { serverUrl } from "@/setting/app"
import { revalidateTag } from "next/cache"

export const Post_userData_action = async ({ email, username }: { email: string, username: string }) => {

    const response = await fetch(`${serverUrl}/users`, {
        method: 'POST',
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ email, username })
    })

    revalidateTag('users')
    return { success: true, message: 'کاربر افزوده شد', response: response }
}