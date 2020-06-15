// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";


// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});
  
// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
        // !!!! the part below did not work. it creates a user but did not log them in
        // console.log('signup resolved to ', x)
        // return dispatch(receiveUserSignIn())
        // !!!! i replaced it with login part

        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))

    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

// We wrote this one earlier
export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};