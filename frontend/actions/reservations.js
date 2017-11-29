import { postReservation } from '../utils/api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const createReservation = (formData) => dispatch => {
  return postReservation(formData).then(
    reservation => dispatch(receiveReservation(reservation)),
    err => dispatch(receiveReservationErrors(err.responseJSON)));
};
