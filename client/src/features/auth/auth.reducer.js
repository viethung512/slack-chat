import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './auth.constants';

const authReducerInitialState = {
  authenticated: null,
};
const authReducer = (state = authReducerInitialState, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: null,
      };
    default:
      return state;
  }
};

export default authReducer;
