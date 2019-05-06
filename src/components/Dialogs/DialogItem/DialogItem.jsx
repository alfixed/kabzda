import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div activeClassName={ s.activeLink }>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
