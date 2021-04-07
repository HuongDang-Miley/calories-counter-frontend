import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../stores/actions/authActionCreator";
import { stayUp } from "../../stores/actions/authActionCreator";
import { Redirect } from "react-router";

export const TopNav = (props) => {

  console.log('TopNav props', props)
  const logOut = () => {
    localStorage.removeItem("jwtToken");
    props.setIsAuth(false)
  }
  
  return (
    <div>
      {/* {props.newState.isAuth ? */}
      {props.isAuth ?
        <div>TopNav</div>
        : <Redirect to="/register" />}
      <button onClick={() => logOut()}>LOG OUT</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newState: state.login_Reducer,
  };
};

export default connect(mapStateToProps)(TopNav);


