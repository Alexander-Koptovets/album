import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { postsByUser, selectedPost } from "../../api/requests";
import { setPostsByUser, setPost } from "../../redux/slice/users";

import { IPost } from "../../types/response";
import { RootState } from "../../redux/store";

interface IUsePosts {
    post: IPost | null;
    posts: IPost[];
    getPost: (id: number) => void;
    getPostsByUsers: (id: number) => void;
    clearPosts: () => void;
    clearPost: () => void;
}

export const usePosts = (): IUsePosts => {
    const dispatch = useDispatch();

    const post = useSelector((state: RootState) => state.data.post);

    const posts = useSelector((state: RootState) => state.data.postsByUser);

    const getPost = (id: number) => {
        selectedPost(id)
            .then(({ data }) => dispatch(setPost(data)))
            .catch((error) => toast.error(error));
    };

    const getPostsByUsers = (id: number) => {
        postsByUser(id)
            .then(({ data }) => dispatch(setPostsByUser(data)))
            .catch((error) => toast.error(error));
    };

    const clearPosts = () => dispatch(setPostsByUser([]));

    const clearPost = () => dispatch(setPost(null));

    return {
        post,
        posts,
        getPost,
        getPostsByUsers,
        clearPosts,
        clearPost,
    };
};