import React from 'react';
import UtilityBar from './utility_bar';
import MainBarContainer from './main_bar_container';

export default ({ currentUser, logout, clearErrors }) => {
  return (
    <div className="bar nav-bar">
      <UtilityBar />
      <MainBarContainer />
   </div>
  );
};
