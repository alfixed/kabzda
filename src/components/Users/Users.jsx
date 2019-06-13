import React from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';
import s from './Users.module.css';
import ava from '../../img/ava1.jpg'

let Users = (props) => {
    return <div>
        <div>
            {props
                .pages
                .map(p => <span
                    className={props.currentPage === p
                    ? s.selectedPage
                    : ''}
                    onClick={() => {
                    props.onPageChanges(p)
                }}>{p}</span>)}
        </div>
        {props
            .users
            .map(u => <div key={u.id}>
                <span>
                    <div >
                        <NavLink to={'/profile/' + u.id}>
                            <img
                                className={s.img}
                                src={u.photos.small != null
                                ? u.photos.small
                                : ava}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                    disabled={props.followingInProgress.some( id => id === u.id)}
                                    onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id);
                                    Axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '3ffdc20f-020a-4ffc-a3ab-8519eea24b10 '
                                        }
                                    })
                                        .then(r => {
                                            if (r.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleIsFollowingProgress(false, u.id);
                                        });
                                }}>Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some( id => id === u.id)} 
                                onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '3ffdc20f-020a-4ffc-a3ab-8519eea24b10 '
                                    }
                                }).then(r => {
                                    if (r.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
}
    </div>
}

export default Users;