import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
