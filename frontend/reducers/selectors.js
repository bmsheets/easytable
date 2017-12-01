export const reviewsByRestaurantId = (state, restaurantId) => {
  const reviews = Object.values(state.entities.reviews);
  return reviews.filter(
    review => review.restaurantId === restaurantId
  );
};
