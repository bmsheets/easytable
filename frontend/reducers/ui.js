import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ui';

const defaultState = { modalIsOpen: false };

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return { modalIsOpen: true };
    case CLOSE_MODAL:
      return { modalIsOpen: false };
    default:
      return state;
  }
};
