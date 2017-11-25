import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party_size: '',
      date: '',
      time: '',
      search_term: ''
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

  renderOptions() {
    const options = [];
    options.push(<option key="1" value="1">1 person</option>);
    for (let i = 2; i < 21; i++) {
      options.push(<option key={i} value={i}>{i} people</option>);
    }
    options.push(<option key="21" value={undefined}>Larger party</option>);
    return options;
  }

  render() {
    return (
      <div className="searchbar">
        <h1>Make restaurant reservations the easy way</h1>
        <form className="searchbar-form">
          <select
            className="searchbar-partysize"
            value={this.state.party_size}
            onChange={this.handleInput('party_size')}>
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
            value={this.state.search_term}
            onChange={this.handleInput('search_term')}></input>
          <button onClick={this.handleSubmit}>Find a Table</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
