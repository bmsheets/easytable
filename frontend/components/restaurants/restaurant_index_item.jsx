import React from 'react';
import { Link } from 'react-router-dom';

export default ({key, id, name, city, state, country, cuisine}) => {
  const linkPath = "restaurants/" + id;
  return (
    <li className="restaurant-index-item">
      <div className="restaurant-index-item-col-1">
        <a className="restaurant-index-item-thumbnail"></a>
      </div>
      <div className="restaurant-index-item-col-2">
        <Link
          className="restaurant-index-item-name"
          to={linkPath}>
          {name}
        </Link>
        <div className="restaurant-index-item-row-1">
          city: {city}
        </div>
        <div className="restaurant-index-item-row-2">
          state: {state}
        </div>
        <div className="restaurant-index-item-row-3">
          country: {country}
        </div>
        <div className="restaurant-index-item-row-4">
          cuisine: {cuisine}
        </div>
        <div className="restaurant-index-item-row-5">
          reservations
        </div>
      </div>
    </li>
  );
};
