import React from 'react';
import { connect } from 'react-redux';
import MainBar from './main_bar';
import { login, logout, createUser, receiveErrors } from '../../actions/session';
import { openModal, closeModal } from '../../actions/ui';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  modalIsOpen: state.ui.modalIsOpen
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  createUser: (user) => dispatch(createUser(user)),
  clearErrors: () => dispatch(receiveErrors([])),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBar);
