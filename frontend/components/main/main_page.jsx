import React from 'react';
import RestaurantFormContainer from '../restaurants/restaurant_form_container';
import RestaurantIndexContainer from '../restaurants/restaurant_index_container';

export default () => {
  return (
    <div className="main-page">
      <div className="banner-image"/>
      <RestaurantIndexContainer />
   </div>
  );
};
