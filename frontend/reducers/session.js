import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const defaultState = { currentUser: null };

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const user = action.user;
      return Object.assign({}, { currentUser: user });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};