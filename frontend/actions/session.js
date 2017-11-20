import { postSession, deleteSession, postUser } from '../utils/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const login = (formData) => dispatch => {
  return postSession(formData).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  return deleteSession().then(() => dispatch(logoutCurrentUser())); 
};

export const createUser = (formData) => dispatch => {
  return postUser(formData).then(user => dispatch(receiveCurrentUser(user)));   
};