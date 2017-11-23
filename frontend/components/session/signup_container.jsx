import React from 'react';
import Signup from './signup';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: formData => dispatch(createUser(formData)),
  closeModal: ownProps.closeModal
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
