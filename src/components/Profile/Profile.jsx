import React from 'react';
import snow from '../../img/snow.jpg'
import owl from '../../img/owl.jpg'
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={ s.img }src={snow}/>
      </div>
      <div>
        <img className={ s.img } src={owl}/>
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;
