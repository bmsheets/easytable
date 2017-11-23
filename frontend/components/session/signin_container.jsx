import React from 'react';
import Signin from './signin';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: formData => dispatch(login(formData)),
  closeModal: ownProps.closeModal
});

export default connect(null, mapDispatchToProps)(Signin);