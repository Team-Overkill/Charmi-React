import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { getAuthUser } from '../../ducks/userReducer';
import { getConversations, getConversationId } from '../../ducks/conversationsReducer';
import axios from 'axios';


import './Messages.css';

let socket = io(`http://localhost:3005/`)
const getConversationsURL = '/api/conversations/'
const conversationID = 0


class Messages extends Component {
  constructor() {
    super()
    this.state = {
      data: [{first_name: 'Tom', message: 'Hey' }],
      userInput: '',
      conversation: []
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

    this.getConvUsers()

    // getConversationId({
    //   user_1: 1,
    //   user_2: 2
    //   // user_1: Number(this.props.authUser.id),
    //   // user_2: Number(this.props.match.params.id)
    // })
    // console.log(this.props.conversationId)


    let convoObj = {
      id: 5,
      user_1: this.props.authUser.id,
      user_2: this.props.match.params.id
    }
  }

  getConvUsers() {
    // let myID = 1
    let myID = this.props.authUser.id
    console.log(`my id should be ${myID}`)
    // let theirId = 2
    let theirId = this.props.match.params.id /1
    console.log(`their id should be ${JSON.stringify(theirId)}`)
    let ids = {
      "user_1": myID
      , "user_2": theirId
    }
    const promise = axios.put(getConversationsURL, ids).then(res => {
      console.log(`promise response log ${res.data}`)
      this.conversationID = res.data[0].id
      console.log(`conversation id should be ${this.conversationID}`)
      const newpromise = axios.get(`${getConversationsURL}${this.conversationID}`).then(conv => {
        console.log(conv)
        this.setState({
          data: conv.data
        })
        console.log(this.state.conversation)
      })
    })//.catch(console.log(`doesn't exist`))
  }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  sendTest() {
    let myName = ''
    let getName = this.state.data.map((e, i) => {
      for(let key in e){
        if(e.user_id === this.props.authUser.id){
          myName = e.first_name
        }
      }
    })
    console.log(myName)
    socket.emit('from:react', {first_name: myName, message: this.state.userInput })
    this.setState({ userInput: '' })
  }
  render() {

    const messages = this.state.data.map((e, i) => {
      return (
        <div className="chatswrapper" key={i}>
          <div className="chats" key={i}>{`${e.first_name}: ${e.message}`}</div>
        </div>
      )
    })




    return (
      <div>
        <div>
          <header className="messageHeader">

            <Link to={`/matches`}>
              <i className="fa fa-angle-left" aria-hidden="true" style={{ fontSize: 30, fontWeight: 700, color: "#00CED1" }}></i>
            </Link>

            <span>Message</span>

            <i className="fa fa-pencil fa-2x" aria-hidden="true" style={{ fontSize: 22, color: "#EAEAEA" }}></i>
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

function mapStateToProps(state) {
  console.log(state)
  return {
    authUser: state.userReducer.authUser,
    conversations: state.conversationsReducer.conversations,
    conversationId: state.conversationsReducer.conversationId
  }
}


export default connect(mapStateToProps, { getConversations, getConversationId, getAuthUser })(Messages)