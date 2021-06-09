import React from "react";
import { connect } from "react-redux";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
  rest?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  auth,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
