import Image from 'next/image';
import Link from 'next/link';

import { fakeCars } from '@/api/fakeData_cars';
import backgroundImage from '@/public/assets/lamborghini_darkwallpaper.jpg'
import Mini_card from '@/components/common/Mini_card';
import BackgroundDiv_hoc from '@/components/common/HOC/BackgroundDiv_hoc';
import { Metadata } from 'next';

import { app_data } from '@/app_data';



export const metadata: Metadata = {
  title: `${app_data.siteName} | خودروها`,
  description: `${app_data.siteNameL}`,
};

export default function CarsPage() {
  return (

    <BackgroundDiv_hoc background={backgroundImage.src} className='max-w-6xl p-5'>

      <h1 className="mb-8 font-extrabold text-gray-800 dark:text-white text-3xl">
        لیست خودروها
      </h1>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {fakeCars.map((car) => (
          <Mini_card data={car} key={car.id} />
        ))}
      </div>

    </BackgroundDiv_hoc>

  );
}
