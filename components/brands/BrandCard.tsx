import React from 'react';
import { useAverageColor } from '../common/hooks/useAverageColor';
import Image from 'next/image';
import brandType from '@/types/brans_type';
import Paper_hoc from '../common/HOC/Paper_hoc';

const BrandCard = ({ brand }: { brand: brandType }) => {


    const color = useAverageColor(brand.logo.src); // یا brand.logo اگر فقط رشته URL است

    return (
        <Paper_hoc color={color}>

            <div
                className="relative overflow-hidden rounded-xl p-4 transition-all duration-300 "
            // style={{ boxShadow: color ? `0  10px 30px -5px ${color}` : '0 4px 12px rgba(0, 0, 0, 0.1)' }}
            >



                <div className="w-24 h-24 mb-4 flex items-center justify-center mx-auto">
                    <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={96}
                        height={96}
                        className="object-contain rounded-full"

                    />
                </div>

                <h2 className="text-lg font-bold text-center mb-2">{brand.name}</h2>
                <p className="text-gray-700 text-sm text-center mb-1">تاسیس: {brand.founded}</p>
                <p className="text-gray-500 text-xs text-center">{brand.country}</p>


            </div>
        </Paper_hoc >
    );
};

export default BrandCard;
