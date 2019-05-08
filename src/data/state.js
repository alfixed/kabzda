let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    message: 'Hi!'
                }, {
                    id: 2,
                    message: 'How are you?'
                }, {
                    id: 3,
                    message: 'Yo'
                }
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Igor'
                }, {
                    id: 2,
                    name: 'Dima'
                }, {
                    id: 3,
                    name: 'Sergei'
                }
            ]
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.payload;
        this._callSubscriber();
        }
    }
}

export default store;