import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import reservationsReducer from './reservations';

export default combineReducers({
  restaurants: restaurantsReducer,
  reservations: reservationsReducer
});
