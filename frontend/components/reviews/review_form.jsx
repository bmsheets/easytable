import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      food: '',
      ambiance: '',
      service: '',
      value: '',
      restaurant_id: this.props.restaurant.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  render() {
    return (
      <div className="review-form-container">
        <form className="review-form">
          <textarea
            className="review-form-body"
            value={this.state.body}
            onChange={this.handleInput('body')}
            placeholder="Your Review Here"></textarea>
          <div className="review-form-row-2">
            <input
              className="review-form-rating"
              value={this.state.food}
              onChange={this.handleInput('food')}
              placeholder="Food (0 to 5)"></input>
            <input
              className="review-form-rating"
              value={this.state.ambiance}
              onChange={this.handleInput('ambiance')}
              placeholder="Ambiance (0 to 5)"></input>
            <input
              className="review-form-rating"
              value={this.state.service}
              onChange={this.handleInput('service')}
              placeholder="Service (0 to 5)"></input>
            <input
              className="review-form-rating"
              value={this.state.value}
              onChange={this.handleInput('value')}
              placeholder="Value (0 to 5)"></input>
            <button
              className="review-form-button"
              onClick={this.handleSubmit}>Submit Review</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
