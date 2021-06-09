import React, { useEffect } from "react";
import logo from "./logo.svg";
import Login from "./pages/Login";
import { Route, Switch, withRouter } from "react-router-dom";
import Index from "./pages/Index";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { getSession } from "./redux/auth/AuthAction";
import PrivateRoute from "./route/PrivateRoute";

const App: React.FC = (props: any) => {
  useEffect(() => {
    props.getSession(props.history);
  }, []);
  return (
    <div>
      <Switch>
        <PrivateRoute path="/home" exact component={Index}></PrivateRoute>
        <Route path="/" exact component={Login}></Route>
      </Switch>
      <ToastContainer />
    </div>
  );
};

export default withRouter(connect(null, { getSession })(App));
