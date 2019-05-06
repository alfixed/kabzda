import React from 'react';
import snow from '../img/snow.jpg'
import owl from '../img/owl.jpg'

const Profile = () => {
    return (
        <div className='content'>
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
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;
