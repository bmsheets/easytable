import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurants';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchRestaurants: (searchTerm) => dispatch(searchRestaurants(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
