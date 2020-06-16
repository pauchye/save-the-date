import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import events from './events_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  events
});

export default RootReducer;