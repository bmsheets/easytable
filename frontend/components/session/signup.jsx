import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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

  render() {
    return (
    <div className="session">
      <form className="session-form">
        <h1>Welcome to EasyTable!</h1>
        <input
          type="text"
          value={this.state.firstName}
          placeholder="First Name *"
          onChange={this.handleInput('firstName')}>
        </input>
        <input
          type="text"
          value={this.state.lastName}
          placeholder="Last Name *"          
          onChange={this.handleInput('lastName')}>
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
          value={this.state.confirmPassword}
          placeholder="Re-Enter password *"
          onChange={this.handleInput('confirmPassword')}>
        </input>
        <button onClick={this.handleSubmit}>Create Account</button>
      </form>
    </div>
    );
  }
}

export default Signup;