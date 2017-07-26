import axios from 'axios';

const getMatchesURL = '/api/matches/'
const postMatchesURL = '/api/matches/'
const initialState = {
  matches: []
}

//Action Types

const GET_MATCHES = 'GET_MATCHES';
const POST_MATCHES = 'POST_MATCHES';
//Reducer

export default function matchesReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_MATCHES}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {matches: action.payload});

      case `${POST_MATCHES}_FULFILLED`:
      console.log("post matches red.", action.payload)
      return Object.assign({}, state, {matches: [...action.payload]})
    default: return state;
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
export function postMatches(id, match) {
  console.log('posting match...')
  const promise = axios.post(`${postMatchesURL}${id}`, match).then(res => {
    console.log(match)
    return res.data 
  }).catch(err => console.log(err))
  return {
    type: POST_MATCHES,
    payload: promise
  }
}