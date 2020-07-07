import axios from "axios";

export const fetchUser = (userId) => {
  return axios.get(`api/users/${userId}`);
};

export const updateUser = (user) => {
  return axios.patch(`api/users/${user.id}`,{
    history: user.history
  });
}
