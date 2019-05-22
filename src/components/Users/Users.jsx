import React from 'react';
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
                        <img
                            className={s.img}
                            src={u.photos.small != null
                            ? u.photos.small
                            : ava}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                    onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                            : <button
                                onClick={() => {
                                props.follow(u.id)
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