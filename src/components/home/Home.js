import React, { useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Switch } from "@material-ui/core";
import Login from "../login/Login";
import { Register } from "../register/Register";
import { connect } from "react-redux";
import Meals from "../meals/Meals";
import { Workout } from "../workout/Workout";
import { Sidebar } from "../sidebar/Sidebar";
import { stayUp } from "../../stores/actions/authActionCreator";
import { TopNav } from "../topNav/TopNav";

const Home = (props) => {
  console.log(props);

  useEffect(() => {
    let getToken = localStorage.getItem("jwtToken");
    props.stayUp(getToken);
    console.log(getToken)
  }, []);

  return (
    <div>
      HOME<br></br>
      {props.isAuth ? (
        <div>
          <TopNav/>
          <Sidebar />
          <Meals />
          <Workout />
        </div>
      ) : (
        <div>
          <Link to="/login">LOGIN</Link>
          <br></br>
          <Link to="/register">REGISTER</Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    isAuth: state.login_Reducer,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps, { stayUp })(Home);
