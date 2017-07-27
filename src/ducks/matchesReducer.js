import axios from 'axios';

const getMatchesURL = '/api/matches/'
const postMatchesURL = '/api/matches/'
const initialState = {
  matches: [],
  matchId: {}
}

//Action Types

const GET_MATCHES = 'GET_MATCHES';
const POST_MATCHES = 'POST_MATCHES';
const UPDATE_MATCH_ID = 'UPDATE_MATCH_ID';
//Reducer

export default function matchesReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_MATCHES}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {matches: action.payload});

      case `${POST_MATCHES}_FULFILLED`:
      console.log("post matches red.", action.payload)
      return Object.assign({}, state, {matches: [...action.payload]});

      case `${UPDATE_MATCH_ID}_FULFILLED`:
      console.log('update match id', action.payload)
      return Object.assign({}, state, {matchId: action.payload})

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
    console.log(res)
    console.log(res.data[1][0].id)
    return [res.data[0], res.data[1][0].id]
  }).catch(err => console.log(err))
  return {
    type: POST_MATCHES,
    payload: promise
  }
}

export function updateMatchId(id) {
  console.log('match id updated')
  return {
    type: UPDATE_MATCH_ID,
    payload: id
  }
}