import React from 'react';
import Signin from './signin';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

const mapDispatchToProps = (dispatch) => ({
  login: formData => dispatch(login(formData))
});

export default connect(null, mapDispatchToProps)(Signin);