import React from 'react';
import Signup from './signup';
import { connect } from 'react-redux';
import { createUser, login, receiveErrors } from '../../actions/session';
import { closeModal } from '../../actions/ui';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: formData => dispatch(createUser(formData)),
  login: formData => dispatch(login(formData)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([])),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
