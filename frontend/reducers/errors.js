import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import restaurantsErrorsReducer from './restaurants_errors';
import reviewsErrorReducer from './reviews_errors';


export default combineReducers({
  session: sessionErrorsReducer,
  restaurants: restaurantsErrorsReducer,
  reviews: reviewsErrorReducer
});
