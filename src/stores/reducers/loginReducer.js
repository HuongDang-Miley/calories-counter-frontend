import { useState, createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import * as actionTypes from "../actions/actionTypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
const initialState = {
  isAuth: false,
  token: "",
  registerMessage: "",
  loginMessage: "",
  user: {},
};

const loginReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.AUTH_USER_REGISTER_SUCCESSFUL: //case----------------------register
      return {
        ...state,
        registerMessage: action.message,
      };

    case actionTypes.AUTH_USER_SIGN_IN_SUCCESSFUL: //case---------------------- sign in
      // console.log(action);
      let decoded = jwtDecode(action.message);

      console.log("decoded", decoded);
      return {
        ...state,
        isAuth: true,
        user: {
          email: decoded.email,
          username: decoded.username,
          id: decoded.id,
        },
      };

    case actionTypes.AUTH_USER_SIGN_IN_FAILURE: //case------------------------ sign in failure
      return {
        ...state,
        registerMessage: action.message,
      };

    case actionTypes.AUTH_USER_STAY_UP://-------------------------------jwt decode email and username
      console.log(action);

      return {
        ...state,
        isAuth: true,
        user: {
          email: action.message.email,
          username: action.message.username,
          id: action.message.id,
        },
      };
    
    //case logout------------------------------------------------------logout remove jwt
    case actionTypes.AUTH_USER_LOGOUT:
      
      return{
        ...state,
        isAuth:false,
        user:{}
      }

    default:
      return state;
  }
};

export default loginReducer;
