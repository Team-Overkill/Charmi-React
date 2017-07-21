import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import './Messages.css';

export default class Messages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [{
        chat: "Hi. Hello. How are ya?"
      }]
    }
  }

  render() {

    const messages = this.state.messages.filter(messages => messages)

      .map((messages, index) => (
        <div key={index}>
          
          <div>
          {messages.chat}
          </div>
                    
        </div>
      ))
  



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
          <input type="text"/>
          <button>SEND</button>
        </footer>

      {/*<Link to={`/browse`}>
        <button>Go Back To Browse</button>
      </Link>*/}
    </div>
  )
}
}