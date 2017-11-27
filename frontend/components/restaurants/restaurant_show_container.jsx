import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurants';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => (
  {
  restaurant: state.entities.restaurants[parseInt(ownProps.match.params.restaurantId)]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
