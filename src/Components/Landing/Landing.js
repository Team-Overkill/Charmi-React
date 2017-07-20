import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Landing.css';

export default function Landing() {
  return (
    <div>
      This is the Landing page...
      <Link to={`/browse`}>
        <button>Login</button>
      </Link>
      <Link to={`/create-profile/`}>
        <button>Create Profile</button>
      </Link>
    </div>
  )
}