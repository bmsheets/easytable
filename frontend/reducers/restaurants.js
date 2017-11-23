import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurants';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANT:
      const newState = merge({}, state);
      newState[action.restaurant.id] = action.restaurant;
      return newState;
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};
