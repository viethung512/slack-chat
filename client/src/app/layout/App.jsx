import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import HomePage from '../../features/home/HomePage';
import LoginForm from '../../features/auth/Login/LoginForm';
import RegisterForm from '../../features/auth/Register/RegisterForm';
import PrivateRoute from './common/PrivateRoute';

import { getAuthUserData } from '../../features/user/user.actions';
import { signOut } from '../../features/auth/auth.actions';
import { SET_AUTHENTICATED } from '../../features/auth/auth.constants';
import ModalManager from '../../features/modal/ModalManager';

const token = localStorage.getItem('FBToken');

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { authenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(signOut());
        window.location.href = '/login';
      } else {
        dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        dispatch(getAuthUserData());
      }
    } else {
      history.push('/login');
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <ModalManager />
      <Switch>
        <PrivateRoute exact path='/home' component={HomePage} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
        {!authenticated ? <Redirect to='/login' /> : <Redirect to='/home' />}
      </Switch>
    </div>
  );
}

export default App;
