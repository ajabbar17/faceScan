"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSetActive = (page) => {
        setActive(page);
        setMenuOpen(false); // Close the menu when an item is selected
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const router = useRouter();
    const handleClick=()=>{
      router.push('/login')
    }

    return (
        <nav className="flex justify-between items-center py-0 px-5 bg-white shadow-md">
            {/* Logo on the left */}
            <div className="text-xl font-bold flex-shrink-0">
                <img src="/Logo.png" alt="Logo" className="h-20" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 flex-grow justify-center">
                <li>
                    <Link href="/dashboard">
                        <div
                            className={`cursor-pointer ${
                                active === 'Dashboard' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('Dashboard')}
                        >
                            Dashboard
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        <div
                            className={`cursor-pointer ${
                                active === 'Users' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('Users')}
                        >
                            Users
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/documents">
                        <div
                            className={`cursor-pointer ${
                                active === 'Documents' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('Documents')}
                        >
                            Documents
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/reports">
                        <div
                            className={`cursor-pointer ${
                                active === 'Reports' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('Reports')}
                        >
                            Reports
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/userprofile">
                        <div
                            className={`cursor-pointer ${
                                active === 'User Profile' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('User Profile')}
                        >
                            User Profile
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/contactus">
                        <div
                            className={`cursor-pointer ${
                                active === 'Contact Us' ? 'border-b-2 border-orange-500' : ''
                            } hover:text-orange-500 transition duration-300`}
                            onClick={() => handleSetActive('Contact Us')}
                        >
                            Contact Us
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Login Button & Mobile Menu Icon */}
            <div className="flex items-center space-x-4">
                <Link href="/login">
                    <div className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer">
                        Login
                    </div>
                </Link>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-5 space-y-4 z-50">
                    <li>
                        <Link href="/dashboard">
                            <div
                                className={`cursor-pointer ${
                                    active === 'Dashboard' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('Dashboard')}
                            >
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users">
                            <div
                                className={`cursor-pointer ${
                                    active === 'Users' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('Users')}
                            >
                                Users
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/documents">
                            <div
                                className={`cursor-pointer ${
                                    active === 'Documents' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('Documents')}
                            >
                                Documents
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/reports">
                            <div
                                className={`cursor-pointer ${
                                    active === 'Reports' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('Reports')}
                            >
                                Reports
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/userprofile">
                            <div
                                className={`cursor-pointer ${
                                    active === 'User Profile' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('User Profile')}
                            >
                                User Profile
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactus">
                            <div
                                className={`cursor-pointer ${
                                    active === 'Contact Us' ? 'border-b-2 border-orange-500' : ''
                                } hover:text-orange-500 transition duration-300`}
                                onClick={() => handleSetActive('Contact Us')}
                            >
                                Contact Us
                            </div>
                        </Link>
                    </li>
                    <li>
                            <button
                            onClick={handleClick}

                                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 cursor-pointer"
                            >
                                Login
                            </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}
