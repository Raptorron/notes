import axios from 'axios';

import {
  keepSession,//get route
  logOutAuth,//delete route
  setAuth// post route
} from './actions.js';

const Session = () => {
  return async dispatch => {
    const auth = (await axios.get('/api/sessions')).data;
    dispatch(keepSession(auth));
  };
};

const Logout = () => {
  return async dispatch => {
    await axios.delete('/api/sessions');
    dispatch(logOutAuth())
  }
}

const Logging = (user) => {
  return async dispatch => {
    const auth = (await axios.post('/api/sessions', {
      email: user.email,
      password: user.password
    })).data;
    dispatch(setAuth(auth));
  };
};

export {
  Session,
  Logging,
  Logout
}
