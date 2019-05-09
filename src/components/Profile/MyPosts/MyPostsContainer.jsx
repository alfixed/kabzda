import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    let state = props
        .store
        .getState();

    let onAddPost = () => {
        props
            .store
            .dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        props
            .store
            .dispatch(updateNewPostTextCreator(text));
    }

    return (<MyPosts
        posts={state.profilePage.posts}
        newPostText={state.newPostText}
        updateNewPostText={onPostChange}
        addPost={onAddPost}/>);
}

export default MyPostsContainer;