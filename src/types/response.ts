export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: TAddress;
    phone: number;
    website: number;
    company: TCompany;
}

export type TAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: TGeo;
};

export type TGeo = {
    lat: string;
    lng: string;
};

export type TCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IAlbum {
    userId: number;
    id: number;
    title: number;
}

export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
