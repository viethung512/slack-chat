import { FETCH_CURRENT_USER } from './user.constants';

const userReducerInitialState = {
  current: null,
  loading: true,
};
const userReducer = (state = userReducerInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_USER:
      const { user = null } = payload;
      return {
        ...state,
        current: user,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
