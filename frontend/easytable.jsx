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
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
  defineUtils();
});

//For testing purposes
function defineUtils() {
  window.login = APIUtil.postSession;
  window.logout = APIUtil.deleteSession;
  window.createUser = APIUtil.postUser;
  window.testUser = {
    email: 'bob@mail.com',
    password: 'password'
  };
}