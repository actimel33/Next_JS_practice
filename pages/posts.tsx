import {useState, useEffect} from 'react';
import {MainLayout} from '../components/MainLayout';
import Link from 'next/link';
import {MyPost} from "../interfaces/Post";
import {NextPageContext} from "next";

interface PostsPageInterface {
    posts: MyPost

}

export default function Posts({posts: serverPosts}: PostsPageInterface) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout title={'Posts page'}>
                <p>...Loading</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout title={'Posts page'}>
            <h1>Hello Posts Page!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A in labore molestias nesciunt perspiciatis
                qui quia rem sapiente! Eaque itaque laboriosam mollitia quae quia rem sed soluta voluptate? Molestias,
                sint.
            </p>
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>
                                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                                    <a>
                                        {post.title}
                                    </a>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </MainLayout>
    );
}


/*export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts: MyPost[] = await response.json();

    return {
        props: {
            posts
        }
    };
}*/


Posts.getInitialProps = async (ctx: NextPageContext) => {
    if (!ctx.req) {
        return {
            posts: null
        };
    }
    const response = await fetch('http://localhost:4200/posts');
    const posts: MyPost[] = await response.json();

    return {
        posts
    };
};
