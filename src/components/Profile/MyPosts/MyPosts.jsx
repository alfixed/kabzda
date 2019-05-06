import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 10
        }, {
            id: 2,
            message: "It's my first post",
            likesCount: 50
        }, {
            id: 3,
            message: 'Yo',
            likesCount: 2
        }
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;