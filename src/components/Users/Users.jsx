import React, {Component} from 'react';
import s from './Users.module.css';
import Axios from 'axios';
import ava from '../../img/ava1.jpg'

class Users extends Component {

    componentDidMount() {
        Axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                this
                    .props
                    .setUsers(responce.data.items);
            });
    }

    render() {
        return <div>
            {this.props
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
                                        this
                                            .props
                                            .unfollow(u.id)
                                    }}>Unfollow</button>
                                : <button
                                    onClick={() => {
                                    this
                                        .props
                                        .follow(u.id)
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
}

export default Users;