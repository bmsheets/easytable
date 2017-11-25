import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './nav/nav_bar';
import MainPage from './main/main_page';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantFormContainer from './restaurants/restaurant_form_container';
import Footer from './footer/footer';

export default() => (
  <div>
    <NavBar />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/restaurants" component={RestaurantIndexContainer} />
    <Route exact path="/restaurants/new" component={RestaurantFormContainer} />
    <Footer />
  </div>
);
