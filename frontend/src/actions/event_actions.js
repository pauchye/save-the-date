import { getEvent, getEvents, updateEvent } from "../util/events_util";

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

const receiveEvents = (events) => {
  // debugger
  return {
  type: RECEIVE_EVENTS,
  events,
}};

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event,
});

export const fetchEvents = () => dispatch => {
    // debugger
    return getEvents()
        .then(events => dispatch(receiveEvents(events)))
};

export const fetchEvent = eventId => dispatch => (
    getEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
)

export const updatethisEvent = event => dispatch => (
  updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
)