import React, { FC, useEffect } from 'react';
import { useParams } from "react-router-dom";
// @ts-ignore
import { Helmet } from 'react-helmet';

import { useAlbums } from "../../hooks/api/useAlbums";

import { Photos } from "../../components/Photos";

export const PhotosPage: FC = () => {
    const { albumId } = useParams();
    const { photos, getPhotos, clearPhotos } = useAlbums();

    useEffect(() => {
        if (albumId) {
            getPhotos(Number(albumId));
        }

        return () => {
            clearPhotos();
        }
    }, []);

    if (photos.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>Photos</title>
                <meta name="description" content="photos" />
            </Helmet>
            <Photos photos={photos} />
        </>
    );
};