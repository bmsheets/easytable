import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import SigninContainer from '../session/signin_container';
import SignupContainer from '../session/signup_container';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: ''
    };
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSignin() {
    this.props.openModal();
    this.setState({formType: "signin"});
  }

  handleSignup() {
    this.props.openModal();
    this.setState({formType: "signup"});
  }

  handleSignout() {
    this.props.logout();
  }

  handleClose() {
    this.props.closeModal();
    this.props.clearErrors();
  }

  render() {
    let authFeature;
    if (this.props.currentUser) {
      const name = this.props.currentUser.firstName ? (
        this.props.currentUser.firstName
      ) : (
        this.props.currentUser.email
      );
      authFeature = (
        <div className="user-dropdown">
          <a className="user-welcome">Hi, {name}!</a>
          <button
            className="button signout-button"
            onClick={this.handleSignout}>Sign out</button>
        </div>
      );
    } else {
      const sessionForm = this.state.formType === "signup" ? (
        <SignupContainer />
      ) : (
        <SigninContainer />
      );

      authFeature = (
        <div className="auth-buttons">
          <button className="button signup-button" onClick={this.handleSignup}>Sign up</button>
          <button className="button" onClick={this.handleSignin}>Sign in</button>
          <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.handleClose}
            className="modal"
            overlayClassName="overlay">
            { sessionForm }
          </Modal>
        </div>
      );
    }

    return (
      <div className="bar main-bar">
        <div className="logo-links">
          <i className="fa fa-circle-o fa-2x"></i>
          <Link className="company-name" to="/" replace>EasyTable</Link>
          <a className="location-dropdown">Choose your location</a>
        </div>
        { authFeature }
      </div>
    );
  }
}

export default MainNav;
