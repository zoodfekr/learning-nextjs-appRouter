import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mini_card = ({ data }: { data: card_data_prop_type }) => {
    return (
        <Link
            key={data.id}
            href={`/cars/${data.id}`}
            className="group relative flex flex-col bg-white dark:bg-stone-800 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300"
        >
            <div className="overflow-hidden">
                <Image
                    src={data.img}
                    alt={`${data.brand} ${data.model}`}
                    width={400}
                    height={250}
                    className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex flex-col flex-1 gap-1 p-4">
                <h2 className="font-bold text-gray-900 dark:text-white text-xl">
                    {data.brand} {data.model}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">{data.year}</p>
                <div className="mt-auto pt-4">
                    <p className="font-bold text-green-600 dark:text-green-400 text-lg">
                        {data.price.toLocaleString()} تومان
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Mini_card