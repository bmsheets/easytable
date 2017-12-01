import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS } from '../actions/reviews';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
    case RECEIVE_REVIEWS:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
