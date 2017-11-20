import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Enter email *',
      password: 'Enter password *',
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
    this.props.login(this.state).then(
      () => this.props.history.push('/')
    );
  }

  render() {
    return (
    <div>
      <h1>Signin Component</h1>
      <form>
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
        <button onClick={this.handleSubmit}>Sign In</button>
      </form>
    </div>
    );
  }
}

export default Signin;