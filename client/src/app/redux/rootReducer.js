import { combineReducers } from 'redux';
import asyncReducer from '../../features/async/async.reducer';
import userReducer from '../../features/user/user.reducer';
import authReducer from '../../features/auth/auth.reducer';
import modalReducer from '../../features/modal/modal.reducer';

export default combineReducers({
  async: asyncReducer,
  user: userReducer,
  auth: authReducer,
  modal: modalReducer,
});
