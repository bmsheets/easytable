import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.restaurant;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    if (!this.props.restaurant) { return null; }
    return (
    <div className="restaurant-show">
      <div className="restaurant-show-header">
        <div className="restaurant-show-banner"/>
          <a className="restaurant-index-item-thumbnail"
            style={{backgroundImage: `url(${this.props.restaurant.thumbnailUrl})`}}></a>
        <div className="restaurant-show-profile">
          <h1>{this.props.restaurant.name}</h1>
          <span>Rating</span>
        </div>
      </div>
      <div className="reservation-placeholder"></div>
      <div className="restaurant-show-about"></div>
    </div>
    );
  }
}

export default withRouter(RestaurantShow);
