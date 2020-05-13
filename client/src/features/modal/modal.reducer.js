import { OPEN_MODAL, CLOSE_MODAL } from './modal.constants';

const modalReducerInitialState = null;
const modalReducer = (state = modalReducerInitialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return {
        modalType: payload.modalType,
        modalProps: payload.modalProps,
      };
    case CLOSE_MODAL:
      return modalReducerInitialState;
    default:
      return state;
  }
};

export default modalReducer;
