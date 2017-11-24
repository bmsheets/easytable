import React from 'react';

export default ({key, name}) => {
  return (
    <li className="restaurant-index-item">
      <div className="restaurant-index-item-col-1">
        <a className="restaurant-index-item-thumbnail"></a>
      </div>
      <div className="restaurant-index-item-col-2">
        <a className="restaurant-index-item-name">{name}</a>
        <div className="restaurant-index-item-row-1">
          row 1
        </div>
        <div className="restaurant-index-item-row-2">
          row 2
        </div>
        <div className="restaurant-index-item-row-3">
          row 3
        </div>
        <div className="restaurant-index-item-row-4">
          row 4
        </div>
        <div className="restaurant-index-item-row-5">
          row 5
        </div>
      </div>
    </li>
  );
};
