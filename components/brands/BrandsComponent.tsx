import React from 'react';
import { brandsData } from '@/api/fakeData_brands';
import Image from 'next/image';
import Paper_hoc from '../common/HOC/Paper_hoc';
import brandType from '@/types/brans_type';
import brandBackground from '@/public/assets/speedometer.jpg'



const BrandsComponent = () => {
    return (

        <div
            style={{
                backgroundImage: `url(${brandBackground.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "50%",
                backgroundPositionY: "50%",
                backgroundAttachment: "fixed"
            }}
            className='flex justify-center items-center w-full '
        >

            <div className='w-full max-w-6xl'>


                <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 p-6 ">

                    {brandsData.map((brand: brandType) => (
                        <Paper_hoc key={brand.id}>




                            <div className=' relative overflow-hidden '>

                                <Image
                                    src={brand.logo}
                                    width={200}
                                    height={200}
                                    className='absolute -rotate-20 blur -z-10 top-0 left-0'
                                    alt="Picture of the author"
                                />

                                <div className="w-24 h-24 mb-4 flex items-center justify-center ">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={96}
                                        height={96}
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-lg font-bold mb-2">{brand.name}</h2>
                                <p className="text-gray-500 text-sm mb-1">تاسیس: {brand.founded}</p>
                                <p className="text-gray-400 text-xs">{brand.country}</p>
                            </div>
                        </Paper_hoc>
                    ))}


                </div>
            </div >
        </div>

    )
}

export default BrandsComponent

