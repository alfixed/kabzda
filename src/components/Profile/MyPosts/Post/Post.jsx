import React from 'react';
import ava from '../../../../img/ava.jpg'
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <img src={ ava } />
                { props.message }
                <div>
                    <span>like {props.like }</span>
                </div>
            </div>
        </div>
    );
}

export default Post;