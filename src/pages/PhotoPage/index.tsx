import React, { FC, useEffect } from 'react';
import { useParams } from "react-router-dom";
// @ts-ignore
import { Helmet } from 'react-helmet';

import { useAlbums } from "../../hooks/api/useAlbums";

export const PhotoPage: FC = () => {
    const { photoId } = useParams();
    const { photo, getPhoto, clearPhoto } = useAlbums();

    useEffect(() => {
        if (photoId) {
            getPhoto(Number(photoId));
        }

        return () => {
            clearPhoto();
        }
    }, []);

    if (!photo) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>Photo</title>
                <meta name="description" content="photo"/>
            </Helmet>
            <img src={photo.url} alt={photo.title}/>
        </>
    );
};