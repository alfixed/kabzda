import React from 'react';
import snow from '../../img/snow.jpg'
import owl from '../../img/owl.jpg'
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={ classes.content }>
        <div>
          <img src={snow} />
        </div>
        <div>
          <img src={owl} />
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div className={ classes.post }>
            <div className={ classes.item }>
              post 1
            </div>
            <div className={ classes.item }>
              post 2
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;
