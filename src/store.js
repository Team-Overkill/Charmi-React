import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// import conversationsReducer from './ducks/conversationsReducer';
// import matchesReducer from './ducks/matchesReducer';
// import profilesReducer from './ducks/profilesReducer';
// import userReducer from './ducks/userReducer';

import masterReducer from './ducks/masterReducer'

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (masterReducer
  , initialState
  // combineReducers({conversationsReducer, matchesReducer, profilesReducer, userReducer})
  , composeEnhancers(applyMiddleware(promiseMiddleware())));