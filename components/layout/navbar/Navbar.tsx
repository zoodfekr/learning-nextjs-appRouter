import Link from "next/link";
import { navLinkData } from '@/setting/app'

const Navbar_components = () => {


    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-bold text-gray-800">MyApp</div>
                    <div className="hidden md:flex space-x-6">
                        {navLinkData.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 transition duration-200 capitalize"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar_components;