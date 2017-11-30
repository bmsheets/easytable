import { postReview, patchReview, deleteReview } from '../utils/api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const createReview = (formData) => dispatch => {
  return postReview(formData).then(
    review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const updateReview = (formData) => dispatch => {
  return patchReview(formData).then(
    review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const destroyReview = (id) => dispatch => {
  return deleteReview(id).then(
    review => dispatch(removeReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)));
};
