import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import './ProfileSlider.css';
import {getProfiles} from '../../../ducks/profilesReducer';


export class ProfileSlider extends Component {
    constructor(props)
  {
    super ()

    }

  
  // componentWillMount() {
  //   this.props.getProfiles();
  // }
  render() {
    console.log(this.props)
    return (
          <div className="profileSlidercontainer profileSliderContainerOpen">
            <h1>About</h1>
            <h3>Relationship readiness</h3>
            <h2>School</h2>
            <h2>Home Town, State</h2>
            <h2>Height</h2>
            <h2>Work</h2>
            {this.props.name + "," + " "}
             {this.props.age} 
             Test
             <button id="profileSlideClose" >back to browsing</button>
           </div>
           
    )
  }
}
$(document).ready(function () {
  $('#profileCheck').click(function (e) {
    e.preventDefault();
    console.log("jquery rules")
    $('.profileSlidercontainer').toggleClass('profileSliderContainerOpen')
  })
}) 
$(document).ready(function () {
  $('#profileSlideClose').click(function (e) {
    e.preventDefault();
    $('.profileSliderContainerOpen').toggleClass('profileSlidercontainer')
  })
})
function mapStateToProps(state) {
 
  return {
    profiles: state.profilesReducer.profiles
  }
}
export default connect(mapStateToProps, {getProfiles})(ProfileSlider)