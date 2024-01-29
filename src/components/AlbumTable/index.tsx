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

import { IAlbum } from "../../types/response";

interface IProps {
    albums: IAlbum[];
}

export const AlbumTable: FC<IProps> = ({ albums }) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell>Album Id</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albums.map(({ id, userId, title }) => (
                        <TableRow key={id}>
                            <TableCell>{userId}</TableCell>
                            <TableCell>{id}</TableCell>
                            <TableCell>
                                <Link to={`/photos/${id}`}>{title}</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};