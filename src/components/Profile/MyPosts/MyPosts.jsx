import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likesCount='10'/>
            <Post message="It's my first post" likesCount='25'/>
        </div>
    );
}

export default MyPosts;