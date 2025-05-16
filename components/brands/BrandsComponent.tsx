"use client"

import React from 'react';
import { brandsData } from '@/api/fakeData_brands';
import brandBackground from '@/public/assets/speedometer.jpg';
import BackgroundDiv_hoc from '../common/HOC/BackgroundDiv_hoc';
import BrandCard from './BrandCard';

const BrandsComponent = () => {
    return (
        <BackgroundDiv_hoc background={brandBackground.src} className="max-w-6xl">

            <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">

                {brandsData.map((brand) => (<BrandCard key={brand.id} brand={brand} />))}

            </div>


        </BackgroundDiv_hoc>
    );
};

export default BrandsComponent;
