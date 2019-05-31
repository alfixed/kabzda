import React, {Component} from 'react';
import Header from './Header';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends Component {
    componentDidMount() {
        this.getServerData()
    }

    getServerData = () => {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(r => {
                if (r.data.resultCode === 0){
                    let {id, email, login} = r.data.data;
                    this.props.setAuthUserData(id, email, login);
                } else {
                    this.props.setAuthUserData(1, '1@1.ru', 'Qwerty');
                }                
            });
    }

    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
