import axios from 'axios';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';
import { SET_UNAUTHENTICATED } from './auth.constants';
import { setAuthHeader } from '../../app/utils/helper';
import { getAuthUserData, setAuthUser } from '../user/user.actions';

export const signIn = (userCredentials, history) => async dispatch => {
  dispatch(asyncActionStart('signIn'));

  return axios
    .post('/auth/login', userCredentials)
    .then(res => {
      setAuthHeader(res.data.token);
      dispatch(getAuthUserData());
      dispatch(asyncActionFinish());
      history.push('/home');
    })
    .catch(err => {
      const error = err.response.data.errors
        ? err.response.data.errors
        : { general: { msg: 'Some thing went wrong' } };
      dispatch(asyncActionError(error));
    });
};

export const register = (userCredentials, history) => async dispatch => {
  dispatch(asyncActionStart());

  return axios
    .post('/auth/register', userCredentials)
    .then(res => {
      setAuthHeader(res.data.token);
      dispatch(getAuthUserData());
      dispatch(asyncActionFinish());
      history.push('/home');
    })
    .catch(err => {
      const error = err.response.data.errors
        ? err.response.data.errors
        : { general: { msg: 'Some thing went wrong' } };
      dispatch(asyncActionError(error));
    });
};

export const signOut = () => async dispatch => {
  localStorage.removeItem('FBToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(setAuthUser(null));
  dispatch({ type: SET_UNAUTHENTICATED });
};
