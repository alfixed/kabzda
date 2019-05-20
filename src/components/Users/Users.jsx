import React, {Component} from 'react';
import s from './Users.module.css';
import Axios from 'axios';
import ava from '../../img/ava1.jpg'

class Users extends Component {

    componentDidMount() {
        this.getServerData();
    }

    componentWillUnmount() {
        this
            .props
            .clearUsers();
    }

    getServerData = (pageNumber = 1) => {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(r => {
                this
                    .props
                    .setUsers(r.data.items);
                this
                    .props
                    .setTotalUsersCount(r.data.totalCount);
            });
    }

    onPageChanges = (pageNumber) => {
        this
            .props
            .setCurrentPage(pageNumber);
        this.getServerData(pageNumber);
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => <span
                    className={this.props.currentPage === p
                    ? s.selectedPage
                    : ''}
                    onClick={() => {
                    this.onPageChanges(p)
                }}>{p}</span>)}
            </div>
            {this
                .props
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