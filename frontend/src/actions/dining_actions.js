import { getDining, getDinings } from "../util/dinings_util";

export const RECEIVE_DININGS = "RECEIVE_DININGS";
export const RECEIVE_DINING = "RECEIVE_DINING";

const receiveDinings = (Dinings) => ({
  type: RECEIVE_DININGS,
  Dinings,
});

const receiveDining = (Dining) => ({
  type: RECEIVE_DINING,
  Dining,
});

export const fetchDinings = () => (dispatch) =>
  getDinings().then((Dinings) => dispatch(receiveDinings(Dinings)));

export const fetchDining = (DiningId) => (dispatch) =>
  getDining(DiningId).then((Dining) => dispatch(receiveDining(Dining)));
