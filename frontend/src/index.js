import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from "axios";
import { fetchUser } from './util/users_util';

document.addEventListener('DOMContentLoaded', async () => {
  let store;
  // window.logout = logout();
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    // let decodedUser = jwt_decode(localStorage.jwtToken);
    let preloadedState;
    const response = await fetchUser()
    // .then((res) => {
    //   debugger
    //    preloadedState = { session: { isAuthenticated: true, user: res.data } }
    //    store = configureStore(preloadedState);
    // })
    // debugger
    preloadedState = { session: { isAuthenticated: true, user: response.data } }
    store = configureStore(preloadedState);

    // const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    // const currentTime = Date.now() / 1000;
    // if (decodedUser.exp < currentTime) {
    //   store.dispatch(logout());
    // }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

