import * as UserUtil from '../util/users_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then(user =>dispatch(receiveUser(user)))
)

export const updateUser = user => dispatch => (
    UserUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
)

