import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import reservationsReducer from './reservations';
import reviewsReducer from './reviews';

export default combineReducers({
  restaurants: restaurantsReducer,
  reservations: reservationsReducer,
  reviews: reviewsReducer
});
