import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Matches.css';

export default function Matches() {
  return (
    <div>
      This is the Matches page...
      <Link to={`/messages`}>
        <button>Go To Messages</button>
      </Link>
    </div>
  )
}