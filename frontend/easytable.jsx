import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';
import Modal from 'react-modal';

import * as APIUtil from './utils/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
  defineUtils();
});

//For testing purposes
function defineUtils() {
  window.getState = window.store.getState;
  window.login = APIUtil.postSession;
  window.logout = APIUtil.deleteSession;
  window.createUser = APIUtil.postUser;
  window.search = APIUtil.postSearch;
  window.getRestaurant = APIUtil.getRestaurant;
  window.testUser = {
    email: 'bob@mail.com',
    password: 'password'
  };
  window.createRestaurant = APIUtil.postRestaurant;
  window.testRestaurant = {
    name: "Burger King",
    city: "Detroit",
    country: "Lithuania",
    capacity: 9000,
    cuisine: "Burgers"
  };
  window.createReservation = APIUtil.postReservation;
  window.testReservation = {
    user_id: 1,
    restaurant_id: 1,
    time: new Date().toString(),
    num_guests: 2
  };
}
