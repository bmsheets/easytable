import React from 'react';
import UtilityBar from './utility_bar';
import MainBar from './main_bar';

export default ({ currentUser, logout, clearErrors }) => {
  return (
    <div className="bar nav-bar">
      <UtilityBar />
      <MainBar currentUser={currentUser} logout={logout} clearErrors={clearErrors}/>
   </div>
  );
};
