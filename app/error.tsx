'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import warningImg from '@/public/assets/warning.jpg';

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-red-100 via-white to-red-50 flex justify-center items-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

            <div className="z-10 flex flex-col items-center p-8 bg-white/80 border border-red-300 rounded-3xl shadow-2xl max-w-md text-center space-y-4 animate-fade-in">
                <Image
                    className="rounded-2xl shadow-md"
                    src={warningImg}
                    alt="خطای هشدار"
                    width={300}
                    height={300}
                />

                <h2 className="text-2xl font-bold text-red-700">خطایی رخ داده است</h2>

                <p className="text-sm text-gray-800">
                    {error.message}
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-2 px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow"
                >
                    تلاش مجدد
                </button>
            </div>
        </div>
    );
}
