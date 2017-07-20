import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard/ProfileCard';
import {getProfiles} from '../../ducks/profilesReducer';

import './Browse.css';

class BrowseMode extends Component {
  componentWillMount() {
    this.props.getProfiles();
  }

  render() {
    console.log(this.props)
    console.log(this.props.profiles)

    const profileCards = this.props.profiles.map(profile => (
      <ProfileCard
        key={profile.id}
        name={profile.first_name}
      />
    ))

    return (
      <div>

        This is the Browse profiles page...

        <Link to={`/matches`}>
          <button>Go To Matches</button>
        </Link>

        {profileCards}

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    profiles: state.profilesReducer.profiles
  }
}

export default connect(mapStateToProps, {getProfiles})(BrowseMode)