import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';

import * as APIUtil from './utils/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<Root store={store} />, root);
  defineUtils();
});

function defineUtils() {
  window.login = APIUtil.postSession;
  window.logout = APIUtil.deleteSession;
  window.createUser = APIUtil.postUser;
  window.testUser = {
    username: 'bob',
    email: 'bob@mail.com',
    password: 'password'
  };
}