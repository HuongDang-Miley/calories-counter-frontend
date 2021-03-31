<<<<<<< HEAD
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import Meals from "./components/meals/Meals";
import Workout from "./components/workout/Workout";
import { Sidebar } from "./components/sidebar/Sidebar";
import CaloriesCounter from "./components/caloriesCounter/CaloriesCounter";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
=======
import './App.css';
import { useRef } from 'react'
import { connect } from 'react-redux'
import Meals from './components/meals/Meals'
import Workout from './components/workout/Workout'
import Sidebar from './components/sidebar/Sidebar'
import TopNav from './components/topNav/TopNav'
>>>>>>> 1315d057290efe9a0092ca9d656ce9c1b35c7161

const App = (props) => {
  // console.log(props.state.login_Reducer);

  const { state } = props; //destructuring props from store

  const { login_Reducer } = state; //destructuring state from props
  // console.log(login_Reducer);
  const login = () => {
    return (
      <div>
        <input placeholder="email"></input>
      </div>
    );
  };

  // useEffect(() => {
  //   if (props.login_reducer.token) {
  //   }
  // }, [input]);
  return (
    <div>
      <Router>
        {/* <Register login_Reducer={login_Reducer} register={props.register}/> */}
        <Sidebar />
<<<<<<< HEAD

        <Switch>
          {/* <Route exact path='/' ><Home/></Route> */}
          <Route exact path="/register">
            <Register login_Reducer={login_Reducer} register={props.register} />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute>
            <CaloriesCounter />
=======
      </div>
      <div className='main-wrapper'>
        <div className='TopNav-wrapper' >
          <TopNav />
        </div>
        <div className='cards-wrapper'>
          <div className='meals-wrapper'>
>>>>>>> 1315d057290efe9a0092ca9d656ce9c1b35c7161
            <Meals />
            <Workout />
          </PrivateRoute>

          {/* <PrivateRoute/> */}
        </Switch>
      </Router>

      {/* {props.state.login_Reducer.loggedIn ? (
        <div className="App">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="main-wrapper">
            <div className="CaloriesCounter-wrapper">
              <CaloriesCounter />
            </div>
            <div className="cards-wrapper">
              <div className="meals-wrapper">
                <Meals />
              </div>
              <div className="workout-wrapper">
                <Workout />
              </div>
            </div>
          </div>
        </div>
      ) : ( */}
      {/* // <div>
        //to pass the 'register'  from below, add props 'prefix'
        //register is the dispatch sending info to the reducers , 
        //the info is gathered from component login 'using input refs'
        //passing the register to 'component login' which will send us the username,email n password back
      //     <Register login_Reducer={login_Reducer} register={props.register}/>
      
      // )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, email, password, time) =>
      dispatch({
        type: "REGISTER",
        newUser: {
          username: username,
          email: email,
          password: password,
          // time: time,
        },
      }),
    login: (email, password) =>
      dispatch({ type: "LOGIN", user: { email: email, password: password } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
