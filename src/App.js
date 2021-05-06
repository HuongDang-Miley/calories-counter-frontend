import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,

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
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App
// const mapStateToProps = (state) => {
//   return {
//     // state: state,
//     isAuth: state.login_Reducer.isAuth,
//     meals: state.meals_Reducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFood: (targetId, food, cal) =>
//       dispatch({
//         type: "ADD_FOOD",
//         targetId: targetId,
//         newFood: { id: uuidv4(), name: food, cal: cal },
//       }),
//     deleteFood: (targetMealId, targetFoodId) =>
//       dispatch({
//         type: "DELETE_FOOD",
//         targetMealId: targetMealId,
//         targetFoodId: targetFoodId,
//       }),
//     deleteMeal: (targetMealId) =>
//       dispatch({ type: "DELETE_MEAL", targetMealId: targetMealId }),
//     editFood: (targetMealId, targetFoodId, name, cal) =>
//       dispatch({
//         type: "EDIT_FOOD",
//         targetMealId: targetMealId,
//         targetFoodId: targetFoodId,
//         name: name,
//         cal: cal,
//       }),
//     editMeal: (targetMealId, name) =>
//       dispatch({ type: "EDIT_MEAL", targetMealId: targetMealId, name: name }),
//     addMeal: async (mealType) => {
//       dispatch({ type: "ADD_MEAL", mealType: mealType });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
