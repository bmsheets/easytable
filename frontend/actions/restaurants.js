import { postRestaurant, getRestaurants, getRestaurant, postSearch } from '../utils/api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

const receiveRestaurantErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
});

export const createRestaurant = (formData) => dispatch => {
  return postRestaurant(formData).then(
    restaurant => dispatch(receiveRestaurant(restaurant)),
    err => dispatch(receiveRestaurantErrors(err.responseJSON)));
};

export const fetchRestaurants = () => dispatch => {
  return getRestaurants().then(
    restaurants => dispatch(receiveRestaurants(restaurants))
  );
};

export const fetchRestaurant = (restaurantId) => dispatch => {
  console.log("calling fetchRestaurant action creator");
  return getRestaurant(restaurantId).then(
    restaurant => dispatch(receiveRestaurant(restaurant))
  );
};

export const searchRestaurants = (searchTerm) => dispatch => {
  return postSearch(searchTerm).then(
    restaurants => dispatch(receiveRestaurants(restaurants))
  );
};
