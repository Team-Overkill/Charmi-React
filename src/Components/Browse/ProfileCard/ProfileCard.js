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
         <div className="profileSlidercontainer">
            <div className="aboutWrapper"> 
             {/* <div className="aboutImage"><img src={this.props.primary_photo}/> </div> */}
             <div className="profileHeader" >
               <div className="profileFirstName">{this.props.name}</div> 
            <div className="ageLocation"> {this.props.age} - {this.props.home_town + "," + " "}{this.props.state_code}</div>
            </div>
             
            <h4>About Me </h4><p>{this.props.about}</p>
            <hr/>
            <h4>School<span>{this.props.school}</span></h4>
            <h4>Work<span>&nbsp; {this.props.work}</span></h4>
            <h4>Height<span>{this.props.height}</span></h4>
            <h4>Relationship Readiness<span>{this.props.relationship_readiness}</span></h4>
            <hr/>
              <i id="profileSlideClose" className="fa fa-window-close" aria-hidden="true"></i>
           </div> 
           </div>
      </div>
    )
  }
}
$('#profileSlideClose').click(function (e) {
    e.preventDefault();
    console.log('hello')
    $('.profileSliderContainerOpen').removeClass('profileSlidercontainer')
  })
$(document).ready(function () {
  $('#profileCheck').click(function (e) {
    e.preventDefault();
    console.log("jquery rules")
    $('.profileSlidercontainer').addClass('profileSliderContainerOpen')
    
  })
    
  }) 
