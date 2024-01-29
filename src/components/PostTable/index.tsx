import React, { FC } from 'react';
import { Link } from "react-router-dom";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import { IPost } from "../../types/response";

interface IProps {
    posts: IPost[];
}

export const PostTable: FC<IProps> = ({ posts }) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell>Post Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map(({ id, userId, title, body }) => (
                        <TableRow key={id}>
                            <TableCell>{userId}</TableCell>
                            <TableCell>{id}</TableCell>
                            <TableCell>{title}</TableCell>
                            <TableCell>
                                <Link to={`/post/${id}`}>{body}</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};