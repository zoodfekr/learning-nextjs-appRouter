'use server'

import { serverUrl } from "@/setting/app"
import { revalidateTag } from "next/cache"

export const delete_userData_action = async ({ id }: { id: number }) => {

    await fetch(`${serverUrl}/users/${id}`, {
        method: 'DELETE',
        headers: { "content-Type": "application/json" },
    })
    revalidateTag('users')
    return { success: true, message: "کاربر با موفقیت حذف شد" }
}