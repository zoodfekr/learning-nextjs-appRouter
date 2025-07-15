
'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const authFunction = async (FormData: FormData) => {

    const phone = FormData.get('Phone')
    const password = FormData.get('password')
    // const remember = FormData.get('remember')

    const response = await axios.post('https://ecomadminapi.azhadev.ir/api/auth/login', { phone, password, remember: 0 })

    if (response.status == 200) {
        const token = response.data.token;
        (await cookies()).set('myApp_token', token);
        redirect("/")
    }
}