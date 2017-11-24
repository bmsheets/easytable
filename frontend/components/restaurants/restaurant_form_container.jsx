import React from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createRestaurant } from '../../actions/restaurants';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);
