import React from 'react';
import MyPosts from './MyPosts';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let onAddPost = () => (store.dispatch(addPostCreator()));

                let onPostChange = (text) => (store.dispatch(updateNewPostTextCreator(text)));

                return <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.newPostText}
                    updateNewPostText={onPostChange}
                    addPost={onAddPost}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;