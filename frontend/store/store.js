import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

export default (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger(), thunk))
  );