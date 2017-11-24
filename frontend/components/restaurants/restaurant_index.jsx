import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants()
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
      <ul className="restaurant-index">
        {
          this.props.restaurants.map(restaurant => (
            <RestaurantIndexItem
              key={restaurant.id}
              name={restaurant.name}/>
          ))
        }
      </ul>
    );
  }
}

export default RestaurantIndex;
