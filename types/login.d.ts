export type AuthActionSchema = {
    success: boolean,
    message: string,
    errors: {
        phone: string | string[] | null,
        password: string | string[] | null
    }
}