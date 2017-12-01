import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/nav_bar';
import MainPage from './main/main_page';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantFormContainer from './restaurants/restaurant_form_container';
import ReservationFormContainer from './reservations/reservation_form_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import Footer from './footer/footer';

export default() => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/restaurants/:restaurantId/reservations/new" component={ReservationFormContainer} />
      <Route path="/restaurants/new" component={RestaurantFormContainer} />
      <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Route path="/restaurants" component={RestaurantIndexContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
    <Footer />
  </div>
);
