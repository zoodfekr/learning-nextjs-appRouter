import React from 'react'
import Image from 'next/image'

import { fakeCars } from '@/api/fakeData_cars';
import homebg from '@/public/assets/homebg.jpg'
import Link from 'next/link';
import Card_data from '@/components/common/Card_data';


const CarCard = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${homebg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="relative gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 p-6"
        >

            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backdropFilter: 'blur(5px)',
                    background: 'rgba(0,0,0,0.7)', // اختیاری برای شفافیت بیشتر
                    zIndex: 0,
                }}
            />

            {fakeCars.map((car) => (

                <Card_data key={car.id} data={car} />

            ))
            }



        </div >
    )
}

export default CarCard