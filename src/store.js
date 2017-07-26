import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import conversationsReducer from './ducks/conversationsReducer';
import matchesReducer from './ducks/matchesReducer';
import profilesReducer from './ducks/profilesReducer';
import userReducer from './ducks/userReducer';

export default createStore (combineReducers({conversationsReducer, matchesReducer, profilesReducer, userReducer}), applyMiddleware(promiseMiddleware()));