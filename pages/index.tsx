import Link         from 'next/link';
import Head         from 'next/head';
import {MainLayout} from '../components/MainLayout';

export default function Index() {
    return (
        <MainLayout title={'Hello Next_JS!'}>
            <h1>Hello Next.JS!</h1>
        </MainLayout>
    );
}