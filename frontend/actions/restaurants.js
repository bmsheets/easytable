import { postRestaurant, getRestaurants, postSearch } from '../utils/api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const createRestaurant = (formData) => dispatch => {
  return postRestaurant(formData).then(
    restaurant => dispatch(receiveRestaurant(restaurant)));
};

export const fetchRestaurants = () => dispatch => {
  return getRestaurants().then(
    restaurants => dispatch(receiveRestaurants(restaurants))
  );
};

export const searchRestaurants = (searchTerm) => dispatch => {
  return postSearch(searchTerm).then(
    restaurants => dispatch(receiveRestaurants(restaurants))
  );
};
