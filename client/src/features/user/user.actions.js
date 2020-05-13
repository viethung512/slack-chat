import axios from 'axios';
import firebase from '../../app/utils/firebaseConfig';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';
import { FETCH_CURRENT_USER } from './user.constants';

export const fetchCurrentUser = history => dispatch => {
  try {
    dispatch(asyncActionStart('fetchCurrentUser'));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: FETCH_CURRENT_USER, payload: { user } });
      }

      dispatch(asyncActionFinish());
      history.push('/');
    });
  } catch (err) {
    dispatch(asyncActionError(err));
  }
};

export const getAuthUserData = () => dispatch => {
  dispatch(asyncActionStart());

  axios.post('/auth/login');
};
