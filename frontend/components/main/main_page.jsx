import React from 'react';
import RestaurantFormContainer from '../restaurants/restaurant_form_container';
import RestaurantIndexContainer from '../restaurants/restaurant_index_container';
import SearchBarContainer from './search_bar_container';
import FeaturedAreasContainer from './featured_areas_container';

export default () => {
  return (
    <div className="main-page">
      <div className="banner-image"/>
      <SearchBarContainer />
      <FeaturedAreasContainer />
   </div>
  );
};
