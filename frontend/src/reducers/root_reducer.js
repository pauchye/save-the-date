import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import events from './events_reducer';
import dinings from './dinings_reducer';
import ui from "./ui_reducer"

const RootReducer = combineReducers({
  session,
  errors,
  events,
  dinings,
  ui
});

export default RootReducer;