import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({ component: Component, ...rest }) {
  const { authenticated } = useSelector(state => state.auth);
  const { loading } = useSelector(state => state.async);

  console.log(authenticated, 'public route');
  console.log(loading, 'public route');
  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
}

export default PublicRoute;
