import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

export default function Layout({ title, children }) {
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
                            <Link href="/user" className="p-2">
                                Users
                            </Link>
                            <Link href="/login" className="p-2">
                                {status === 'loading' ? (
                                    'Loading'
                                ) : session?.user ? (
                                    session.user.name
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
                    <p>Copyright © 2022 Amazona</p>
                </footer>
            </div>
        </>
    );
}