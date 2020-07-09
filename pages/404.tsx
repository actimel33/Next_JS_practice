import Link         from 'next/link';
import {MainLayout} from '../components/MainLayout';

import {error} from '../styles/error.module.css';

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={error}>Error 404</h1>
            <p>
                Please go to <Link href='/'><a>Main</a></Link>
            </p>
        </MainLayout>
    );
};

