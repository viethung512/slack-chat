import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from './async.constants';

const asyncReducerInitialState = {
  loading: false,
  type: null,
  element: null,
  error: null,
};
const asyncReducer = (state = asyncReducerInitialState, { type, payload }) => {
  switch (type) {
    case ASYNC_ACTION_START:
      const { actionType = null, elmId = null } = payload;
      return {
        ...state,
        loading: true,
        type: actionType,
        element: elmId,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ASYNC_ACTION_ERROR:
      const { err = null } = payload;
      return {
        ...state,
        loading: false,
        error: err,
      };
    default:
      return state;
  }
};

export default asyncReducer;
