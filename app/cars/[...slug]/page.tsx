'use client'


import { fakeCars } from '@/api/fakeData_cars';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';



const CarInfo = () => {


    const params = useParams()
    const car = fakeCars.find((c) => c.id == params.slug);

    if (!car) return notFound();

    return (
        <div className="bg-white shadow mx-auto p-6 rounded-xl max-w-3xl">
            <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                className="rounded-md w-full h-auto"
                priority
            />
            <h1 className="mt-4 font-bold text-2xl">
                {car.brand} {car.model} ({car.year})
            </h1>
            <p className="mt-2 text-gray-600">
                {car.status === 'نو' ? 'خودروی صفر' : 'خودروی کارکرده'}
            </p>
            <ul className="space-y-2 mt-4 text-gray-800">
                <li><strong>رنگ:</strong> {car.color}</li>
                <li><strong>کارکرد:</strong> {car.mileage.toLocaleString()} کیلومتر</li>
                <li><strong>نوع سوخت:</strong> {car.fuelType}</li>
                <li><strong>گیربکس:</strong> {car.transmission}</li>
                <li><strong>حجم موتور:</strong> {car.engine}</li>
                <li><strong>قیمت:</strong> {car.price.toLocaleString()} تومان</li>
            </ul>
        </div>
    );
}
export default CarInfo
