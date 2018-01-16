import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: '',
      date: '',
      time: '',
      searchTerm: ''
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
    this.props.searchRestaurants(this.state.searchTerm).then(
      this.props.history.push('/restaurants')
    );
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
    return (
      <div className="searchbar">
        <h1>Make restaurant reservations the easy way</h1>
        <form className="searchbar-form">
          <select
            className="searchbar-partysize"
            value={this.state.partySize}
            onChange={this.handleInput('partySize')}>
            {this.generatePartySizes()}
          </select>
          <input
            className="searchbar-date"
            type="date"
            value={this.state.date}
            onChange={this.handleInput('date')}></input>
          <select
            className="searchbar-time"
            value={this.state.time}
            onChange={this.handleInput('time')}>
            {this.generateReservationTimes()}
          </select>
          <i className="fa fa-search searchbar-icon" aria-hidden="true"></i>
          <input
            id="searchterm"
            className="searchbar-searchterm"
            placeholder="Location, Restaurant, or Cuisine"
            type="search"
            value={this.state.searchTerm}
            onChange={this.handleInput('searchTerm')}></input>
          <button onClick={this.handleSubmit}>Find a Table</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
