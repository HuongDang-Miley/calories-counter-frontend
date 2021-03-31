import { useState, createRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const initialState = {
  loggedIn: false,
  token: "",
};

const loginReducer = async (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "REGISTER":
      try {
        const send = await axios
          .post("http://localhost:4000/api/users/register", action.newUser)
          .then((res) => console.log(res.data));
        console.log(send.data.message);
        //how to display successful signup message
        // alert(console.log(res.data.message));
        
      } catch (e) {
        console.log(e);
      }

      //   console.log(action.newUser);

      return state;
    
    case 'LOGIN':
        try {
            const login = await axios.post('http://localhost:4000/api/users/login', action.user)
            .then((res)=>console.log(res.data))
        } catch (e) {
            console.log(e);
            
        }
    default:
      return state;
  }
};

export default loginReducer;
