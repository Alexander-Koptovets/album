import axios, { AxiosResponse } from "axios";

import { IUser, IPost, IAlbum, IPhoto } from "../types/response";

const URL: string = 'https://jsonplaceholder.typicode.com';

export const usersRequest = (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get(URL + '/users');
};

export const postsByUser = (id: number): Promise<AxiosResponse<IPost[]>> => {
    return axios.get(URL + '/posts?userId=' + id);
};

export const selectedPost = (id: number): Promise<AxiosResponse<IPost>> => {
    return axios.get(URL + '/posts/' + id);
};

export const albumsByUser = (userId: number): Promise<AxiosResponse<IAlbum[]>> => {
    return axios.get(URL + '/albums?userId=' + userId);
};

export const photosByAlbum = (albumId: number): Promise<AxiosResponse<IPhoto[]>> => {
    return axios.get(URL + '/photos?albumId=' + albumId);
};

export const selectedPhoto = (id: number): Promise<AxiosResponse<IPhoto>> => {
    return axios.get(URL + '/photos/' + id);
};