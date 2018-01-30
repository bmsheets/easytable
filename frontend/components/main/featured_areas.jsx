import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class FeaturedAreas extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(searchTerm) {
    this.props.searchRestaurants(searchTerm).then(
      this.props.history.push('/restaurants')
    );
  }

  render() {
    return (
      <div className="featured-areas">
        <h3>Featured Areas</h3>
        <div className="location-boxes">
          <div className="location-box-1 darken-pseudo"
            onClick={() => this.search("New York")}><h4>New York</h4></div>
          <div className="location-box-2 darken-pseudo"
            onClick={() => this.search("Chicago")}><h4>Chicago</h4></div>
          <div className="location-box-3 darken-pseudo"
            onClick={() => this.search("Los Angeles")}><h4>Los Angeles</h4></div>
          <div className="location-box-4 darken-pseudo"
              onClick={() => this.search("San Francisco")}><h4>San Francisco</h4></div>
          <div className="location-box-5 darken-pseudo"
            onClick={() => this.search("Miami")}><h4>Miami</h4></div>
          <div className="location-box-6 darken-pseudo"
            onClick={() => this.search("Las Vegas")}><h4>Las Vegas</h4></div>
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
  }
}

export default withRouter(FeaturedAreas);
