import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import conversationsReducer from './ducks/conversationsReducer';
import matchesReducer from './ducks/matchesReducer';
import profilesReducer from './ducks/profilesReducer';
import userReducer from './ducks/userReducer';


const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (
  combineReducers({conversationsReducer, matchesReducer, profilesReducer, userReducer})
  , initialState
  , composeEnhancers(applyMiddleware(promiseMiddleware())));
