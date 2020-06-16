import { getDining, getDinings } from "../util/dinings_util";

export const RECEIVE_DININGS = "RECEIVE_DININGS";
export const RECEIVE_DINING = "RECEIVE_DINING";

const receiveDinings = (dinings) => ({
  type: RECEIVE_DININGS,
  dinings
});

const receiveDining = (dining) => ({
  type: RECEIVE_DINING,
  dining
});

export const fetchDinings = () => (dispatch) =>
  getDinings().then((dinings) => dispatch(receiveDinings(dinings)));

export const fetchDining = (diningId) => (dispatch) =>
  getDining(diningId).then((dining) => dispatch(receiveDining(dining)));
