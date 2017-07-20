import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import conversationsReducer from './ducks/conversationsReducer'
import matchesReducer from './ducks/matchesReducer'
import profilesReducer from './ducks/profilesReducer'

export default createStore (combineReducers({conversationsReducer, matchesReducer, profilesReducer}), applyMiddleware(promiseMiddleware()))