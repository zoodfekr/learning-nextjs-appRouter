
'use server'

export const autFuction = async (FormData: FormData) => {

    const Phone = await FormData.get('Phone')
    const password = await FormData.get('password')
    const remember = await FormData.get('remember')

    console.log('run auth func >>>>>', { Phone, password, remember });

}