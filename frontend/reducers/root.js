import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';
import errorsReducer from './errors';
import uiReducer from './ui';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});
