import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { signOut, signIn } from './features/auth/auth.actions';

const rootElm = document.getElementById('root');

const token = localStorage.getItem('FBToken');
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(signOut());
    window.location.href = '/login';
  } else {
    // store.dispatch({type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    // store.dispatch(getAuthUserData());
  }
}

const render = async () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElm
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
