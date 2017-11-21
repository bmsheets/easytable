import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { login, logout, createUser } from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  createUser: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);