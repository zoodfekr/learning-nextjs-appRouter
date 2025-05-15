import Image from 'next/image';
import Link from 'next/link';

import { fakeCars } from '@/api/fakeData_cars';
import backgroundImage from '@/public/assets/lamborghini_darkwallpaper.jpg'
import Mini_card from '@/components/common/Mini_card';
export default function CarsPage() {
  return (

    <div
      className='w-full h-full'
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "50%",
        backgroundPositionY: "50%",
        backgroundAttachment: "fixed"
      }}>


      <div className="mx-auto px-4 py-10 max-w-6xl">
        <h1 className="mb-8 font-extrabold text-gray-800 dark:text-white text-3xl">
          لیست خودروها
        </h1>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {fakeCars.map((car) => (
            <Mini_card data={car} key={car.id} />
          ))}
        </div>
      </div>


    </div>

  );
}
