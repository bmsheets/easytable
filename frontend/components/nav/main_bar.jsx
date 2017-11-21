import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
  const authFeature = currentUser ? (
    <div className="user-dropdown">
      <a>Hi, {currentUser}!</a>
    </div>
  ) : (
    <div className="auth-buttons">
      <Link className="button signup-button" to="/signup">Sign up</Link>
      <Link className="button signin-button" to="/signin">Sign in</Link>
    </div>
  );

  return (
    <div className="bar main-bar">
      <div className="logo-links">
        <a>Logo Here</a>
        <a>Choose your location</a>
      </div>
      { authFeature }
   </div>
  );
};