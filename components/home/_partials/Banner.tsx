import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'

import bannerImg from '@/public/assets/banner2.png';



const myfont = localFont({
    src: '../../../public/fonts/ttf/B_Titr_Bold.ttf',
    variable: '--font-iran-sans', // متغیر CSS برای فونت
});

const Banner = () => {




    return (
        <div className="relative flex justify-center items-center bg-gray-900 overflow-hidden" style={{ height: "550px" }}>
            {/* Background Image */}
            <Image
                src={bannerImg}
                alt="Banner Image"
                className="absolute inset-0 opacity-70 w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="z-10 relative bg-opacity-50 shadow-lg p-6 rounded-lg text-white text-center">
                <h1 className={`mb-4 font-bold text-4xl ${myfont.className}`}>خودروهای سورنا</h1>
                <p className={`text-lg ${myfont.className}`}>تنها نمایندگی رسمی در ایران</p>
            </div>
        </div>
    );
};

export default Banner;