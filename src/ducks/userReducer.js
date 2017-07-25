import axios from 'axios';

const getAuthUserURL = '/api/auth/me'

const initialState = {
  authUser: [],
  isLoggedIn: false
}

//Action Types

const GET_AUTH_USER = 'GET_AUTH_USER';

//Reducer

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_AUTH_USER}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {authUser: action.payload, isLoggedIn: true});

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