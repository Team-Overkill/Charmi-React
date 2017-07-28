import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard/ProfileCard';
import {getProfiles} from '../../ducks/profilesReducer';
import {getAuthUser} from '../../ducks/userReducer';
import {getMatches, postMatches} from '../../ducks/matchesReducer';
import './Browse.css';
import $ from 'jquery';
import logo from '../../assets/Charmi-logo-large-cyan.png';


class BrowseMode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameIndex: 0
    }

  }

  componentDidMount() {
    this.props.getAuthUser().then(console.log(this.props.authUser));
    this.props.getProfiles();

    $(document).ready(function () {
      $('#profileCheck').click(function (e) {
        e.preventDefault();
        console.log("jquery rules")
        $('.profileSliderContainer').addClass('profileSliderContainerOpen')
      })
    })
    $(document).ready(function () {
  // setInterval(function(){ 

  $('#like').click(function (e) {
    e.preventDefault();
    $('.likeNotify').addClass('likedBoxOn');
    setTimeout(function () {

      // toggle back after 1 second
      console.log("waiting")
      $('.likeNotify').removeClass('likedBoxOn')
    }, 700);
  })
  // },5000);
//   $('#likeNotify').delay(3000).queue(function(){
//   $(this).addClass("likedBoxOn");
// });

  $('#nope').click(function (e) {
    e.preventDefault();
    $('.nopeNotifyUser').addClass('nopeBoxOn');
    setTimeout(function () {
      // toggle back after 1 second
      $('.nopeNotifyUser').removeClass('nopeBoxOn')
    }, 700);
  })
})
  }

  nextItem() {
    // if (this.state.nameIndex < profileCards.length)
//   function nextItem() {
//     i = i + 1; // increase i by one
//     i = i % arr.length; // if we've gone too high, start from `0` again
//     return arr[i]; // give us back the item of where we are now
// this.state.nameIndex % this.state.nameIndex.length
// }
    console.log("the other guy just invoked me")
    setTimeout(() => {
      this.setState({
        nameIndex: this.state.nameIndex + 1
      })
    }, 950);


  }

  handleMatch(userId, id) {
    const matchObj = { user_1: userId, user_2: id}
    console.log("handleMatch", userId, id);
    postMatches(id, matchObj);
    this.nextItem();
  }


//  prevItem ()  {
//     // if (i === 0) { // i would become 0
//     //     i = arr.length; // so put it at the other end of the array
//     // }
//     // i = i - 1; // decrease by one
//     // return arr[i]; // give us back the item of where we are now
// setTimeout( () => {
//     this.setState({

//   nameIndex: this.state.nameIndex - 1 
//   })
// }, 500);
// }
  render() {
    console.log(this.props)
    console.log(this.props.profiles)
    console.log(this.props.authUser)

    const profileCards = this.props.profiles.map(profile => (
      <ProfileCard
        key={profile.id}
        name={profile.first_name}
        primary_photo={profile.primary_photo}
        age={profile.age}
        height={profile.height}
        home_town={profile.home_town}
        relationship_readiness={profile.relationship_readiness}
        school={profile.school}
        state_code={profile.state_code}
        work={profile.work}
        about={profile.about}
      />
    ))

    return (
      <div>

        <div className="browseNav">
          <header className="browseHeader">

            <Link to={`/create-profile`}>
              <i className="fa fa-bars" aria-hidden="true" style={{fontSize: 25}}></i>
            </Link>

            <img src={logo} alt="Charmi logo" className="browseNavLogo"/>

            <Link to={`/matches`}>
              <i className="fa fa-comments" aria-hidden="true" style={{fontSize: 25}} ></i>
            </Link>

          </header>
        </div>

        <div className="likeNotify">
          <i className="fa fa-heart fa-5x" aria-hidden="true"></i>
        </div>

        <div className="nopeNotifyUser">
          <i className="fa fa-times fa-5x" aria-hidden="true"></i>
        </div>

        <div>
          {profileCards[this.state.nameIndex]}
        </div>

        <div className="bottomButtonGroup">

          <div id="nope" onClick={() => this.nextItem()} className="passButton">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>

          {/*<i id="profileCheck" className="fa fa-id-card-o" aria-hidden="true"></i>*/}
          <i id="profileCheck" className="fa fa-angle-up" aria-hidden="true"></i>

          <div id="like" onClick={() => this.handleMatch(this.props.authUser.id, this.props.profiles[this.state.nameIndex].id)}
               className="likeButton">
            <i className="fa fa-heart" aria-hidden="true"></i>

          </div>

        </div>
      </div>
    )
  }
}


// COULD do it based on the new photo leaves or comes in
$(document).ready(function () {
  // setInterval(function(){ 

  $('#like').click(function (e) {
    e.preventDefault();
    $('.likeNotify').addClass('likedBoxOn');
    setTimeout(function () {

      // toggle back after 1 second
      console.log("waiting")
      $('.likeNotify').removeClass('likedBoxOn')
    }, 700);
  })
  // },5000);
//   $('#likeNotify').delay(3000).queue(function(){
//   $(this).addClass("likedBoxOn");
// });

  $('#nope').click(function (e) {
    e.preventDefault();
    $('.nopeNotifyUser').addClass('nopeBoxOn');
    setTimeout(function () {
      // toggle back after 1 second
      $('.nopeNotifyUser').removeClass('nopeBoxOn')
    }, 700);
  })
})

function mapStateToProps(state) {
  console.log(state)
  return {
    authUser: state.userReducer.authUser,
    isLoggedIn: state.userReducer.isLoggedIn,
    profiles: state.profilesReducer.profiles,
    matches: state.matchesReducer.matches
  }
}

export default connect(mapStateToProps, {getProfiles, getMatches, getAuthUser})(BrowseMode)
