import { app_data } from '@/app_data';
import BrandsComponent from '@/components/brands/BrandsComponent'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: `${app_data.siteName} | برندها`,
    description: `${app_data.siteNameL}`,
};


const Brands = () => {
    return (
        <div>
            <BrandsComponent />
        </div>
    )
}

export default Brands