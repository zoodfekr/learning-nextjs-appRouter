import { z } from 'zod'


export const loginSchema = z.object({
    phone: z.string().min(1, 'شماره تلفن الزامی است'),
    password: z.string().min(1, 'رمز عبور الزامی است'),
})
