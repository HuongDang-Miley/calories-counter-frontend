import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../stores/actions/authActionCreator";
import { stayUp } from "../../stores/actions/authActionCreator";
import { Redirect } from "react-router";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";


export const TopNav = (props) => {

  const logOut = () => {
    localStorage.removeItem("jwtToken");
    props.setIsAuth(false)
  }

  return (
    <div>
      {props.isAuth ?
        <>
          <div style={{display: 'inline-block', marginRight: 24}}>{props.email}</div>
          <Button
            className="logout-btn"
            onClick={() => logOut()}
            variant="filled"
            color="primary"
            endIcon={<ExitToAppIcon />}
          >LOGOUT
</Button>
        </>
        : <Redirect to="/register" />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // newState: state.login_Reducer,
  };
};

export default connect(mapStateToProps)(TopNav);


