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
