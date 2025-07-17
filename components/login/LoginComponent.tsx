'use client'

import React, { useActionState, useEffect } from 'react'
import SubmitButton from './partials/SubmitButton';
import { authFunction } from '@/service/auth';
import { AuthActionSchema } from '@/types/login';
import GoogleLoginComponent from './partials/GoogleLoginComponent';


const LoginComponent = () => {

    const [state, action, pending] = useActionState<AuthActionSchema, FormData>(authFunction, {
        success: false,
        message: '',
        errors: { phone: '', password: '' }
    })


    useEffect(() => {
        console.log('state', state);
    }, [state])

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in to your account</h2>

                <div className='flex justify-center items-center'>
                    {state.success ? <p className='text-green-500 text-sm'>عملیات موفق</p> : <p className='text-red-500 text-sm'>{state?.message}</p>}
                </div>


                <form className="space-y-6" action={action}>

                    {/* شماره تلفن */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input name='Phone' type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-800" placeholder="Enter your phone number" />
                        {!state.success && state.errors?.phone ? <span className='text-red-500 text-sm'>*{state.errors?.phone}</span> : null}
                    </div>

                    {/* رمز عبور */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input name='password' type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-800" placeholder="Enter your password" />
                        {!state.success && state.errors?.password ? <span className='text-red-500 text-sm'>*{state.errors?.password}</span> : null}
                    </div>

                    {/* مرا به خاطر بسپار */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input name='remember' id="rememberme" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="rememberme" className="ml-2 block text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <SubmitButton pending={pending}></SubmitButton>

                    <GoogleLoginComponent></GoogleLoginComponent>
                    <button
                        className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-red-600 transition mb-2"
                        type="button"
                    >
                        <i className="fab fa-google"></i> Sign in with Google
                    </button>
                </form>



            </div>
        </section>
    )
}

export default LoginComponent