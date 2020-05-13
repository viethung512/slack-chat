import firebase from '../../app/utils/firebaseConfig';
import md5 from 'md5';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async.actions';
import { SIGN_OUT, SIGN_IN } from './auth.constants';
import { FETCH_CURRENT_USER } from '../user/user.constants';

export const signIn = ({ email, password }, history) => async dispatch => {
  try {
    dispatch(asyncActionStart('signIn'));
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    // dispatch({ type: SIGN_IN });
    dispatch({ type: FETCH_CURRENT_USER, payload: { user } });
    dispatch(asyncActionFinish());
    history.push('/');
  } catch (err) {
    console.log(err);
    dispatch(asyncActionError({ message: 'Login fail' }));
  }
};

export const register = ({ username, email, password }) => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
      displayName: username,
      photoURL: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`,
    });

    const newUser = {
      name: user.displayName,
      avatar: user.photoURL,
      createdAt: Date.now(),
    };

    await firebase.database().ref('users').child(user.uid).set(newUser);

    dispatch({ type: SIGN_IN });
    dispatch({ type: FETCH_CURRENT_USER, payload: { user } });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log(err);
    dispatch(asyncActionError(err));
  }
};

export const signOut = () => async dispatch => {
  try {
    dispatch(asyncActionStart('signOut'));
    await firebase.auth().signOut();

    // dispatch({ type: SIGN_OUT });
    dispatch({ type: FETCH_CURRENT_USER, payload: { user: null } });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError(err));
  }
};
