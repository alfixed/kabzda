import Axios from 'axios';

export const getUsers = (pageNumber,pageSize) => {
    return Axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, { withCredentials: true })
        .then(responce => responce.data);
}
