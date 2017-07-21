import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
import './ProfileCard.css';

export default class ProfileCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <div className="browseImageWrapper"><div className='browseImage' style={{backgroundImage: `url(${this.props.primary_photo})`}}></div></div>
          <div className="browseNameAge">
           {this.props.name + "," + " "}
             {this.props.age}
           </div>
        </div>
        {/* <div className="profileSlidercontainer">
             {this.props.name + "," + " "}
             {this.props.age} 
            <h1>About: {this.props.about}</h1>
            <h3>Relationship readiness: {this.props.relationship_readiness}</h3>
            <h2>School: {this.props.school}</h2>
            <h2>Home Town, State:{this.props.home_town}{this.props.state_code}</h2>
            <h2>Height {this.props.height}</h2>
            <h2>Work {this.props.work}</h2>
           
             Test
             <button id="profileSlideClose" >back to browsing</button>
           </div> */}
      </div>
    )
  }
}

$(document).ready(function () {
  $('#profileCheck').click(function (e) {
    e.preventDefault();
    console.log("jquery rules")
    $('.profileSlidercontainer').addClass('profileSliderContainerOpen')
  })
    $('#profileSlideClose').click(function (e) {
    e.preventDefault();
    console.log('hello')
    $('.profileSliderContainerOpen').removeClass('profileSlidercontainer')
  })
  }) 