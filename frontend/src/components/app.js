import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import CalenderContainer from './calender/calender_container';
import DashContainer from './dash/dash_container';
// import DashShow from './dash/dash_show';
import Modal from './modal/modal'

import './app.scss'

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Modal/>
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/dash" component={DashContainer} />
        {/* <ProtectedRoute exact path="/dash/show" component={DashShow} /> */}

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/calender" component={CalenderContainer} />
    </Switch>
  </div>
);

export default App;