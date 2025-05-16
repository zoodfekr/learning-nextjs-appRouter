'use client'

import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import { fakeCars } from '@/api/fakeData_cars';
import BackgroundDiv_hoc from '@/components/common/HOC/BackgroundDiv_hoc';
import wallbg from '@/public/assets/blackwall.jpg'
import Paper_hoc from '@/components/common/HOC/Paper_hoc';




const CarInfo = () => {


    const params = useParams()
    const car = fakeCars.find((c) => c.id == params.slug);

    if (!car) return notFound();

    return (

        <BackgroundDiv_hoc background={wallbg.src} className=''>

            <Paper_hoc className="flex flex-col md:flex-row m-2 md:m-5 p-2 md:p-5 gap-4 md:gap-8">




                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image
                        src={car.img}
                        alt={`${car.brand} ${car.model}`}
                        className="rounded-md w-full max-w-xs md:max-w-2xl h-auto"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2 px-0 md:px-3 flex flex-col justify-center items-start">
                    <h1 className="mt-4 md:mt-0 font-bold text-xl md:text-2xl">
                        {car.brand} {car.model} ({car.year})
                    </h1>
                    <p className="mt-2 text-white-600">
                        {car.status === 'نو' ? 'خودروی صفر' : 'خودروی کارکرده'}
                    </p>
                    <ul className="space-y-2 mt-4 text-white-800 text-sm md:text-base">
                        <li><strong>رنگ:</strong> {car.color}</li>
                        <li><strong>کارکرد:</strong> {car.mileage.toLocaleString()} کیلومتر</li>
                        <li><strong>نوع سوخت:</strong> {car.fuelType}</li>
                        <li><strong>گیربکس:</strong> {car.transmission}</li>
                        <li><strong>حجم موتور:</strong> {car.engine}</li>
                        <li><strong>قیمت:</strong> {car.price.toLocaleString()} تومان</li>
                    </ul>
                </div>

            </Paper_hoc>




        </BackgroundDiv_hoc >
    );
}
export default CarInfo
