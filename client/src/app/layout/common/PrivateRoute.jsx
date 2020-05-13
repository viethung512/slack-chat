import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const { loading } = useSelector(state => state.async);
  const { current } = useSelector(state => state.user);

  const authenticated = !loading && !!current;

  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
}

export default PrivateRoute;
