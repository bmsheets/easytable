import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import ReservationFinderContainer from '../reservations/reservation_finder_container';
import Review from '../reviews/review';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: this.props.restaurant,
      reviews: this.props.reviews
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    console.log("fetching reviews with id: ", this.props.match.params.restaurantId);
    this.props.fetchReviewsByRestaurant(this.props.match.params.restaurantId);
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
    if (!this.props.currentUser) {
      this.props.openModal();
      return;
    }
    if (this.isFavorite()) {
      this.props.unfavoriteRestaurant(this.props.restaurant.id);
    } else {
      this.props.favoriteRestaurant(this.props.restaurant.id);
    }
  }

  isFavorite() {
    const user = this.props.currentUser;
    return user && user.favorites && user.favorites.some(
      favorite => (favorite.restaurant_id === this.props.restaurant.id)
    );
  }

  averageRating(review) {
    return Math.round(
      (review.food + review.ambiance + review.service + review.value) / 4
    );
  }

  renderReviews() {
    return this.props.reviews.map((review, idx) => (
      <Review
        key={idx}
        body={review.body}
        rating={this.averageRating(review)} />
    ));
  }

  render() {
    if (!this.props.restaurant) { return null; }
    const favoriteButton = this.isFavorite() ? (
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
            <a className="restaurant-show-thumbnail"
              style={{backgroundImage: `url(${this.props.restaurant.thumbnailUrl})`}}></a>
          <div className="restaurant-show-profile">
            <h1>{this.props.restaurant.name}</h1>
            <span>Rating</span>
            { favoriteButton }
          </div>
        </div>
        <ReservationFinderContainer />
        <div className="restaurant-show-about"></div>
        <div className="reviews-container">
          <h1 className="reviews-header">Reviews</h1>
          { this.renderReviews() }
        </div>
        <ReviewFormContainer restaurant={this.props.restaurant}/>
      </div>
    );
  }
}

export default RestaurantShow;
