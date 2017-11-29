export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const postRestaurant = (restaurant) => {
  return $.ajax({
    url: '/api/restaurants',
    method: 'POST',
    data: { restaurant }
  });
};

export const getRestaurants = () => {
  return $.ajax({
    url: '/api/restaurants',
    method: 'GET'
  });
};

export const getRestaurant = (restaurantId) => {
  return $.ajax({
    url: '/api/restaurants/' + restaurantId,
    method: 'GET'
  });
};

export const postSearch = (searchTerm) => {
  return $.ajax({
    url: '/api/restaurants/search',
    method: 'POST',
    data: { search_term: searchTerm }
  });
};

export const postReservation = (reservation) => {
  return $.ajax({
    url: '/api/reservations',
    method: 'POST',
    data: { reservation }
  });
};

export const postFavorite = (favorite) => {
  return $.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: { favorite }
  });
};

export const deleteFavorite = (favorite) => {
  return $.ajax({
    url: '/api/favorites',
    method: 'DELETE',
    data: { favorite }
  });
};
