import React from 'react';
import { Link, Button } from 'react-router-dom';

export default ({id, name, city, state, country, cuisine, thumbnailUrl}) => {
  const linkPath = "restaurants/" + id;
  return (
    <li className="restaurant-index-item">
      <div className="restaurant-index-item-col-1">
        <a className="restaurant-index-item-thumbnail"
          style={{backgroundImage: `url(${thumbnailUrl})`}}></a>
      </div>
      <div className="restaurant-index-item-col-2">
        <Link
          className="restaurant-index-item-name"
          to={linkPath}>
          {name}
        </Link>
        <div className="restaurant-index-item-row-1">
          City: {city}
        </div>
        <div className="restaurant-index-item-row-2">
          State: {state}
        </div>
        <div className="restaurant-index-item-row-3">
          Country: {country}
        </div>
        <div className="restaurant-index-item-row-4">
          Cuisine: {cuisine}
        </div>
        <div className="restaurant-index-item-row-5">
          <Link
            className="view-reservations-button"
            to={linkPath}>
            View Reservations
          </Link>
        </div>
      </div>
    </li>
  );
};
