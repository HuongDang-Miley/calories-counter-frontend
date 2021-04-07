import React, { createRef, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

// import * as actionTypes from "../actions/actionTypes";

import { FormHelperText, Box } from "@material-ui/core";
import "./login.css";
import { connect } from "react-redux";
import { login, stayUp } from "../../stores/actions/authActionCreator";
import Meals from "../meals/Meals";
import { Workout } from "../workout/Workout";
import { Sidebar } from "../sidebar/Sidebar";



//props from app.js
const Login = (props) => {
  console.log(props.newState);

  const refEmail = useRef();
  const refPassword = useRef();

  // const login = (email, password) => {
  //   props.login(email, password)
  //   props.history.push('/home')
  // }

  // useEffect(() => {
  //   if(props.newState.isAuth){
  //     props.history.push('/')

  //   }
  //   // let getToken = localStorage.getItem("jwtToken");
  //   // props.stayUp(getToken);
  // }, []);

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

export default connect(mapStateToProps, { login, stayUp })(Login);
