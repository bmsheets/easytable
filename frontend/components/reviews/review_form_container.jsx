import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/reviews';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
