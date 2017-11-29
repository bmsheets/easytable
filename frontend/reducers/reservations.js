import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS } from '../actions/reservations';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESERVATION:
      const newState = merge({}, state);
      newState[action.reservation.id] = action.reservation;
      return newState;
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    default:
      return state;
  }
};
