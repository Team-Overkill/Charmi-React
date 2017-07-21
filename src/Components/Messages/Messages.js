import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import './Messages.css';

export default function Messages() {
  return (
    <div>

        <div>
          <header className="messageHeader">
              <Link to={`/matches`}>
            <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
          </Link>
              <span>Messages</span>
            <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" ></i>
          </header>
        </div>

      <Link to={`/browse`}>
        <button>Go Back To Browse</button>
      </Link>
    </div>
  )
}