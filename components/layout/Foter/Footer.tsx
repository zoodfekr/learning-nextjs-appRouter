import React from 'react';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="bg-stone-800 py-8 text-white">
            <div className="mx-auto px-4 container">
                {/* بخش بالا: لینک‌های ناوبری */}
                <div className="flex md:flex-row flex-col justify-between items-center mb-6 pb-6 border-gray-600 border-b">
                    <div className="md:text-left text-center">
                        <h2 className="mb-2 font-bold text-2xl">خودروهای سورنا</h2>
                        <p className="text-sm">تنها نمایندگی رسمی در ایران</p>
                    </div>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex flex-wrap justify-center md:justify-start gap-4">
                            <li><Link href="/" className="hover:text-gray-400">خانه</Link></li>
                            <li><Link href="/brands" className="hover:text-gray-400">برند</Link></li>
                            <li><Link href="/sell" className="hover:text-gray-400">فروش</Link></li>
                            <li><Link href="/about" className="hover:text-gray-400">درباره ما</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400">تماس با ما</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* بخش پایین: اطلاعات تماس و شبکه‌های اجتماعی */}
                <div className="flex md:flex-row flex-col justify-between items-center" dir=''>
                    <div className="mb-4 md:mb-0 text-center md:text-right">
                        <p className="text-sm">آدرس: تهران، خیابان ولیعصر، پلاک 123</p>
                        <p className="text-sm">تلفن: 021-12345678</p>
                        <p className="text-sm">ایمیل: info@sorenacars.com</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FacebookIcon size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <XIcon size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <InstagramIcon size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;