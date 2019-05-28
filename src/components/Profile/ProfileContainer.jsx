import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends Component {

  componentDidMount() {
    this.getServerData()
  }

  getServerData = () => {
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2;
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let mapStateToProps = (state) => ({profile: state.profilePage.profile});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
