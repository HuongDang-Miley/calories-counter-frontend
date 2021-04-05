import axios from "axios";
import * as actionTypes from "./actionTypes";
import jwtDecode from 'jwt-decode';


//register------------start
export const register = (username, email, password) => async (dispatch) => {
  let userInfo = { username, email, password };
  console.log(userInfo);
  try {
    let payload = await axios.post(
      "http://localhost:4000/api/users/register",
      userInfo
    );

    dispatch({
      type: actionTypes.AUTH_USER_REGISTER_SUCCESSFUL,
      message: payload.data.message,
    });
    alert(payload.data.message);
  } catch (e) {
    dispatch({
      type: actionTypes.AUTH_USER_REGISTER_SUCCESSFUL,
      message: e.response.data.message,
    });
    alert(e.response.data.message);
  }
}; //-------------------------------------------------register-----------------------------end

//------------login---------------start
export const login = (email, password) => async (dispatch) => {
  let userInfo = { email, password };
  console.clear();

  try {
    let payload = await axios.post(
      "http://localhost:4000/api/users/login",
      userInfo
    );

    const { token } = payload.data;
    localStorage.setItem("jwtToken", token);

    dispatch({
      type: actionTypes.AUTH_USER_SIGN_IN_SUCCESSFUL,
      message: token,
    });
  } catch (e) {
    console.log(e);

    dispatch({
      type: actionTypes.AUTH_USER_SIGN_IN_FAILURE,
        message: e.response.data.message,
    });
    alert(e.response.data.message)
  }
}; //----------------------------------------------------------login--------------------------end


export const stayUp = (token)=> (dispatch)=>{
    if(token){
        let decoded=jwtDecode(token);
        dispatch({
            type:actionTypes.AUTH_USER_STAY_UP,
            message:decoded
        })

    }

}

export const logout = ()=>(dispatch)=>{
    localStorage.removeItem('jwtToken');
    
    dispatch({
        type:actionTypes.AUTH_USER_LOGOUT,
        // message:
    })
}