import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import { useEffect } from "react";
import { connect, Provider } from "react-redux";
import Meals from "./components/meals/Meals";
import { Workout } from "./components/workout/Workout";
import { Sidebar } from "./components/sidebar/Sidebar";
// import CaloriesCounter from "./components/caloriesCounter/CaloriesCounter";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import {TopNav} from "./components/topNav/TopNav";
import { NotFound } from "./components/notFound/NotFound";
import { stayUp } from "./stores/actions/authActionCreator";

const App = (props) => {
  console.log(props.state);

  useEffect(() => {
    let getToken = localStorage.getItem("jwtToken");
    props.stayUp(getToken);

    // console.log(getToken)
  }, []);

  return (
    <div>
      {/* <Provider store={store}> */}

      <Router>
        {/* <Link to="/register">Register here</Link>
        <br></br>
      <Link to="/login">login</Link> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* why different color in components below */}
          
          {/* <PrivateRoute exact path="/nav" component={TopNav} /> */}
          <Route exact path="/nav" component={TopNav} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/meals" component={Meals} />

          <Route path="" component={NotFound} />
          {/* <PrivateRoute exact path="/main"  component={Workout}/>  */}
          {/* <TopNav/>
          <Sidebar/>
          <Meals/>
          <Workout/>
          </PrivateRoute > */}

          {/* <PrivateRoute /> */}
        </Switch>
      </Router>
      {/* </Provider> */}

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

export default connect(mapStateToProps, { stayUp })(App);
