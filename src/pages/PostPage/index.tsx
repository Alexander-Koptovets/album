import React, { FC, useEffect } from 'react';
import { useParams } from "react-router-dom";
// @ts-ignore
import { Helmet } from 'react-helmet';

import { usePosts } from "../../hooks/api/usePosts";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const PostPage: FC = () => {
    const { postId } = useParams();
    const { post, getPost, clearPost } = usePosts();

    useEffect(() => {
        if (postId) {
            getPost(Number(postId));
        }

        return () => {
            clearPost();
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>User post</title>
                <meta name="description" content="user post" />
            </Helmet>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{post?.title}</TableCell>
                            <TableCell>{post?.body}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};