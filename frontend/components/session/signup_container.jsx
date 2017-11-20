import React from 'react';
import Signup from './signup';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session';

const mapDispatchToProps = (dispatch) => ({
  createUser: formData => dispatch(createUser(formData))
});

export default connect(null, mapDispatchToProps)(Signup);