import axios from 'axios';

const getConversationsURL = '/api/conversations/'

const initialState = {
  conversationId: [],
  conversations: []
}

//Action Types

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
const GET_CONVERSATION_ID = 'GET_CONVERSATION_ID';

//Reducer

export default function conversationsReducer( state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case `${GET_CONVERSATIONS}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {conversations: [...action.payload]});

    case `${GET_CONVERSATION_ID}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {conversationId: action.payload[0].id});

    default: return state;
  }
}

export function getConversations(ids) {
  console.log('getting conversations...')
  const promise = axios.get(getConversationsURL, ids).then(res => {
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_CONVERSATIONS,
    payload: promise
  }
}

export function getConversationId(ids) {
  console.log('getting conversation Id...')
  const promise = axios.put(getConversationsURL, ids).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_CONVERSATION_ID,
    payload: promise
  }
}