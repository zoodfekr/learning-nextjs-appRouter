'use client'

import React from 'react'

const SubmitButton = ({ pending }: { pending: boolean }) => {


    return (
        <button
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-800 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-900 transition"
            type="submit"
        >


            {pending ? "درحال انجام" : ' ورود'}

        </button>
    )
}

export default SubmitButton