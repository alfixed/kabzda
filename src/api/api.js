import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3ffdc20f-020a-4ffc-a3ab-8519eea24b10 '
    }
});

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return instance
            .get(`users?page=${pageNumber}&count=${pageSize}`, { withCredentials: true })
            .then(responce => responce.data);
    }
}
