import Router                from 'next/router';
import {useState, useEffect} from 'react';
import {MainLayout}          from '../../components/MainLayout';
import Link                  from 'next/link';
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/Post";

interface PostPageProps {
    post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {
    const [post, setPost] = useState(serverPost);
    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${Router.query.id}`);
            const data = await response.json();
            setPost(data);
        }

        if (!serverPost) {
            load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout>

                <p>Loading...</p>
            </MainLayout>
        );
    }
    return (
        <MainLayout>
            <h1>Post: {post.title}</h1>
            <p>Post: {post.body}</p>
            <Link href={'/posts'}><a>Back to Posts!</a></Link>
        </MainLayout>
    );
}

/*
export const getServerSideProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await response.json();
    return {
        props: {
            post
        }
    };
}
*/

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async (ctx: PostNextPageContext) => {
    console.log(ctx.req);
    if (!ctx.req) {
        return {
            post: null
        };
    }
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post: MyPost = await response.json();

    return {
        post
    };
};
