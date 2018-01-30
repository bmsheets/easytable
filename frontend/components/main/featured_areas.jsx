import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { searchRestaurants } from '../../actions/restaurants';

export default withRouter((props) => {
  return (
    <div className="featured-areas">
      <h3>Featured Areas</h3>
      <div className="location-boxes">
        <div className="location-box-1"
          onClick={() => {
            console.log(props);
            searchRestaurants("New York")(window.store.dispatch).then(
              props.history.push('/restaurants')
            );
          }}></div>
        <div className="location-box-2"></div>
        <div className="location-box-3"></div>
        <div className="location-box-4"></div>
        <div className="location-box-5"></div>
        <div className="location-box-6"></div>
      </div>
      <div className="location-links">
        <div className="location-col">
          <ul>
            <li>Atlanta</li>
            <li>Chicago</li>
            <li>Dallas</li>
            <li>Denver</li>
            <li>Detroit</li>
          </ul>
        </div>
        <div className="location-col">
          <ul>
            <li>Houston</li>
            <li>Indiana</li>
            <li>Las Vegas</li>
            <li>Los Angeles</li>
            <li>Miami</li>
          </ul>
        </div>
        <div className="location-col">
          <ul>
            <li>Milwaukee</li>
            <li>New England</li>
            <li>New York</li>
            <li>Orlando</li>
            <li>Philadelphia</li>
          </ul>
        </div>
        <div className="location-col">
          <ul>
            <li>Portland</li>
            <li>Richmond</li>
            <li>San Francisco</li>
            <li>Seattle</li>
            <li>Washington DC</li>
          </ul>
        </div>
      </div>
   </div>
  );
});
