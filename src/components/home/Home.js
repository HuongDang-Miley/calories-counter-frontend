import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Meals from "../meals/Meals";
import Workout from "../workout/Workout";
import Sidebar from "../sidebar/Sidebar";
import { TopNav } from "../topNav/TopNav";
import jwtDecode from 'jwt-decode';
import '../../App.css'
import '../sidebar/sidebar.css'
import {
  addMeal,
  showAllData,
  editMeal,
  deleteMeal,
  addFood,
  editFood,
  deleteFood,
  addWorkout,
  editWorkout,
  deleteWorkout,
  deleteAllMeals,
  deleteAllWorkouts,

} from '../../stores/actions/mealActionsCreator'

const Home = (props) => {
  let [userId, setUserId] = useState('')
  let [email, setEmail] = useState('')
  let [isAuth, setIsAuth] = useState(false)


  useEffect(async () => {
    let getToken = await localStorage.getItem("jwtToken");
    let user = await jwtDecode(getToken)
    await setUserId(user.id)
    await setEmail(user.email)
    await setIsAuth(true)
    await props.showAllData(user.id)
  }, []);


  // console.log('email', email)
  return (
    <div>
      HOME<br></br>
      {isAuth ? (
        <div className="App">
          <div className='sidebar-wrapper' >
            <Sidebar
              userId={userId}
              workouts={props.workouts}
              meals={props.meals}
              deleteAllMeals={props.deleteAllMeals}
              deleteAllWorkouts={props.deleteAllWorkouts}
            />
          </div>
          <div className='main-wrapper'>
            <div className='TopNav-wrapper' >
              <TopNav
                setIsAuth={setIsAuth}
                isAuth={isAuth}
                email={email}
              />
            </div>
            <div className='meals-n-workout-wrapper'>
              <div className='meals-wrapper'>
                <Meals
                  userId={userId}
                  meals={props.meals}
                  addFood={props.addFood}
                  deleteFood={props.deleteFood}
                  deleteMeal={props.deleteMeal}
                  editFood={props.editFood}
                  editMeal={props.editMeal}
                  addMeal={props.addMeal}
                />
              </div>
              <div className='workout-wrapper'>
                <Workout
                  userId={userId}
                  workouts={props.workouts}
                  addWorkout={props.addWorkout}
                  editWorkout={props.editWorkout}
                  deleteWorkout={props.deleteWorkout}
                />
              </div>
            </div>
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
    meals: state.meals_Reducer,
    workouts: state.workout_Reducer,
  };
};


export default connect(mapStateToProps, {
  showAllData,
  editMeal,
  addMeal,
  deleteMeal,
  addFood,
  editFood,
  deleteFood,
  addWorkout,
  editWorkout,
  deleteWorkout,
  deleteAllMeals,
  deleteAllWorkouts,
})(Home);
