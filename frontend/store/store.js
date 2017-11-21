import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root';

export default (preloadedState = {}) => (
  createStore(rootReducer,
              preloadedState,
              applyMiddleware(createLogger(), thunk)
));