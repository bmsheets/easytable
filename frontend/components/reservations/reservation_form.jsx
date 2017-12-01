import React from 'react';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 2,
      date: new Date().toDateString(),
      time: "6:00PM",
      booked: false
    };
    if (this.props.location) {
      // console.log("location.state", this.props.location.state);
      this.state = this.props.location.state;
      this.state.booked = false;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateReservation = this.generateReservation.bind(this);
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
    if (!this.props.currentUser) {
      this.props.openModal();
    } else {
      this.props.createReservation(this.generateReservation()).then(
        () => {
          this.setState({ booked: true });
          // console.log("Reservation booked. booked value: ", this.state.booked);
        }
      );
    }
  }

  generateReservation() {
    const time = new Date(this.state.date);
    time.setHours(12 + parseInt(this.state.time.split(":")[0]));
    time.setMinutes(parseInt(this.state.time.split(":")[1].slice(0, 2)));
    const restaurantId = this.props.restaurant.id;
    const reservation = {
      user_id: this.props.currentUser.id,
      restaurant_id: restaurantId,
      num_guests: this.state.partySize,
      time: time.toString()
    };
    return reservation;
  }

  render() {
    const restaurant = this.props.restaurant;
    if (!restaurant) { return null; }
    let user = this.props.currentUser;
    if (!user) { user = { email: "user@email.com" }; }
    let banner;
    if (this.state.booked) {
      banner = (<h1>Reservation booked.</h1>);
    } else {
      banner = (<h1>You're Almost Done!</h1>);
    }

    return (
      <div className="reservation-form-page">
        { banner }
        <div className="reservation-info">
          <div className="reservation-info-thumbnail"></div>
          <div className="reservation-info-block">
            <h2>GUESTS</h2>
            <h4>{this.state.partySize}</h4>
          </div>
          <div className="reservation-info-block">
            <h2>DATE</h2>
            <h4>{this.state.date}</h4>
          </div>
          <div className="reservation-info-block">
            <h2>TIME</h2>
            <h4>{this.state.time}</h4>
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
