import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogs_items }>
                <div className={ s.dialog + ' ' + s.active }>
                    <NavLink to='/dialogs/1'>Igor</NavLink>
                </div>
                <div className={ s.dialog }>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={ s.dialog }>
                    <NavLink to='/dialogs/3'>Sergei</NavLink>
                </div>
            </div>
            <div className={ s.messages }>
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;
