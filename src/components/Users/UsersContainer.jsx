import {connect} from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    clearUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC
} from '../../redux/users-reducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
