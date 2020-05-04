import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';

import {
  Session,
  Logging,
  Logout
} from './thunks.js';

import {
  reducer
} from './reducer.js'


const store = createStore(
  reducer,
  applyMiddleware(thunks)
);

export default store;
export {
  Session,
  Logging,
  Logout
}
