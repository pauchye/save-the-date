import { RECEIVE_EVENTS, RECEIVE_EVENT } from "../actions/event_actions";

const EventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            return Object.assign({}, state, )
        default:
            return state;
    }
}
