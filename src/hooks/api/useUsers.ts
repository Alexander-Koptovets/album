import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { usersRequest } from "../../api/requests";
import { setUsers } from "../../redux/slice/users";

import { IUser } from "../../types/response";
import { RootState } from "../../redux/store";

interface IUseUsers {
    users: IUser[];
    getUsers: () => void;
};

export const useUsers = (): IUseUsers => {
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.data.users);

    const getUsers = (): void => {
        usersRequest()
            .then(({ data }) => dispatch(setUsers(data)))
            .catch((error) => toast.error(error));
    };

    return {
        users,
        getUsers,
    };
};