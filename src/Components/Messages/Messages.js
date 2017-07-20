import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Messages.css';


// const socket = io('http://localhost:3000')


export default class Messages extends Component {

//  constructor(props) {
//     super(props);

//     this.state = {
//       messages: [],
//       //user: '',
//       //id: ''
//     }
//  }

//     componentDidMount() {
//       socket.emit('user_connected', this.state.user)

//       socket.on('error', data => {
//         console.log('this error happened', data)
//       })


      
//     }


  render() {

    return (
      <div>
        This is the Messages page...


        <Link to={`/browse`}>
          <button>Go Back To Browse</button>
        </Link>


      </div>
    )
  }
}