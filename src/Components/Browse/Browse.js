import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard/ProfileCard';
import {getProfiles} from '../../ducks/profilesReducer';

import './Browse.css';

class BrowseMode extends Component {
  constructor(props)
  {
    super ()

    this.state = {
      nameIndex: 0
    }

  }
  
  componentWillMount() {
    this.props.getProfiles();
  }

nextItem (){
  // if (this.state.nameIndex < profileCards.length)
//   function nextItem() {
//     i = i + 1; // increase i by one
//     i = i % arr.length; // if we've gone too high, start from `0` again
//     return arr[i]; // give us back the item of where we are now
// this.state.nameIndex % this.state.nameIndex.length
// }
  this.setState({
    nameIndex: this.state.nameIndex + 1 
  })
 
}
 prevItem ()  {
    // if (i === 0) { // i would become 0
    //     i = arr.length; // so put it at the other end of the array
    // }
    // i = i - 1; // decrease by one
    // return arr[i]; // give us back the item of where we are now
this.setState({
    nameIndex: this.state.nameIndex - 1 
  })
}
  render() {
    console.log(this.props)
    console.log(this.props.profiles)

    const profileCards = this.props.profiles.map(profile => (
      <ProfileCard
        key={profile.id}
        name={profile.first_name}
        primary_photo={profile.primary_photo}
      />
    ))

    return (
      <div>

        This is the Browse profiles page...

        <Link to={`/matches`}>
          <button>Go To Matches</button>
        </Link>

        {profileCards[this.state.nameIndex]}
          <button onClick={()=> this.nextItem()}>Next</button>
          <button onClick={()=> this.prevItem()}>Previous</button>
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