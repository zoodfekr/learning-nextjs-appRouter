'use server'

import { serverUrl } from "@/setting/app"
import { revalidatePath } from "next/cache"

export const Post_userData_action = async ({ email, username }: { email: string, username: string }) => {

    await fetch(`${serverUrl}/users`, {
        method: 'POST',
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ email, username })
    })

    revalidatePath('/users')
}