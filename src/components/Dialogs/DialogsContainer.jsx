import React from 'react';
import Dialogs from './Dialogs';
import {updateMessageTextCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                }

                let updateMessageText = (text) => {
                    store.dispatch(updateMessageTextCreator(text));
                }

                return <Dialogs
                    state={state.dialogsPage}
                    newMessageText={state.newMessageText}
                    sendMessage={sendMessage}
                    updateMessageText={updateMessageText}/>
                }   
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
