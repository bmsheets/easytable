import React from 'react';
import Modal from 'react-modal';
import SigninContainer from '../session/signin_container';
import SignupContainer from '../session/signup_container';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSignin() {
    this.setState({ modalOpen: true, formType: "signin" });
  }

  handleSignup() {
    this.setState({ modalOpen: true, formType: "signup" });
  }

  handleSignout() {
    this.props.logout();
  }

  render() {

    let authFeature;
    if (this.props.currentUser) {
      authFeature = (
        <div className="user-dropdown">
          <a className="user-welcome">Hi, {this.props.currentUser.email}!</a>
          <button 
            className="button signout-button"
            onClick={this.handleSignout}>Sign out</button>
        </div>
      );
    } else {
      const sessionForm = this.state.formType === "signin" ? (
        <SigninContainer closeModal={this.closeModal}/>
      ) : (
        <SignupContainer closeModal={this.closeModal}/>
      );
      
      authFeature = (
        <div className="auth-buttons">
          <button className="button signup-button" onClick={this.handleSignup}>Sign up</button>
          <button className="button" onClick={this.handleSignin}>Sign in</button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
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
          <a>EasyTable</a>
          <a>Choose your location</a>
        </div>
        { authFeature }
      </div>
    );
  }
}

export default MainNav;