import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { IPhoto } from "../../types/response";

import { ImageList, ImageListItem } from "@mui/material";

interface IProps {
    photos: IPhoto[];
}

export const Photos: FC<IProps> = ({ photos }) => {

    return (
        <ImageList cols={3} rowHeight={300}>
            {photos.map(({ id, url, title }) => (
                <ImageListItem key={id}>
                    <Link to={`/photo/${id}`}>
                        <img
                            src={url}
                            alt={title}
                            loading="lazy"
                        />
                    </Link>
                </ImageListItem>
            ))}
        </ImageList>
    );
};