import React, {Component} from "react";
import {Link} from "react-router-dom";

import './ProfileCard.css';

export default class ProfileCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.props.name}
        </div>
      </div>
    )
  }
}