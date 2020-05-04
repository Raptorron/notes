import { combineReducers } from 'redux';

import {
  SET_AUTH
} from './actions.js';


const authenticateReducer = (state = {}, action) => {
  if(action.type === SET_AUTH){
    return action.auth;
  }
  return state;
}


const reducer = combineReducers({
  auth: authenticateReducer
});

export { reducer }
