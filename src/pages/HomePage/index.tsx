import React, { FC, useEffect, useMemo, useState } from 'react';
// @ts-ignore
import { Helmet } from 'react-helmet';

import { useUsers } from "../../hooks/api/useUsers";

import { UserTable } from "../../components/UserTable";
import { Box, TextField } from "@mui/material";

import { IUser } from "../../types/response";

export const HomePage: FC = () => {
    const { users, getUsers } = useUsers();

    const [search, setSearch] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const filteredData: IUser[] = useMemo(() => {
        if (users.length === 0) {
            return users;
        }

        return users.filter(({ username }) =>
            username.toLowerCase().includes(search.toLowerCase()));
    }, [users, search]);

    useEffect(() => {
        getUsers();
    }, []);

    if (users.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <Box component='div'>
            <Helmet>
                <title>User list</title>
                <meta name="description" content="user list" />
            </Helmet>
            <TextField
                label="Filter by username"
                value={search}
                onChange={handleSearch}
                placeholder="Filter by username"
            />
            <UserTable data={filteredData} />
        </Box>
    );
};