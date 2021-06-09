import React from "react";
import { connect } from "react-redux";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface MyRouteProps extends RouteProps {
  component: any;
  rest?: any;
}

const PublicRoute: React.FC<MyRouteProps> = ({
  component: Component,
  auth,
  ...rest
}: any) => {
  console.log(auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.authenticated === true ? (
          <Redirect to={{ pathname: "/home" }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PublicRoute);
