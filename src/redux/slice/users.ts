import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IPost, IAlbum, IPhoto } from "../../types/response";

interface IProps {
    users: IUser[];
    postsByUser: IPost[];
    post: IPost | null;
    albumsByUser: IAlbum[];
    photos: IPhoto[];
    photo: IPhoto | null;
}

const initialState: IProps = {
    users: [],
    postsByUser: [],
    post: null,
    albumsByUser: [],
    photos: [],
    photo: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
        setPostsByUser(state, action: PayloadAction<IPost[]>) {
            state.postsByUser = action.payload;
        },
        setPost(state, action: PayloadAction<IPost | null>) {
            state.post = action.payload;
        },
        setAlbumsByUser(state, action: PayloadAction<IAlbum[]>) {
            state.albumsByUser = action.payload;
        },
        setPhotos(state, action: PayloadAction<IPhoto[]>) {
            state.photos = action.payload;
        },
        setPhoto(state, action: PayloadAction<IPhoto | null>) {
            state.photo = action.payload;
        },
    },
});

export default usersSlice.reducer;
export const {
    setUsers,
    setPostsByUser,
    setPost,
    setAlbumsByUser,
    setPhotos,
    setPhoto,
} = usersSlice.actions;