import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class ReservationFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 1,
      date: new Date().toDateString(),
      time: '6:00 AM',
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
    this.props.history.push(
      this.props.match.url + '/reservations/new'
    );
  }

  renderReservationButtons() {
    return;
  }

  generatePartySizes() {
    const partySizes = [];
    partySizes.push(<option selected="selected" key="1" value="1">1 person</option>);
    for (let i = 2; i < 21; i++) {
      partySizes.push(<option key={i} value={i}>{i} people</option>);
    }
    partySizes.push(<option key="21" value={undefined}>Larger party</option>);
    return partySizes;
  }

  generateReservationTimes() {
    const times = [];
    for (let hour = 6; hour < 12; hour++) {
      times.push(hour + ":00 AM", hour + ":30 AM");
    }
    times.push("12:00 PM", "12:30 PM");
    for (let hour = 1; hour < 12; hour++) {
      times.push(hour + ":00 PM", hour + ":30 PM");
    }
    const reservationTimes = times.map((time, idx) => {
      return (<option key={idx} value={undefined}>{time}</option>);
    });
    return reservationTimes;
  }

  render() {
    if (!this.props.restaurant) { return null; }
    return (
      <div className="reservation-finder">
        <h1>Make a reservation</h1>
        <form className="reservation-finder-form">
          <div className="reservation-finder-row-1">
            <select
              className="reservation-finder-partysize"
              value={this.state.partySize}
              onChange={this.handleInput('partySize')}>
              {this.generatePartySizes()}
            </select>
            <input
              className="reservation-finder-date"
              type="date"
              value={this.state.date}
              onChange={this.handleInput('date')}></input>
            <select
              className="reservation-finder-time"
              value={this.state.time}
              onChange={this.handleInput('time')}>
              {this.generateReservationTimes()}
            </select>
            <Link
              to={{
                pathname: `/restaurants/${this.props.restaurant.id}/reservations/new`,
                state: this.state
              }}
              className="reservation-finder-button">Find a Table</Link>
          </div>
          <div className="reservation-finder-row-2">
            { this.renderReservationButtons() }
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReservationFinder);
