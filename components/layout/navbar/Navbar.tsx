import Link from "next/link";
import ThemeSwich from "./partials/ThemeSwich";

const Navbar_components = () => {

    const navLinkData = [
        { id: 1, title: 'home', href: '/' },
        { id: 2, title: 'post', href: '/posts' },
        { id: 3, title: 'todos', href: '/todos' },
        { id: 4, title: 'users', href: '/users' },
        { id: 5, title: 'comments', href: '/comments' },
        { id: 6, title: 'login', href: '/login' },
    ];


    return (
        <nav className="sticky top-0 bg-stone-100 dark:bg-stone-800 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-bold text-gray-800 dark:text-gray-400">MyApp</div>
                    <div className="hidden md:flex space-x-6">
                        {navLinkData.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition duration-200 capitalize"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>


                    <ThemeSwich />
                </div>
            </div>
        </nav>
    );
};

export default Navbar_components;