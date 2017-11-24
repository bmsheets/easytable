import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(
      () => {
        this.props.closeModal();
      }
    );
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: 'guest@mail.com',
      password: 'password'
    };
    this.props.login(demoUser).then(
      () => this.props.closeModal()
    )
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
        <h1>Please sign in</h1>
        { this.renderErrors() }
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
        <button className="session-button" onClick={this.handleSubmit}>Sign In</button>
        <button className="demo-button" onClick={this.handleDemo}>Demo</button>
      </form>
    </div>
    );
  }
}

export default Signin;
