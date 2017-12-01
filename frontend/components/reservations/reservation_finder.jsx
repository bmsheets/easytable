import React from 'react';

class ReservationFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: '',
      date: '',
      time: '',
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
  }

  renderReservationButtons() {
    return;
  }

  generatePartySizes() {
    const partySizes = [];
    partySizes.push(<option key="1" value="1">1 person</option>);
    for (let i = 2; i < 21; i++) {
      partySizes.push(<option key={i} value={i}>{i} people</option>);
    }
    partySizes.push(<option key="21" value={undefined}>Larger party</option>);
    return partySizes;
  }

  generateReservationTimes() {
    const reservationTimes = [];
    reservationTimes.push(<option key="1" value={undefined}>4:30 PM</option>);
    for (let i = 2, hour = 5; hour < 12; i += 2, hour++) {
      reservationTimes.push(<option key={i} value={undefined}>{hour}:00 PM </option>);
      reservationTimes.push(<option key={i + 1} value={undefined}>{hour}:30 PM </option>);
    }
    return reservationTimes;
  }

  render() {
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
            <button
              className="reservation-finder-button"
              onClick={this.handleSubmit}>Find a Table</button>
          </div>
          <div className="reservation-finder-row-2">
            { this.renderReservationButtons() }
          </div>
        </form>
      </div>
    );
  }
}

export default ReservationFinder;
