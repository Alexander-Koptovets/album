import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { albumsByUser, photosByAlbum, selectedPhoto } from "../../api/requests";
import { setAlbumsByUser, setPhotos, setPhoto } from "../../redux/slice/users";

import { IAlbum, IPhoto } from "../../types/response";
import { RootState } from "../../redux/store";

interface IUseAlbums {
    albums: IAlbum[];
    photos: IPhoto[];
    photo: IPhoto | null;
    getAlbumsByUser: (userId: number) => void;
    getPhotos: (albumId: number) => void;
    getPhoto: (photoId: number) => void;
    clearPhotos: () => void;
    clearPhoto: () => void;
}

export const useAlbums = (): IUseAlbums => {
    const dispatch = useDispatch();

    const albums = useSelector((state: RootState) => state.data.albumsByUser);

    const photos = useSelector((state: RootState) => state.data.photos);

    const photo = useSelector((state: RootState) => state.data.photo);

    const getAlbumsByUser = (userId: number) => {
        albumsByUser(userId)
            .then(({ data }) => dispatch(setAlbumsByUser(data)))
            .catch((error) => toast.error(error));
    };

    const getPhotos = (albumId: number) => {
        photosByAlbum(albumId)
            .then(({ data }) => dispatch(setPhotos(data)))
            .catch((error) => toast.error(error));
    };

    const getPhoto = (photoId: number) => {
        selectedPhoto(photoId)
            .then(({ data }) => dispatch(setPhoto(data)))
            .catch((error) => toast.error(error));
    };

    const clearPhotos = () => dispatch(setPhotos([]));

    const clearPhoto = () => dispatch(setPhoto(null));

    return {
        albums,
        photos,
        photo,
        getAlbumsByUser,
        getPhotos,
        getPhoto,
        clearPhotos,
        clearPhoto,
    };
};