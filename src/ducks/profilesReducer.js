import axios from 'axios';

const getProfilesURL = 'http://localhost:3005/api/profiles'

const initialState = {
  profiles: []
}

//Action Types

const GET_PROFILES = 'GET_PROFILES';

//Reducer

export default function profileReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_PROFILES}_FULFILLED`:
      console.log(action.payload)
      console.log(state)
      return Object.assign({}, state, {profiles: [...action.payload]});

    default: return state;
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