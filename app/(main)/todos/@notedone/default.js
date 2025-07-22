import Link from 'next/link'
import React from 'react'

const Notedone = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-2xl shadow-lg border border-yellow-300 animate-fade-in">
      <h2 className="text-2xl font-bold text-yellow-700 mb-2 drop-shadow">کارهای یادداشت‌شده</h2>
      <p className="text-gray-700 text-base mb-4">در این بخش، کارهایی که یادداشت کرده‌اید نمایش داده می‌شوند.</p>
      <Link href="/todos/important" className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow transition-colors duration-200 font-semibold">
        نمایش کارهای مهم
      </Link>
    </div>
  )
}

export default Notedone