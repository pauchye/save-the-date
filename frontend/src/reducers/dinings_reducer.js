import { RECEIVE_DININGS, RECEIVE_DINING } from "../actions/dining_actions";

const DiningsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DININGS:
            return action.dinings;
        case RECEIVE_DINING:
            return Object.assign({}, state, {[action.diningId]: action.dining})
        default:
            return state;
    }
}

export default DiningsReducer;