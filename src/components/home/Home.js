import React, { useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Switch } from "@material-ui/core";
import Login from "../login/Login";
import { Register } from "../register/Register";
import { connect } from "react-redux";
import Meals from "../meals/Meals";
import { Workout } from "../workout/Workout";
import  Sidebar  from "../sidebar/Sidebar";
import { stayUp } from "../../stores/actions/authActionCreator";
import { TopNav } from "../topNav/TopNav";
import { v4 as uuidv4 } from "uuid";
import '../../App.css'
import '../sidebar/sidebar.css'
// import Workout from '../workout/Workout'

const Home = (props) => {
  console.log(props);

  useEffect(() => {
    let getToken = localStorage.getItem("jwtToken");
    // props.stayUp(getToken);
    console.log(getToken);
  }, []);

  return (
    <div>
      HOME<br></br>
      {props.isAuth ? (
        <div className='App'>
          <div className="TopNav-wrapper">
            <TopNav />
          </div>
          <div className="sidebar-wrapper">
            <Sidebar 
            workouts={props.workouts}
            meals={props.meals}
            deleteAllMeals={props.deleteAllMeals}
            deleteAllWorkouts={props.deleteAllWorkouts}
            
            
            />
          </div>
          <div className="meals-wrapper">
            <Meals
              meals={props.meals}
              addFood={props.addFood}
              deleteFood={props.deleteFood}
              deleteMeal={props.deleteMeal}
              editFood={props.editFood}
              editMeal={props.editMeal}
              handleSelectMeal={props.handleSelectMeal}
            />
          </div>
          <div className="workout-wrapper">
            <Workout
              deleteWorkout={props.deleteWorkout}
              toggleField={props.toggleField}
              workouts={props.workouts}
              editWorkout={props.editWorkout}
              addWorkout={props.addWorkout}
            />{" "}
          </div>
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
  return {
    // state: state,
    isAuth: state.login_Reducer,
    meals: state.meals_Reducer,
    workouts: state.workout_Reducer,
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
    handleSelectMeal: async (mealType) => {
      dispatch({ type: "ADD_MEAL", mealType: mealType });
    },

    // -------workout
    deleteWorkout: (id) => dispatch({ type: "DELETE_WORK", targetId: id }),
    toggleField: () => dispatch({ type: "TOGGLE_FIELD" }),
    editWorkout: (targetId, name) =>
      dispatch({ type: "EDIT_WORK", targetId: targetId, newName: name }),
    addWorkout: (name, cal) =>
      dispatch({ type: "ADD_WORK", newName: name, newCal: cal }),

    // -------workout
    // ------sidebar
    deleteAllMeals: () => (dispatch({ type: 'DELETE_ALL_MEALS' })),
    deleteAllWorkouts: () => (dispatch({ type: 'DELETE_ALL_WORKOUTS' }))
    // ------sidebar
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
