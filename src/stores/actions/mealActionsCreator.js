import axios from "axios";
import * as actionTypes from "./actionTypes";
import { v4 as uuidv4 } from "uuid";


/******************
 * MEALS FUNCTION *
 ******************/

export const showAllData = (userId) => async dispatch => {
    
    let response = await axios.get(`http://localhost:4000/api/data/show-all-data/${userId}`)
    
    dispatch({
        type: actionTypes.SHOW_ALL_DATA,
        meals: response.data.meals,
        workouts: response.data.workouts,
    })
}

export const addFood = (userId, targetId, food, cal) => dispatch => {

    dispatch({
        type: actionTypes.ADD_FOOD,
        targetId: targetId,
        userId: userId,
        newFood: { id: uuidv4(), name: food, cal: cal },
    })
}

export const addMeal = (mealType) => async dispatch => {
    dispatch({
        type: actionTypes.ADD_MEAL,
        mealType: mealType
    });
}

export const deleteFood = (userId, targetMealId, targetFoodId) => dispatch => {
    dispatch({
        type: actionTypes.DELETE_FOOD,
        userId: userId,
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
    })
}


export const deleteMeal = (userId, targetMealId) => async dispatch => {
    await dispatch({
        type: actionTypes.DELETE_MEAL,
        userId: userId,
        targetMealId: targetMealId,
    })
}


export const editFood = (userId, targetMealId, targetFoodId, name, cal) => dispatch => {
    dispatch({
        type: actionTypes.EDIT_FOOD,
        userId: userId,
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
        name: name,
        cal: cal,
    })
}

export const editMeal = (userId, targetMealId, newname) => dispatch => {
    dispatch({
        type: actionTypes.EDIT_MEAL,
        userId: userId,
        targetMealId: targetMealId,
        newname: newname
    })
}



/********************
 * WORKOUT FUNCTION *
 ********************/

export const deleteWorkout = (userId, id) => dispatch => {
    dispatch({
        type: actionTypes.DELETE_WORKOUT,
        targetId: id,
        userId: userId,
    })
}

export const editWorkout = (userId, targetId, name, cal) => dispatch => {
    dispatch({
        type: actionTypes.EDIT_WORKOUT,
        userId: userId,
        targetId: targetId,
        newName: name,
        newCal: cal
    })
}

export const addWorkout = (userId, name, cal) => dispatch => {
    
    dispatch({
        type: actionTypes.ADD_WORKOUT,
        userId: userId,
        newName: name,
        newCal: cal
    })
}


/*****************************************
 * MEALS & WORKOUT FUNCTION FOR SIDE BAR *
 *****************************************/

export const deleteAllWorkouts = (userId) => dispatch => {
    dispatch({ type: actionTypes.DELETE_ALL_WORKOUTS, userId: userId })
}

export const deleteAllMeals = (userId) => dispatch => {
    dispatch({ type: actionTypes.DELETE_ALL_MEALS, userId: userId })
}