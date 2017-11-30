import { postFavorite, deleteFavorite } from '../utils/api_util';
import { receiveCurrentUser } from './session';



export const favoriteRestaurant = restaurantId => dispatch => {
  return postFavorite(restaurantId).then(
    user => dispatch(receiveCurrentUser(user))
  );
};

export const unfavoriteRestaurant = restaurantId => dispatch => {
  return deleteFavorite(restaurantId).then(
    user => dispatch(receiveCurrentUser(user))
  );
};
