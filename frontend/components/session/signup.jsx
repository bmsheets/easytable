import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
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
    this.props.createUser(this.state).then(
      () => {
        this.props.closeModal();
      }
    );
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, idx) => (
          <li className="error" key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className="session">
      <form className="session-form">
        <h1>Welcome to EasyTable!</h1>
        { this.renderErrors() }
        <input
          type="text"
          value={this.state.first_name}
          placeholder="First Name *"
          onChange={this.handleInput('first_name')}>
        </input>
        <input
          type="text"
          value={this.state.last_name}
          placeholder="Last Name *"
          onChange={this.handleInput('last_name')}>
        </input>
        <input
          type="text"
          value={this.state.email}
          placeholder="Enter email *"
          onChange={this.handleInput('email')}>
        </input>
        <input
          type="password"
          value={this.state.password}
          placeholder="Enter password *"
          onChange={this.handleInput('password')}>
        </input>
        <input
          type="password"
          value={this.state.confirm_password}
          placeholder="Re-Enter password *"
          onChange={this.handleInput('confirm_password')}>
        </input>
        <button onClick={this.handleSubmit}>Create Account</button>
      </form>
    </div>
    );
  }
}

export default Signup;
