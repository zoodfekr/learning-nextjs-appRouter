// app/not-found.tsx

import Image from 'next/image'
import Link from 'next/link'
import errorImg from '@/public/assets/404.jpg'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center border ">
            <div className="max-w-md w-full">
                <Image
                    src={errorImg}
                    alt="404 - صفحه پیدا نشد"
                    className="rounded-2xl shadow-md"
                    priority
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-6">صفحه‌ای که دنبالش بودید پیدا نشد</h1>
                <p className="text-gray-600 mt-2">ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.</p>
                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    )
}
