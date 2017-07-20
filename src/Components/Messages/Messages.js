import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Messages.css';

export default function Messages() {
  return (
    <div>
      This is the Messages page...
      <Link to={`/browse`}>
        <button>Go Back To Browse</button>
      </Link>
    </div>
  )
}