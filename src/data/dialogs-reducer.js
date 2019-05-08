const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload;
            break;
        case SEND_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 4, message: text });
            break;
        default: break;
    }
    return state;
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
