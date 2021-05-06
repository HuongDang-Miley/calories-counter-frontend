import axios from "axios";
import * as actionTypes from "./actionTypes";
import jwtDecode from "jwt-decode";
import { v4 as uuidv4 } from "uuid";


// =========================== MEALS FUNCTION (for mealReducer)===========================

export const showAllMeals = (userId) => async dispatch => {
    // let response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    // let response = await axios.get('http://localhost:4000/api/meals/view-meals/606e944ed1859c59c0d21a85')
    let response = await axios.get(`http://localhost:4000/api/meals/view-meals/${userId}`)
    console.log('response.data.meals', response.data.meals)
    dispatch({
        type: "SHOW_ALL_MEALS",
        meals: response.data.meals
    })
}

export const addFood = (targetId, food, cal) => dispatch => {
    dispatch({
        type: "ADD_FOOD",
        targetId: targetId,
        newFood: { id: uuidv4(), name: food, cal: cal },
    })
}

export const deleteFood = (targetMealId, targetFoodId) => dispatch => {
    dispatch({
        type: "DELETE_FOOD",
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
    })
}
export const deleteMeal = (targetMealId) => dispatch => {
    console.log('targetMealId in action creator', targetMealId)
    dispatch({
        type: "DELETE_MEAL",
        targetMealId: targetMealId
    })
}

export const editFood = (targetMealId, targetFoodId, name, cal) => dispatch => {
    dispatch({
        type: "EDIT_FOOD",
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
        name: name,
        cal: cal,
    })
}

export const editMeal = (targetMealId, name) => dispatch => {
    dispatch({
        type: "EDIT_MEAL",
        targetMealid: targetMealId,
        name: name
    })
}

export const handleSelectMeal =  (mealType) => dispatch => {
    console.log('mealType', mealType)
    dispatch({
        type: "ADD_MEAL",
        mealType: mealType
    });
}



// =========================== WORKOUT FUNCTION (for workoutReducer) ===========================
export const deleteWorkout = (id) => dispatch => {
    dispatch({
        type: "DELETE_WORKOUT",
        targetid: id
    })
}


export const editWorkout = (targetId, name, cal) => dispatch => {
    dispatch({
        type: "EDIT_WORKOUT",
        targetid: targetId,
        newName: name,
        newCal: cal
    })
}

export const addWorkout = (name, cal) => dispatch => {
    dispatch({
        type: "ADD_WORKOUT",
        newName: name,
        newCal: cal
    })
}


// =========================== MEALS & WORKOUT FUNCTION FOR SIDE BAR ===========================
export const deleteAllWorkouts = () => dispatch => {
    dispatch({ type: 'DELETE_ALL_WORKOUTS' })
}

export const deleteAllMeals = () => dispatch => {
    dispatch({ type: 'DELETE_ALL_MEALS' })
}