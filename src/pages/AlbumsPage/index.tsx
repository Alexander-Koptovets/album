import React, { FC, useEffect } from 'react';
import { useParams } from "react-router-dom";
// @ts-ignore
import { Helmet } from 'react-helmet';

import { useAlbums } from "../../hooks/api/useAlbums";

import { AlbumTable } from "../../components/AlbumTable";

export const AlbumsPage: FC = () => {
    const { userId } = useParams();
    const { albums, getAlbumsByUser } = useAlbums();

    useEffect(() => {
        if (userId) {
            getAlbumsByUser(Number(userId));
        }
    }, []);

    if (albums.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>Albums</title>
                <meta name="description" content="albums" />
            </Helmet>
            <AlbumTable albums={albums} />
        </>
    );
};