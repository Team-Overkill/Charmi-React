import axios from 'axios';

//End Points
const getUserURL = '/api/profiles/'
const getAuthUserURL = '/api/auth/me'
const getStatesURL = '/api/states'
const getMatchesURL = '/api/matches/'
const postMatchesURL = '/api/matches/'
const getConversationsURL = '/api/conversations/'
const getStateListURL = '/api/states/'
const getProfilesURL = 'http://localhost:3005/api/profiles'

//Action types
const GET_USER = 'GET_USER';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_AUTH_USER = 'GET_AUTH_USER';
const GET_MATCHES = 'GET_MATCHES';
const POST_MATCHES = 'POST_MATCHES';
const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
const GET_CONVERSATION_ID = 'GET_CONVERSATION_ID';
const GET_STATES_LIST = 'GET_STATES_LIST';
const GET_PROFILES = 'GET_PROFILES';

const initialState = {
  matches: [],
  user: [],
  isLoggedIn: false,
  stateList: [],
  authUser: [],
  conversationId: [],
  conversations: [],
  profiles: []
}

//Reducer
export default function masterReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_AUTH_USER}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {authUser: action.payload, isLoggedIn: true});

    case `${GET_STATES_LIST}_FULFILLED`:
      // console.log(action.payload)
      // console.log(state)
      return Object.assign({}, state, {stateList: [...action.payload]})

    case `${GET_MATCHES}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {matches: action.payload});

    case `${GET_CONVERSATIONS}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {conversations: [...action.payload]});

    case `${GET_CONVERSATION_ID}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {conversationId: action.payload[0].id});

    case `${GET_PROFILES}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {profiles: [...action.payload]});

    default: return state;
  }
}

//Action creators
export function getAuthUser() {
  console.log('getting auth user...')
  const promise = axios.get(`${getAuthUserURL}`).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_AUTH_USER,
    payload: promise
  }
}

export function getStateList() {
  // console.log(`getting states...`)
  const promise = axios.get(`${getStatesURL}`).then(res => {
    // console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_STATES_LIST,
    payload: promise
  }
}

export function getMatches(id) {
  console.log('getting matches...')
  console.log(id)
  const promise = axios.get(getMatchesURL + id).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))

  return {
    type: GET_MATCHES,
    payload: promise
  }
}

export function postMatches(id) {
  console.log('posting match...')
  const promise = axios.post(`${postMatchesURL}${id}`).then(res => {
    console.log(id)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: POST_MATCHES,
    payload: promise
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

export function getProfiles() {
  console.log('getting profiles...')
  const promise = axios.get(getProfilesURL).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_PROFILES,
    payload: promise
  }
}