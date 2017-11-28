import React from 'react';
import { connect } from 'react-redux';
import RestaurantIndexSearch from './restaurant_index_search';
import { searchRestaurants } from '../../actions/restaurants';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchRestaurants: (searchTerm) => dispatch(searchRestaurants(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexSearch);
