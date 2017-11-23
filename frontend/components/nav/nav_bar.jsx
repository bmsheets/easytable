import React from 'react';
import UtilityBar from './utility_bar';
import MainBar from './main_bar';

export default ({ currentUser, logout }) => {
  return (
    <div className="bar nav-bar">
      <UtilityBar />
      <MainBar currentUser={currentUser} logout={logout}/>
   </div>
  );
};