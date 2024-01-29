import React, { FC, useEffect } from 'react';
import { useParams } from "react-router-dom";
// @ts-ignore
import { Helmet } from 'react-helmet';

import { usePosts } from "../../hooks/api/usePosts";

import { PostTable } from "../../components/PostTable";

export const PostsPage: FC = () => {
    const { id } = useParams();
    const { posts, getPostsByUsers, clearPosts } = usePosts();

    useEffect(() => {
        if (id) {
            getPostsByUsers(Number(id));
        }

        return () => {
            clearPosts();
        }
    }, []);

    if (posts.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>Posts</title>
                <meta name="description" content="posts" />
            </Helmet>
            <PostTable posts={posts} />
        </>
    );
};