import React, { createRef, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText, Box } from "@material-ui/core";
import "./login.css";

//props from app.js
export const Login = (props) => {
  console.log(props);
  const { loggedIn, token } = props.login_Reducer;

  //   const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  console.log(loggedIn);

  return (
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
      <button
        onClick={() =>
          props.login(refEmail.current.value, refPassword.current.value)
        }
      >
        submit
      </button>
    </Box>
  );
};
