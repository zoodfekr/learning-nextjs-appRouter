'use server'

import { loginSchema } from "@/validation/login_form_schema"
import axios from "axios"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"



export const authFunction = async (prevState: AuthState, FormData: FormData): Promise<AuthState> => {

    const rawData = { phone: FormData.get('Phone'), password: FormData.get('password') }

    const parse = loginSchema.safeParse(rawData)

    if (!parse.success) {
        // const errors = Object.values(parse.error.flatten().fieldErrors) ?? 'اطلاعات نامعتبر است'
        const errorsvalue = parse?.error.flatten().fieldErrors ?? 'اطلاعات نامعتبر است'
        return {
            success: false,
            message: '',
            errors: {
                phone: errorsvalue?.phone ?? null,
                password: errorsvalue?.password ?? null,
            }
        }
    }

    const { phone, password } = parse.data


    const response = await axios.post('https://ecomadminapi.azhadev.ir/api/auth/login', { phone, password, remember: 0 })

    if (response.status == 200) {
        const token: string = response.data.token;
        (await cookies()).set('myApp_tokenValue', token);
        redirect("/")
    }

    if (response.status == 202) return { success: false, message: 'شماره وارد شده نامعتبر است' }
    if (response.status == 203) return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است' }
    return { success: false, message: 'خطا در ورود به سایت' }
}
