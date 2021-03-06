import React from 'react';
import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { fetchRestaurant } from '../../actions/restaurants';
import { createReservation } from '../../actions/reservations';
import { openModal } from '../../actions/ui';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[parseInt(
    ownProps.match.params.restaurantId)],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: () => dispatch(openModal()),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
  createReservation: (reservation) => dispatch(createReservation(reservation))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
