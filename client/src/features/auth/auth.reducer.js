import { SIGN_IN, SIGN_OUT } from './auth.constants';

const authReducerInitialState = {
  authenticated: false,
};
const authReducer = (state = authReducerInitialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        authenticated: true,
      };

    case SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        current: null,
      };
    default:
      return state;
  }
};

export default authReducer;
