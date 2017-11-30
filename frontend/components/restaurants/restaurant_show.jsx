import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.restaurant;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
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

  toggleFavorite(e) {
    e.preventDefault();
    if (!this.props.currentUser) { return; }
    if (this.props.restaurant.likedByCurrentUser) {
      this.props.unfavoriteRestaurant(this.props.restaurant.id);
    } else {
      this.props.favoriteRestaurant(this.props.restaurant.id);
    }
  }

  render() {
    if (!this.props.restaurant) { return null; }
    const favoriteButton = this.props.restaurant.likedByCurrentUser ? (
      <a className="favorite-button"
         onClick={ this.toggleFavorite }>
        <i className="fa fa-heart"
           aria-hidden="true"></i> Favorited
      </a>
    ) : (
      <a className="favorite-button"
         onClick={ this.toggleFavorite }>
        <i className="fa fa-heart-o"
           aria-hidden="true"></i> Add to Favorites
      </a>
    );

    return (
      <div className="restaurant-show">
        <div className="restaurant-show-header">
          <div className="restaurant-show-banner"/>
            <a className="restaurant-index-item-thumbnail"
              style={{backgroundImage: `url(${this.props.restaurant.thumbnailUrl})`}}></a>
          <div className="restaurant-show-profile">
            <h1>{this.props.restaurant.name}</h1>
            <span>Rating</span>
            { favoriteButton }
          </div>
        </div>
        <div className="reservation-placeholder"></div>
        <div className="restaurant-show-about"></div>
      </div>
    );
  }
}

export default RestaurantShow;
