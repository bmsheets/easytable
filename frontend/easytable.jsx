import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { login, logout, createUser } from './utils/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
  defineUtils();
});

function defineUtils() {
  window.login = login;
  window.logout = logout;
  window.createUser = createUser;
  window.testUser = {
    username: 'bob',
    email: 'bob@mail.com',
    password: 'password'
  };
}