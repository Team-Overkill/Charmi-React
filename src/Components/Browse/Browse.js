import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { ProfileSlider } from './ProfileSlider/ProfileSlider';
import ProfileCard from './ProfileCard/ProfileCard';
import {getProfiles} from '../../ducks/profilesReducer';

import './Browse.css';
import $ from 'jquery';


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
setTimeout( () => {
  this.setState({
    nameIndex: this.state.nameIndex + 1 
  })
 }, 3500);
}
 prevItem ()  {
    // if (i === 0) { // i would become 0
    //     i = arr.length; // so put it at the other end of the array
    // }
    // i = i - 1; // decrease by one
    // return arr[i]; // give us back the item of where we are now
setTimeout( () => {
    this.setState({
  
  nameIndex: this.state.nameIndex - 1 
  })
}, 500);
}
  render() {
    console.log(this.props)
    console.log(this.props.profiles)

    const profileCards = this.props.profiles.map(profile => (
      <ProfileCard
        key={profile.id}
        name={profile.first_name}
        primary_photo={profile.primary_photo}
        age={profile.age}
      />
    ))

    return (
      <div>

      <div className="browseNav">
        <header className="browseHeader"><i className="fa fa-bars" aria-hidden="true"></i><span>Charmi</span><Link to={`/matches`}>
         <i className="fa fa-comments" aria-hidden="true"></i>
        </Link></header>
        </div>
        
        <div  className="likedBox likedBoxOn">
            Liked
        </div>
        <div className="nopeBox nopeBoxOn">
          Nope
        </div>
        {profileCards[this.state.nameIndex]}
          <div className="bottomButtonGroup">
            <div id="nope" onClick={()=> this.nextItem()} className="passButton"><i className="fa fa-times" aria-hidden="true"></i></div>
             <i  id="profileCheck" className="fa fa-id-card-o" aria-hidden="true"></i>
           <div id="like" onClick={()=> this.nextItem()} className="likeButton"><i className="fa fa-heart" aria-hidden="true"></i></div>
           </div>
           <ProfileSlider/>
      </div>
    )
  }
}



// COULD do it based on the new photo leaves or comes in
$(document).ready(function () {
  // setInterval(function(){ 
    
    $('#like').click(function (e){
    e.preventDefault();
    setInterval(function(){
     
     // toggle back after 1 second
     console.log("waiting")
     $('likedBoxOn').toggleClass('.likedBox')  
   },2000);
  })
  // },5000);
$('#nope').click(function (e){
    e.preventDefault();
    $('.nopeBoxOn').toggleClass('nopeBox');
    setTimeout(function(){
     // toggle back after 1 second
     $('.nopeBox').toggleClass('nopeBoxOn')  
   },1000);
  })

})



function mapStateToProps(state) {
  console.log(state)
  return {
    profiles: state.profilesReducer.profiles
  }
}

export default connect(mapStateToProps, {getProfiles})(BrowseMode)