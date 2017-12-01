import React from 'react';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
    const restaurant = this.props.restaurant;
    if (!restaurant) { return null; }
    let user = this.props.currentUser;
    if (!user) { user = { email: "user@email.com" }; }
    console.log("user is: ", user);
    return (
      <div className="reservation-form-page">
        <h1>You're Almost Done!</h1>
        <div className="reservation-info">
          <div className="reservation-info-thumbnail"></div>
          <div className="reservation-info-block">
            <h2>GUESTS</h2>
            <h4>1 person</h4>
          </div>
          <div className="reservation-info-block">
            <h2>DATE</h2>
            <h4>Friday, December 1, 2017</h4>
          </div>
          <div className="reservation-info-block">
            <h2>TIME</h2>
            <h4>6:00PM</h4>
          </div>
          <div className="reservation-info-block">
            <h2>RESTAURANT</h2>
            <h4>{restaurant.name}</h4>
          </div>
        </div>
        <form className="reservation-form">
          <input
            onChange={this.handleInput('phone_number')}
            placeholder="Phone Number"></input>
          <input
            value={user.email}
            disabled="true"
            style={{backgroundColor: "rgb(247, 247, 247)"}}></input>
          <select>
            <option>Select an Occasion (optional)</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Date Night</option>
            <option>Business Meal</option>
            <option>Celebration</option>
          </select>
          <input
            placeholder="Add a special request (optional)"></input>
          <button
            onClick={this.handleSubmit}>Complete Reservation</button>
        </form>
      </div>
    );
  }
}

export default ReservationForm;
