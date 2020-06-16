import axios from "axios";

export const getDinings = () => {
  return axios.get("/api/dinings");
};

export const getDining = (diningId) => {
  return axios.get(`api/dining/${diningId}`);
};
