import React from 'react';
import Signin from './signin';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session';
import { closeModal } from '../../actions/ui';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: formData => dispatch(login(formData)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
