import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashContainer from './dash/dash_container';

import './app.scss'

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <Route exact path="/dash" component={DashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;