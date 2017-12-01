import React from 'react';

export default ({ body, rating }) => {
  return (
    <div className="review">
      <span className="review-rating">{"Rating: " + rating}</span>
      <p className="review-body">{body}</p>
    </div>
  );
};
