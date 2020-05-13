import { SET_AUTH_USER } from './user.constants';

const userReducerInitialState = {
  current: null,
};
const userReducer = (state = userReducerInitialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        current: payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
