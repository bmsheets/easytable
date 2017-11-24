import React from 'react';
import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurants';

const mapStateToProps = (state, ownProps) => ({
  restaurants: Object.keys(state.entities.restaurants).map(id => state.entities.restaurants[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
