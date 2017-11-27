import React from 'react';

class RestaurantIndexSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
    <div className="restaurant-index-search">
      <form className="searchbar-form">
        <select
          className="searchbar-partysize"
          value={this.state.partySize}
          onChange={this.handleInput('partySize')}>
          {this.renderOptions()}
        </select>
        <input
          className="searchbar-date"
          type="date"
          value={this.state.date}
          onChange={this.handleInput('date')}></input>
        <input
          className="searchbar-time"
          type="time"
          value={this.state.time}
          onChange={this.handleInput('time')}></input>
        <input
          className="searchbar-searchterm"
          placeholder="Location, Restaurant, or Cuisine"
          type="search"
          value={this.state.searchTerm}
          onChange={this.handleInput('searchTerm')}></input>
        <button onClick={this.handleSubmit}>Find a Table</button>
      </form>
    </div>);
  }
}

export default RestaurantIndexSearch;
