import React from 'react';

export default ({key, name, city, state, country, cuisine}) => {
  return (
    <li className="restaurant-index-item">
      <div className="restaurant-index-item-col-1">
        <a className="restaurant-index-item-thumbnail"></a>
      </div>
      <div className="restaurant-index-item-col-2">
        <a className="restaurant-index-item-name">{name}</a>
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
