import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    let users = [
        {
            id: 1,
            photoUrl: 'https://greatchat.ru/wp-content/uploads/2018/03/avatarki-dlya-skype1.jpeg',
            fullName: 'Igor',
            followed: true,
            status: 'I am a boss',
            location: { city: 'Moscow', country: 'Russia' }
        }, {
            id: 2,
            photoUrl: 'http://zastavok.net/main/funny/1526549540.jpg',
            fullName: 'Dima',
            followed: true,
            status: 'I am a boss too',
            location: { city: 'Moscow', country: 'Russia' }
        }, {
            id: 3,
            photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000098//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100',
            fullName: 'Sergei',
            followed: false,
            status: 'I am a loser',
            location: { city: 'Klin', country: 'Russia' }
        }
    ];

    if (props.users.length === 0) {
        props.setUsers(users);
    }
    
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div >
                            <img className={s.img} src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;
