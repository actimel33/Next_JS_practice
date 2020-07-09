import Router       from 'next/router';
import {MainLayout} from '../../components/MainLayout';

export default function About({title}) {

    return (
        <MainLayout>
            <h1>{title}</h1>

            <button onClick={() => Router.push('/')}>Go home!</button>
        </MainLayout>
    );
}

export const getServerSideProps = async (ctx) => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();
    return {
        props: {
            title: data.title
        }, // will be passed to the page component as props
    }
}


