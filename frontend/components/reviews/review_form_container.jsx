import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/reviews';
import { openModal } from '../../actions/ui';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.reviews
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: (review) => dispatch(createReview(review)),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
