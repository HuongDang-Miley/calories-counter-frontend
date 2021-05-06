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
import {Meals} from "./components/meals/Meals";
import { Workout } from "./components/workout/Workout";
import  Sidebar  from "./components/sidebar/Sidebar";
// import CaloriesCounter from "./components/caloriesCounter/CaloriesCounter";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import  TopNav  from "./components/topNav/TopNav";
import { NotFound } from "./components/notFound/NotFound";
import { stayUp } from "./stores/actions/authActionCreator";
import axios from "axios";
import Meal from "./Meal.svg";

import { v4 as uuidv4 } from "uuid";

const App = (props) => {
  

  return (
    <div>
      
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* why different color in components below */}

          {/* <PrivateRoute exact path="/nav" component={TopNav} /> */}
          {/* <Route exact path="/nav" component={TopNav} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/meals"   component={Meals}/> */}
            {/* <Meals
              meals={props.meals}
              addFood={props.addFood}
              deleteFood={props.deleteFood}
              deleteMeal={props.deleteMeal}
              editFood={props.editFood}
              editMeal={props.editMeal}
              addMeal={props.addMeal}
            />
          </Route> */}

          <Route path="" component={NotFound} />
        </Switch>
      </Router>
      {/* ------------- ----------------------------*/}
      {/* <div className="App"> */}
      {/* <div className='sidebar-wrapper' >
        <Sidebar />
      </div> */}
      {/* <div className='main-wrapper'> */}
      {/* <div className='TopNav-wrapper' >
          <TopNav />
        </div> */}
      {/* <div className='cards-wrapper'> */}
      {/* <div className='meals-wrapper'>
            <Meals
              meals={props.meals}
              addFood={props.addFood}
              deleteFood={props.deleteFood}
              deleteMeal={props.deleteMeal}
              editFood={props.editFood}
              editMeal={props.editMeal}
              addMeal={props.addMeal}
            />
          </div> */}
      {/* <div className='workout-wrapper'>
            {/* <Meals
              meals={props.meals}
              addFood={props.addFood}
              deleteFood={props.deleteFood}
              deleteMeal={props.deleteMeal}
              editFood={props.editFood}
              editMeal={props.editMeal}
              addMeal={props.addMeal}
            /> */}
      {/* <Workout /> */}
      {/* </div>  */}

      {/* </div> */}
      {/* -------------------------------------------- */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // state: state,
    isAuth: state.login_Reducer.isAuth,
    meals: state.meals_Reducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFood: (targetId, food, cal) =>
      dispatch({
        type: "ADD_FOOD",
        targetId: targetId,
        newFood: { id: uuidv4(), name: food, cal: cal },
      }),
    deleteFood: (targetMealId, targetFoodId) =>
      dispatch({
        type: "DELETE_FOOD",
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
      }),
    deleteMeal: (targetMealId) =>
      dispatch({ type: "DELETE_MEAL", targetMealId: targetMealId }),
    editFood: (targetMealId, targetFoodId, name, cal) =>
      dispatch({
        type: "EDIT_FOOD",
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
        name: name,
        cal: cal,
      }),
    editMeal: (targetMealId, name) =>
      dispatch({ type: "EDIT_MEAL", targetMealId: targetMealId, name: name }),
    addMeal: async (mealType) => {
      dispatch({ type: "ADD_MEAL", mealType: mealType });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
