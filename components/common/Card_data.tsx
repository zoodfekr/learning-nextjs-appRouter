import { card_data_prop_type } from '@/types/Card_data_type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card_data = ({ data }: { data: card_data_prop_type }) => {
    return (
        <div
            key={data.id}
            className="relative bg-stone-400/50 shadow-md hover:shadow-xl p-5 border border-gray-400 rounded-2xl transition-all duration-300"
        >
            <Image
                src={data?.img ?? ''}
                // width={100}
                // height={100}
                style={{ width: "100%", height: "200px" }}
                alt={`picture of ${data.brand} ${data.model}`}
                className='rounded'
            />

            <div className='mt-3'>
                <h2 className="mb-2 font-bold text-gray-800 text-xl">
                    {data.brand} {data.model} ({data.year})
                </h2>
                <p className="mb-1 text-white-600">🛠️ وضعیت: {data.status}</p>
                {/* <p className="mb-1 text-white-600">🎨 رنگ: {data.color}</p> */}
                <p className="mb-1 text-white-600">🏁 کارکرد: {data.mileage.toLocaleString()} کیلومتر</p>
                <p className="mb-1 text-white-600">⛽ سوخت: {data.fuelType}</p>
                <p className="mb-1 text-white-600">⚙️ گیربکس: {data.transmission}</p>
                <p className="mb-1 text-white-600">🧰 موتور: {data.engine}</p>
                <p className="mt-3 font-semibold text-white-400">
                    💰 قیمت: {data.price.toLocaleString()} تومان
                </p>

            </div>


            <div className='flex justify-end mt-3'>
                <Link href={`cars/${data.id}`}> مشاهده</Link>
            </div>
        </div>
    )
}

export default Card_data