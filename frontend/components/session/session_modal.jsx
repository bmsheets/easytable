import React from 'react';
import Modal from 'react-modal';

class SessionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    };
    
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  
  closeModal() {
    this.setState({ modalOpen: false })
  }
  
  openModal() {
    this.setState({ modalOpen: true })
  }
  
  render() {
    const form = this.props.formType === "signin" ? (
      <SigninContainer />
    ) : (
      <SignupContainer />
    );
    return(
      <button onClick={this.openModal}>Open Me!</button>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        { form }
      </Modal>
    );
  }
}

export default SessionModal;