import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import snow from '../../../img/snow.jpg'
import owl from '../../../img/owl.jpg'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.img} src={snow}/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.img} src={props.profile.photos.large != null ? props.profile.photos.large : owl} />
            </div>
        </div>
    );
}

export default ProfileInfo;