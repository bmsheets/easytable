import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import restaurantsErrorsReducer from './restaurants_errors';


export default combineReducers({
  session: sessionErrorsReducer,
  restaurants: restaurantsErrorsReducer
});
