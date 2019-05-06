import React from 'react';
import ava from '../../../../img/ava.jpg'
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <img src={ ava } />
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;