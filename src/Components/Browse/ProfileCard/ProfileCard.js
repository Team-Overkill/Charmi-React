import React, {Component} from "react";
import {Link} from "react-router-dom";

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
      </div>
    )
  }
}