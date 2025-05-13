import { HeaderItem } from '@/types/menu';
import React from 'react';
import HeaderLinks from './HeaderLinks';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GridViewIcon from '@mui/icons-material/GridView';


const Header = () => {


    const headerData: HeaderItem[] = [
        { id: 1, label: "خانه", href: "/", icon: <HomeIcon sx={{ width: "20px" }} /> },
        { id: 2, label: "برند", href: "/brands", icon: <GridViewIcon sx={{ width: "20px" }} /> },
        { id: 3, label: "فروش", href: "/sell", icon: <ShoppingCartIcon sx={{ width: "20px" }} /> },
        { id: 5, label: "درباره ما", href: "/about", icon: <InfoIcon sx={{ width: "20px" }} /> },
        { id: 6, label: "تماس با ما", href: "/contact", icon: <ConnectWithoutContactIcon sx={{ width: "20px" }} /> },
    ];

    return (
        <header
            className={` top-0 z-40 w-full  
             border-red-500   transition-all
              duration-300 shadow-none absolute`}
              >

            <nav className='flex justify-start bg-gradient-to-r from-[rgba(13,13,15,0.7)] to-[rgba(36,36,41,0.7)] p-5'>
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
