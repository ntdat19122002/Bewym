import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Menu } from '@headlessui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import 'tw-elements';

export default function Layout({ title, children }) {
    const router = useRouter()
    const logoutClickHandler = () => {
        // Cookies.remove('cart');
        sessionStorage.clear();      
        signOut({ callbackUrl: '/login' });
      };
    const { status, data: session } = useSession();
    return (
        <>
            <Head>
                <title>{title ? title + ' - Bewym' : 'Bewym'}</title>
                <meta name="description" content="Bewym" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
                <link rel="manifest" href="/icon/site.webmanifest" />
            </Head>
            <ToastContainer position="bottom-center" limit={1} />
            <div className="flex min-h-screen flex-col justify-between ">
                <header>
                    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                        <Link href="/" className="text-lg font-bold">
                            BEWYM
                        </Link>
                        <div>
                            <Link href="/question" className="p-2">
                            </Link>
                            <Link href="/user" className="p-2">
                                Users
                            </Link>
                            <Link href="/login" className="p-2">
                                {status === 'loading' ? (
                                    'Loading'
                                ) : session?.user ? (
                                    <Menu as="div" className="relative inline-block">
                                        <Menu.Button className="text-blue-600">
                                            {session.user.name}
                                        </Menu.Button>
                                        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                                            <Menu.Item>
                                                <DropdownLink className="dropdown-link" href="/profile">
                                                    Profile
                                                </DropdownLink>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <DropdownLink
                                                    className="dropdown-link"
                                                    href="/order-history"
                                                >
                                                    Order History
                                                </DropdownLink>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <a
                                                    className="dropdown-link"
                                                    href="#"
                                                    onClick={logoutClickHandler}
                                                >
                                                    Logout
                                                </a>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>
                                ) : (
                                    <Link href="/login" className="p-2">
                                        Login
                                    </Link>
                                )}
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    <p>Copyright © 2022 Bewym</p>
                </footer>
            </div>
        </>
    );
}