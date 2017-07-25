import axios from 'axios';

//End Points
const getUserURL = '/api/profiles/'
const getAuthUserURL = '/api/auth/me'
const getStatesURL = '/api/states'

const initialState = {
  user: [],
  isLoggedIn: false,
  stateList: []
}

//Action Types

const GET_USER = 'GET_USER';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_STATELIST = 'GET_STATELIST';

//Reducer

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {user: [...action.payload]});

    case `${GET_USER_PROFILE}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {user: [...action.payload]});

    case `${GET_STATELIST}_FULFILLED`:
      // console.log(action.payload)
      // console.log(state)
      return Object.assign({}, state, {stateList: [...action.payload]})

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
    type: GET_USER,
    payload: promise
  }
}

export function getUser(id) {
  console.log('getting user...')
  const promise = axios.get(`${getUserURL}${id}`).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_USER_PROFILE,
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
    type: GET_STATELIST,
    payload: promise
  }
}