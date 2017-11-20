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
      () => this.props.history.push('/')
    );
  }

  render() {
    return (
    <div>
      <h1>Signup Component</h1>
      <form>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleInput('firstName')}>
        </input>
        <input
          type="text"
          value={this.state.lastName}
          onChange={this.handleInput('lastName')}>
        </input>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleInput('email')}>
        </input>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleInput('password')}>
        </input>
        <input
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleInput('confirmPassword')}>
        </input>
        <button onClick={this.handleSubmit}>Create Account</button>
      </form>
    </div>
    );
  }
}

export default Signup;