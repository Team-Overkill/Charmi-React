import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        This is the Landing page...
        <button>
          <a href="http://localhost:3005/api/auth">Login with Auth0</a>
        </button>
        <Link to={`/browse`}>
          <button>Login</button>
        </Link>
        <Link to={`/create-profile/`}>
          <button>Create Profile</button>
        </Link>
      </div>
    )
  }
}

export default Landing