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
              <li onClick={() => this.search("Atlanta")}><a>Atlanta</a></li>
              <li onClick={() => this.search("Boston")}><a>Boston</a></li>
              <li onClick={() => this.search("Chicago")}><a>Chicago</a></li>
              <li onClick={() => this.search("Dallas")}><a>Dallas</a></li>
              <li onClick={() => this.search("Denver")}><a>Denver</a></li>
            </ul>
          </div>
          <div className="location-col">
            <ul>
              <li onClick={() => this.search("Detroit")}><a>Detroit</a></li>
              <li onClick={() => this.search("Houston")}><a>Houston</a></li>
              <li onClick={() => this.search("Indiana")}><a>Indiana</a></li>
              <li onClick={() => this.search("Las Vegas")}><a>Las Vegas</a></li>
              <li onClick={() => this.search("Los Angeles")}><a>Los Angeles</a></li>
            </ul>
          </div>
          <div className="location-col">
            <ul>
              <li onClick={() => this.search("Miami")}><a>Miami</a></li>
              <li onClick={() => this.search("Milwaukee")}><a>Milwaukee</a></li>
              <li onClick={() => this.search("New York")}><a>New York</a></li>
              <li onClick={() => this.search("Orlando")}><a>Orlando</a></li>
              <li onClick={() => this.search("Philadelphia")}><a>Philadelphia</a></li>
            </ul>
          </div>
          <div className="location-col">
            <ul>
              <li onClick={() => this.search("Portland")}><a>Portland</a></li>
              <li onClick={() => this.search("Richmond")}><a>Richmond</a></li>
              <li onClick={() => this.search("San Francisco")}><a>San Francisco</a></li>
              <li onClick={() => this.search("Seattle")}><a>Seattle</a></li>
              <li onClick={() => this.search("Washington DC")}><a>Washington DC</a></li>
            </ul>
          </div>
        </div>
     </div>
    );
  }
}

export default withRouter(FeaturedAreas);
