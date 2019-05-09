import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageTextCreator, sendMessageCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    let state = props
        .store
        .getState();

    let sendMessage = () => {
        props
            .store
            .dispatch(sendMessageCreator());
    }

    let updateMessageText = (text) => {
        props
            .store
            .dispatch(updateMessageTextCreator(text));
    }

    return (<Dialogs
        state={state.dialogsPage}
        newMessageText={state.newMessageText}
        sendMessage={sendMessage}
        updateMessageText={updateMessageText}/>);
}

export default DialogsContainer;
