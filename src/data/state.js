let posts = [
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
];

let dialogs = [
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
];

let messages = [
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
];

let state = {
    profilePage: {
        posts: posts
    },
    dialogsPage: {
        messages: messages,
        dialogs: dialogs
    }
}

export default state;