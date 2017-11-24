import React from 'react';

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
    this.props.createRestaurant(this.state);
  }

  render() {
    return (
      <div className="restaurant-form-container">
        <form className="restaurant-form">
          <h1>Restaurant Form</h1>
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
              placeholder="State *"
              onChange={this.handleInput('state')}>
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
              type="number"
              value={this.state.zip_code}
              placeholder="Restaurant Zip Code *"
              onChange={this.handleInput('zip_code')}>
            </input>
            <input
              type="number"
              value={this.state.capacity}
              placeholder="Restaurant Capacity *"
              onChange={this.handleInput('capacity')}>
            </input>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
