import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';

export default combineReducers({
  restaurants: restaurantsReducer
});
