import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      state: '',
      country: '',
      address: '',
      phone_number: '',
      zip_code: '',
      capacity: '',
      cuisine: ''
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
    this.props.createRestaurant(this.state).then(() => {
      const targetName = this.state.name;
      const newRestaurant = Object.values(this.props.restaurants).find(
        restaurant => (restaurant.name === targetName)
      );
      this.props.history.push("/restaurants/" + newRestaurant.id);
    });
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, idx) => (
          <li className="error" key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="restaurant-form-container">
        <form className="restaurant-form">
          <h1>Restaurant Form</h1>
          { this.renderErrors() }
          <div className="restaurant-form-col-1">
            <input
              type="text"
              value={this.state.name}
              placeholder="Restaurant Name *"
              onChange={this.handleInput('name')}>
            </input>
            <input
              type="text"
              value={this.state.city}
              placeholder="City *"
              onChange={this.handleInput('city')}>
            </input>
          </div>
          <div className="restaurant-form-col-2">
            <input
              type="text"
              value={this.state.state}
              placeholder="State/Province *"
              onChange={this.handleInput('state')}>
            </input>
            <input
              type="text"
              value={this.state.zip_code}
              placeholder="Zip/Postal Code *"
              onChange={this.handleInput('zip_code')}>
            </input>
            <input
              type="text"
              value={this.state.country}
              placeholder="Country *"
              onChange={this.handleInput('country')}>
            </input>
          </div>
          <div className="restaurant-form-col-3">
            <input
              type="text"
              value={this.state.address}
              placeholder="Address *"
              onChange={this.handleInput('address')}>
            </input>
            <input
              type="text"
              value={this.state.phone_number}
              placeholder="Phone Number *"
              onChange={this.handleInput('phone_number')}>
            </input>
          </div>
          <div className="restaurant-form-col-4">
            <input
              type="text"
              value={this.state.cuisine}
              placeholder="Cuisine *"
              onChange={this.handleInput('cuisine')}>
            </input>
            <input
              type="text"
              value={this.state.capacity}
              placeholder="Restaurant Capacity *"
              onChange={this.handleInput('capacity')}>
            </input>
          </div>
          <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RestaurantForm);
