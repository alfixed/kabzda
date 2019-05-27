import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends Component {

  componentDidMount() {
    this.getServerData()
  }

  getServerData = () => {
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(r => {
        this
          .props
          .setUserProfile(r.data);
      });

  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
