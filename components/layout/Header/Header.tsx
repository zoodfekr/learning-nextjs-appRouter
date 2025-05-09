import { HeaderItem } from '@/types/menu';
import Link from 'next/link';
import React, { JSX } from 'react';
import HeaderLinks from './HeaderLinks';

import homeIcon from '@/public/assets/icons/home.png'
import aboutIcon from '@/public/assets/icons/about.png'
import brandIcon from '@/public/assets/icons/brand.png'
import buyIcon from '@/public/assets/icons/buypng.png'
import contactIcon from '@/public/assets/icons/contact.png'
import Image, { StaticImageData } from 'next/image';



const Header = () => {


    const Image_generator = ({ src }: { src: StaticImageData }): JSX.Element => {
        return (
            <Image
                src={src}
                width={30}
                height={30}
                alt="header_icons"
            />
        );
    };

    const headerData: HeaderItem[] = [
        { id: 1, label: "خانه", href: "/", icon: <Image_generator src={homeIcon} /> },
        { id: 2, label: "برند", href: "/brands", icon: <Image_generator src={brandIcon} /> },
        { id: 3, label: "فروش", href: "/sell", icon: <Image_generator src={buyIcon} /> },
        { id: 5, label: "درباره ما", href: "/about", icon: <Image_generator src={aboutIcon} /> },
        { id: 6, label: "تماس با ما", href: "/contact", icon: <Image_generator src={contactIcon} /> },
    ];

    return (
        <header className={`fixed top-0 z-40 w-full  border-red-500
            bg-gradient-to-r from-[rgba(13,13,15 , 0.8)] to-[rgba(36,36,41 , 0.8)]
         pb-5 transition-all duration-300 bg-stone-900 shadow-none py-6`}>
            <nav className=' flex justify-start px-5'>
                <ul className="flex space-x-4">
                    {headerData.map((item, index) => (
                        <HeaderLinks
                            label={item.label}
                            href={item.href}
                            key={index}
                            icon={item.icon}
                            id={item.id}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
