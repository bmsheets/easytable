import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      food: 0,
      ambiance: 0,
      service: 0,
      value: 0,
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
    console.log("creating review with: ", this.state);
    this.props.createReview(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <textarea
            value={this.state.body}
            onChange={this.handleInput('body')}
            placeholder="Your Review Here"></textarea>
          <input
            value={this.state.food}
            onChange={this.handleInput('food')}
            placeholder="Food"></input>
          <input
            value={this.state.ambiance}
            onChange={this.handleInput('ambiance')}
            placeholder="Ambiance"></input>
          <input
            value={this.state.service}
            onChange={this.handleInput('service')}
            placeholder="Service"></input>
          <input
            value={this.state.value}
            onChange={this.handleInput('value')}
            placeholder="Value"></input>
          <button onClick={this.handleSubmit}>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
