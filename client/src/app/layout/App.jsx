import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from '../../features/home/HomePage';
import LoginForm from '../../features/auth/Login/LoginForm';
import RegisterForm from '../../features/auth/Register/RegisterForm';
import PrivateRoute from './common/PrivateRoute';
import { fetchCurrentUser } from '../../features/user/user.actions';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCurrentUser(history));

    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <Switch>
        <PrivateRoute exact path='/home' component={HomePage} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
