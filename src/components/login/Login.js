import React, { useRef } from "react";

import TextField from "@material-ui/core/TextField";
import { Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";


import { Box } from "@material-ui/core";
import "./login.css";
import { connect } from "react-redux";
import { login } from "../../stores/actions/authActionCreator";




//props from app.js
const Login = (props) => {
  console.log(props.newState);

  const refEmail = useRef();
  const refPassword = useRef();


  return (
    <>
      {props.newState.isAuth ? (
        <Route>
          <Redirect to="/" />
        </Route>
      ) : (
        <div>
          <Link to="/register">REGISTER</Link>
          <Box className="login-box" noValidate autoComplete="off">
            <TextField
              id="filled-basic"
              label="email"
              variant="filled"
              inputRef={refEmail}
            />
            <br></br>
            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
              inputRef={refPassword}
            />
            <br></br>
            <Button
              className="login-btn"
              onClick={() => props.login(refEmail.current.value, refPassword.current.value)}
              variant="contained" color="primary"
              fullWidth="true"
            >
              LOGIN
     </Button>
          </Box>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newState: state.login_Reducer,
  };
};

export default connect(mapStateToProps, { login })(Login);
