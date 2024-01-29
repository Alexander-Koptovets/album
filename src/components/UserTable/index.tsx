import React, { FC, useState, useMemo } from 'react';
import { Link } from "react-router-dom";

import { IUser } from "../../types/response";
import { ESort } from "../../enums";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';

interface IProps {
  data: IUser[];
};

export const UserTable: FC<IProps> = ({ data }) => {
    const [sortDirection, setSortDirection] =
        useState<ESort>(ESort.ASC);

    const handleSort = (): void => {
        const newSortDirection = sortDirection === ESort.ASC ? ESort.DESC : ESort.ASC;
        setSortDirection(newSortDirection);
    };

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => {
            const fieldA = a.username.toLowerCase();
            const fieldB = b.username.toLowerCase();

            if (sortDirection === ESort.ASC) {
                return fieldA.localeCompare(fieldB);
            } else {
                return fieldB.localeCompare(fieldA);
            }
        });
    }, [data, sortDirection]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>
                            Username
                            <Button onClick={handleSort}>
                                {sortDirection === 'asc' ? '▼' : '▲'}
                            </Button>
                        </TableCell>
                        <TableCell>Posts</TableCell>
                        <TableCell>Albums</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map(({ id, name, username }) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{username}</TableCell>
                            <TableCell>
                                <Link to={`/posts/${id}`}>{username} posts</Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/albums/${id}`}>{username} albums</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};