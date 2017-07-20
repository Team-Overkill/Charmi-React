import axios from 'axios';

const getUserURL = 'http://localhost:3005/api/profiles/'

const initialState = {
  user: []
}

//Action Types

const GET_USER = 'GET_USER';

//Reducer

export default function userReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {user: [...action.payload]});

    default: return state;
  }
}

export function getUser(id) {
  console.log('getting user...')
  const promise = axios.get(`${getUserURL}${id}`).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_USER,
    payload: promise
  }
}