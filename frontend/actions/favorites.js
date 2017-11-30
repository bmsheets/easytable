import { postFavorite, deleteFavorite } from '../utils/api_util';
import { receiveRestaurant } from './restaurants';

export const favoriteRestaurant = restaurantId => dispatch => {
  return postFavorite(restaurantId).then(
    restaurant => dispatch(receiveRestaurant(restaurant))
  );
};

export const unfavoriteRestaurant = restaurantId => dispatch => {
  return deleteFavorite(restaurantId).then(
    restaurant => dispatch(receiveRestaurant(restaurant))
  );
};
