import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageTextCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage, newMessageText: state.newMessageText}
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
