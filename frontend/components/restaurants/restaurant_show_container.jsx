import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurants';
import { favoriteRestaurant, unfavoriteRestaurant } from '../../actions/favorites';
import { openModal } from '../../actions/ui';
import { receiveCurrentUser } from '../../actions/session';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => (
  {
  restaurant: state.entities.restaurants[parseInt(ownProps.match.params.restaurantId)],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id)),
  openModal: () => dispatch(openModal()),
  favoriteRestaurant: (restaurantId) => dispatch(favoriteRestaurant(restaurantId)),
  unfavoriteRestaurant: (restaurantId) => dispatch(unfavoriteRestaurant(restaurantId)),
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
