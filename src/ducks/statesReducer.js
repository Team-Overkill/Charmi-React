import axios from 'axios';

const getStateListURL = '/api/states/'

const initialState = {
  statesList: []
}

//Action Types

const GET_STATES_LIST = 'GET_STATES_LIST';

//Reducer

export default function statesListReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_STATES_LIST}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {user: [...action.payload]});

    default: return state;
  }
}

export function getStatesList() {
  console.log('getting user...')
  const promise = axios.get(`${getStateListURL}`).then(res => {
    console.log(res.data)
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_STATES_LIST,
    payload: promise
  }
}