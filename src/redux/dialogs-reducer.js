const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.payload
            };
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: text }]
            };
        default: return state;
    }
}

export const updateMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;
