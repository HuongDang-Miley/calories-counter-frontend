import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authUser.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
);

// PrivateRoute.propTypes = {
//   authUser: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   authUser: state.authUser
// });

// export default connect(mapStateToProps)(PrivateRoute);
