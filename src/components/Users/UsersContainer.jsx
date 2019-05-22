import React, {Component} from 'react';
 import {connect} from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    clearUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC
} from '../../redux/users-reducer';
import Axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {

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
        
        return <Users
            pages={pages}
            users={this.props.users}
            onPageChanges={this.onPageChanges}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>
    }
}

let mapStateToProps = (state) => {
    return {users: state.usersPage.users, pageSize: state.usersPage.pageSize, totalUsersCount: state.usersPage.totalUsersCount, currentPage: state.usersPage.currentPage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        clearUsers: () => {
            dispatch(clearUsersAC());
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
