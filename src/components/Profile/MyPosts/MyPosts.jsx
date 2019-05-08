import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'});
    }
 
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', payload: text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;