import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexSearch extends React.Component {
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
    <div className="index-search">
      <form className="index-search-form">
        <select
          className="index-search-partysize"
          value={this.state.partySize}
          onChange={this.handleInput('partySize')}>
          {this.generatePartySizes()}
        </select>
        <input
          className="index-search-date"
          type="date"
          value={this.state.date}
          onChange={this.handleInput('date')}></input>
        <select
          className="index-search-time"
          value={this.state.time}
          onChange={this.handleInput('time')}>
          {this.generateReservationTimes()}
        </select>
        <i className="fa fa-search index-search-icon" aria-hidden="true"></i>
        <input
          id="index-searchterm"
          className="index-search-searchterm"
          placeholder="Location, Restaurant, or Cuisine"
          type="search"
          value={this.state.searchTerm}
          onChange={this.handleInput('searchTerm')}></input>
        <button onClick={this.handleSubmit}>Find a Table</button>
      </form>
    </div>);
  }
}

export default withRouter(RestaurantIndexSearch);
