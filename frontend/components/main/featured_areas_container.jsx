import React from 'react';
import { connect } from 'react-redux';
import FeaturedAreas from './featured_areas';
import { searchRestaurants } from '../../actions/restaurants';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchRestaurants: (searchTerm) => dispatch(searchRestaurants(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedAreas);
