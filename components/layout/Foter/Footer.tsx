import { HeaderItem } from '@/types/menu';
import Link from 'next/link';
import React from 'react'

const Footer = () => {

    const headerData: HeaderItem[] = [
        { label: "خانه", href: "/" },
        { label: "برند", href: "/brands" },
        { label: "فروش", href: "/sell" },
        { label: "درباره ما", href: "/about" },
        { label: "تماس با ما", href: "/contact" },
    ];

    return (
        <footer className={`fixed bottom-0 z-40 w-full
         pb-5 transition-all duration-300 bg-white shadow-none py-6`}>
            <nav>
                <ul className="flex space-x-4">
                    {headerData.map((item, index) => (
                        <Link key={index} href={item.href} className="text-gray-700 hover:text-gray-900">      {item.label}</Link>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer