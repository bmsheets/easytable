import React from 'react';
import NavBarContainer from './nav/nav_bar_container';
import MainPage from './main/main_page';
import Footer from './footer/footer';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';

export default() => (
  <div>
    <NavBarContainer />
    <MainPage />
    <Footer />
  </div>
);