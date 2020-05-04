import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Logging } from '../redux/store';

/* Login */
class _Login extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }
  attemptLogin(ev){
    ev.preventDefault();
    const credentials = {...this.state};
    delete credentials.error;
    this.props.attemptLogin(credentials)
      .catch(ex => this.setState({ error: 'bad credentials'}));
  }
  onChange(ev){
    this.setState({[ev.target.name]: ev.target.value });
  }
  render(){
    const { error, email, password } = this.state;
    const { onChange, attemptLogin } = this;
    return (
        <form>
          {
            error && <div className='error'>{ error }</div>
          }
          <div>
            <label>Email</label>
            <input name='email' value={ email } onChange={ onChange } />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' value={ password } onChange={ onChange } />
          </div>
          <button onClick={ attemptLogin }>Login</button>
        </form>
    );
  }
}

const Login = connect(
  ()=> {
    return {

    };
  },
  (dispatch, { history })=> {
    return {
      attemptLogin: (username)=> dispatch(Logging(username, history))
    }
  }
)(_Login);

export default Login;
