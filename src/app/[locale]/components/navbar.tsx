'use client';

import { usePathname } from '@/navigation';
import { Link } from '@/navigation';
    
const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
];
    
const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;

    return (
        <nav className="w-full flex justify-between items-center h-32">
            <ul className="flex space-x-10">
                { NavLinks.map((link) => 
                    <li key={link.id}>
                        <Link
                            href={link.path}
                            className={
                                isActive(link.path)
                                    ? 'underline decoration-blue-500 decoration-4'
                                    : ''
                            }
                        >
                            {link.name}
                        </Link>
                    </li>
                )}
            </ul>

            <div className="flex space-x-10">
                <Link href={pathname} locale="en">
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
                </Link>
                <Link href={pathname} locale="pl">
                    🇫🇷 Polski
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;