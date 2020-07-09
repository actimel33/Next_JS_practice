import Head from 'next/head';
import Link from 'next/link';
import {
    nav_container,
    main_container
}           from './MainLayout.module.css';

export function MainLayout({children, title = 'Next_JS App!'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course!</title>
            </Head>

            <nav className={nav_container}>
                <p>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </p>
                <p>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </p>
                <p>
                    <Link href='/posts'>
                        <a>Posts</a>
                    </Link>
                </p>
            </nav>
            <main className={main_container}>
                {children}
            </main>
        </>
    );
}