import React from 'react';
import UtilityBar from './utility_bar';
import MainBar from './main_bar';

export default ({ currentUser }) => {
  return (
    <div className="bar nav-bar">
      <UtilityBar />
      <MainBar currentUser={currentUser}/>
   </div>
  );
};