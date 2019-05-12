const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Igor',
            followed: true,
            status: 'I am a boss',
            location: { city: 'Moscow', country: 'Russia' }
        }, {
            id: 2,
            fullName: 'Dima',
            followed: true,
            status: 'I am a boss too',
            location: { city: 'Moscow', country: 'Russia' }
        }, {
            id: 3,
            fullName: 'Sergei',
            followed: false,
            status: 'I am a loser',
            location: { city: 'Klin', country: 'Russia' }
        }
    ],
    newPostText: ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: true }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: false }
                    return u;
                })
            }
        default: return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export default usersReducer;
