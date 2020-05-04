import React, { Component } from 'react';
import { connect } from 'react-redux';


import {Logout} from '../redux/store';

const _Home = ({ auth, logout })=> <div>
  Home - Welcome { auth.email }
  <button onClick={ logout }>Logout</button>
</div>;

const Home = connect(
    ({ auth })=> {
      return { auth }
    },
    (dispatch)=> {
      return {
        logout: ()=> dispatch(Logout())
      }
    }
)(_Home);

export default Home;
