import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
// import SearchBarContainer from '../main/search_bar_container';
import RestaurantIndexSearchContainer from './restaurant_index_search_container';

class RestaurantIndex extends React.Component {
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
      <div className="restaurant-index">
        <RestaurantIndexSearchContainer />
        <ul className="restaurant-index-list">
          {
            this.props.restaurants.map(restaurant => (
              <RestaurantIndexItem
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                city={restaurant.city}
                state={restaurant.state}
                country={restaurant.country}
                cuisine={restaurant.cuisine}
                thumbnailUrl={restaurant.thumbnailUrl}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default RestaurantIndex;
