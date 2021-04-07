import React, { createRef, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText, Box } from "@material-ui/core";
import { connect } from "react-redux";
import "./register.css";
import Home from "../home/Home";
import Login from "../login/Login";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { register } from '../../stores/actions/authActionCreator'
import Button from "@material-ui/core/Button";

//props from app.js
export const Register = (props) => {
  //   const { loggedIn, token } = props.login_Reducer;

  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  //   console.log(loggedIn);

  return (
    <>
      {props.newState.isAuth ? (
        // <div>
        //   <Sidebar />
        //   <Meals />
        //   <Workout />
        // </div>
        <Route>
          <Redirect to="/" />
        </Route>
      ) : (
        <div>

          <Link to="/login">LOGIN</Link>

          <Box className="register-box" noValidate autoComplete="off">
            <TextField
              id="filled-basic"
              label="user name"
              variant="filled"
              inputRef={refUsername}
            />
            <br></br>
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
              onClick={() =>
                props.register(
                  refUsername.current.value,
                  refEmail.current.value,
                  refPassword.current.value
                )
              }
              variant="contained"
              color="primary"
              fullWidth="true"
            >
              SUMBIT
     </Button>

          </Box>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    newState: state.login_Reducer.isAuth,
  };
};


export default connect(mapStateToProps, { register })(Register);
