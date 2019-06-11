import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    clearUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/users-reducer';
import Axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

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
        this
            .props
            .toggleIsFetching(true);
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(r => {
            this
                .props
                .setUsers(r.items);
            this
                .props
                .setTotalUsersCount(r.totalCount);
            this
                .props
                .toggleIsFetching(false);
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

        return <> {
            this.props.isFetching
                ? <Preloader/>
                : null
        } < Users
        pages = {
            pages
        }
        users = {
            this.props.users
        }
        onPageChanges = {
            this.onPageChanges
        }
        currentPage = {
            this.props.currentPage
        }
        follow = {
            this.props.follow
        }
        unfollow = {
            this.props.unfollow
        } /> </>
    }
}

let mapStateToProps = (state) => {
    return {users: state.usersPage.users, pageSize: state.usersPage.pageSize, totalUsersCount: state.usersPage.totalUsersCount, currentPage: state.usersPage.currentPage, isFetching: state.usersPage.isFetching}
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    clearUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);