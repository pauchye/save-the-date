import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/api/users");
};

export const fetchUser = (userId) => {
  return axios.get(`api/users/${userId}`);
};

// export const updateUser = (user, newdata) => {
//   return axios({
//     url: `api/users/${user.id}`,
//     method: "PATCH",
//     data: {
//       history: newdata,
//     },
//   });
// }

export const updateUser = (user) => {
  return axios.patch(`api/users/${user.id}`,{
    history: user.history
  });
}
