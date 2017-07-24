import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';

import './Messages.css';

let socket = io(`http://localhost:3005/`)


export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      data: [{message: 'Hey'}],
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.sendTest = this.sendTest.bind(this)
  }

  componentDidMount() {
    socket.on('from:server', d => {
      this.setState({
        data: [...this.state.data, d]
      })
    })
  }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  sendTest() {
    socket.emit('from:react', {message: this.state.userInput})
    this.setState({userInput: ''})
  }

  render() {
    const messages = this.state.data.map((e, i) => {
      return (
        <div className="chatswrapper" key={i}>
        <div className="chats" key={i}>{e.message}</div>
        </div>
      )
    })
  



  return (
    <div>

        <div>
          <header className="messageHeader">
            
            <Link to={`/matches`}>
              <i className="fa fa-angle-left" aria-hidden="true" style={{fontSize: 30, fontWeight: 700, color: "#00CED1"}}></i>
            </Link>

            <span>Message</span>

            <i className="fa fa-pencil fa-2x" aria-hidden="true" style={{fontSize: 22, color: "#EAEAEA"}}></i>
          </header>
        </div>

            {messages}

        <footer className="footerWrapper">
          <input type="text" onChange={this.updateInput} value={this.state.userInput} />
          <button onClick={this.sendTest}>SEND</button>
        </footer>

      {/*<Link to={`/browse`}>
        <button>Go Back To Browse</button>
      </Link>*/}
    </div>
  )
}
}