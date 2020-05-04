const SET_AUTH = 'SET_AUTH';
//action creators

const setAuth = (auth) => ({ type: SET_AUTH, auth });
const logOutAuth = () => ({ type: SET_AUTH, auth: {} });
const keepSession = (auth) => ({ type: SET_AUTH, auth });

export {
  SET_AUTH,
  setAuth,
  logOutAuth,
  keepSession
}
