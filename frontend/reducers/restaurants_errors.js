import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS } from '../actions/restaurants';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANT:
    case RECEIVE_RESTAURANTS:
      return [];
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
