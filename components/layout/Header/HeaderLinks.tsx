"use client";

import { HeaderItem } from '@/types/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderLinks = ({ label, href, icon }: HeaderItem) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative text-lg hover:text-gray-500  flex flex-row gap-1
                ${isActive ? 'text-red-500' : 'text-gray-200'}`}
        >

            {icon}
            {label}

            <span
                className={`absolute left-0 bottom-0 h-[2px] bg-red-500 rounded-full transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0'}`}
            ></span>
        </Link>
    );
};

export default HeaderLinks;