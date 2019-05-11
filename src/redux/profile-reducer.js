const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 10
        }, {
            id: 2,
            message: "It's my first post",
            likesCount: 50
        }, {
            id: 3,
            message: 'Yo',
            likesCount: 2
        }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return { 
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
        case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.payload
                };            
        default: return state;
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: text
    }
}

export default profileReducer;
