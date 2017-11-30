import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      if (!Array.isArray(action.errors)) {
        console.log("action.errors is not an array for some reason.");
        return Array(action.errors);
      }
      return action.errors;
    default:
      return state;
  }
};
