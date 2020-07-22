import axios from "axios";

export const fetchUser = () => {
  debugger
  return axios.get(`api/users/current`);
};

export const updateUser = (user) => {
  // debugger
  // console.log('users_util_wildcard', user.id)
  return axios.patch(`api/users/${user.id}`,{
    history: user.history
  });
}
