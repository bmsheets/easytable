import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS } from '../actions/reviews';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      const newState = merge({}, state);
      newState[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
