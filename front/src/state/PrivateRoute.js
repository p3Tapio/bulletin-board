import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from './localStorage';

const PrivateRoute = ({ path, component, exact }) => {
  const token = getToken();
  return token ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/auth" />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};
PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
