import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="bar utility-bar">
      <div className="utility-links">
        <Link to="/restaurants/new">For Restaurateurs</Link>
      </div>
   </div>
  );
};
