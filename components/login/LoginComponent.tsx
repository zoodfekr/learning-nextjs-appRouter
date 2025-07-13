import React from 'react'


type LoginComponentProps = {
    actionFunc: (formData: FormData) => Promise<void>;
};

const LoginComponent = ({ actionFunc }: LoginComponentProps) => {




    return (

        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in to your account</h2>


                <form className="space-y-6" action={actionFunc}>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input name='Phone' type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input name='password' type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input name='remember' id="rememberme" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="rememberme" className="ml-2 block text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition" type="submit">
                        Login
                    </button>
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <span className="mx-3 text-gray-400">or</span>
                        <div className="flex-grow h-px bg-gray-200"></div>
                    </div>
                    <button
                        className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-red-600 transition mb-2"
                        type="button"
                    >
                        <i className="fab fa-google"></i> Sign in with Google
                    </button>
                    <button
                        className="w-full flex items-center justify-center gap-2 py-3 bg-blue-800 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-900 transition"
                        type="button"
                    >
                        <i className="fab fa-facebook-f"></i> Sign in with Facebook
                    </button>
                </form>



            </div>
        </section>
    )
}

export default LoginComponent