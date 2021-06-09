import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { loginFunction } from "../redux/auth/AuthAction";
import { withRouter } from "react-router";

const Login: React.FC = (props: any) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const submitFunction = (e: any, formData: any) => {
    e.preventDefault();
    props.loginFunction(formData, props.history);
  };

  const handleChange = (e: any): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setLoginState({ ...loginState, [name]: value });
  };
  return (
    <div className="auth-block">
      <h3>Login</h3>
      <form
        className="login-form"
        onSubmit={(e) => submitFunction(e, loginState)}
      >
        <Box marginTop={2} className="form-group">
          <TextField
            variant="standard"
            size="medium"
            name="email"
            color="primary"
            type="text"
            label="Email"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </Box>
        <Box marginTop={2} marginBottom={5} className="form-group">
          <TextField
            variant="standard"
            size="medium"
            name="password"
            color="primary"
            type="password"
            label="Password"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </Box>

        <Button variant="contained" type="submit" color="primary" fullWidth>
          {props.auth.loading ? "Logging in ..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
export default withRouter(connect(mapStateToProps, { loginFunction })(Login));
