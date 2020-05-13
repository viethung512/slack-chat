import axios from 'axios';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';
import { SET_AUTH_USER } from './user.constants';
import { SET_AUTHENTICATED } from '../auth/auth.constants';

export const getAuthUserData = () => dispatch => {
  dispatch(asyncActionStart('getAuthUser'));

  return axios
    .get('/auth')
    .then(res => {
      dispatch(setAuthUser(res.data));
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(asyncActionFinish());
    })
    .catch(err => {
      console.error(err);
      dispatch(asyncActionError(err));
    });
};

export const setAuthUser = userData => ({
  type: SET_AUTH_USER,
  payload: { user: userData },
});
