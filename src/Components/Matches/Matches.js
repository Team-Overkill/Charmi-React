import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Matches.css';

export default function Matches() {
  return (
    <div>

        <div>
          <header className="messageHeader">
            <Link to={`/browse`}>
              <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            </Link>

              <span>Matches</span>

            <Link to={`/messages`}>
              <i className="fa fa-comments fa-2x" aria-hidden="true"></i>
            </Link>

          </header>
        </div>

    </div>
  )
}