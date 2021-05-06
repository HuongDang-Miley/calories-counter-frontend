import axios from "axios";
import * as actionTypes from "./actionTypes";
import jwtDecode from "jwt-decode";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";


// =========================== MEALS FUNCTION (for mealReducer)===========================

export const showAllMeals = (userId) => async dispatch => {
    console.log('userId', userId)
    let response = await axios.get(`http://localhost:4000/api/meals/show-all-meals/${userId}`)
    console.log('response.data.meals', response.data)
    dispatch({
        type: "SHOW_ALL_MEALS",
        meals: response.data.meals
    })
}

export const addFood = (userId, targetId, food, cal) => dispatch => {

    console.log('userId:', userId, 'targetId:', targetId, 'food:', food, 'cal:', cal)
    dispatch({
        type: "ADD_FOOD",
        targetId: targetId,
        userId: userId,
        newFood: { id: uuidv4(), name: food, cal: cal },
    })
}

export const addMeal = ( mealType) => async dispatch => {
   
    dispatch({
        type: "ADD_MEAL",
        mealType: mealType
    });
}

 export const deleteFood = (userId, targetMealId, targetFoodId) => dispatch => {
    dispatch({
        type: "DELETE_FOOD",
        userId: userId,
        targetMealId: targetMealId,
        targetFoodId: targetFoodId,
    })
}


export const deleteMeal = (userId, targetMealId) => async dispatch => {
    console.log('targetMealId',targetMealId)
    // await axios.delete(`http://localhost:4000/api/meals/delete-meal`, { params: { userId: userId, targetMealId: targetMealId } })
    await dispatch({
        type: "DELETE_MEAL",
        userId: userId,
        targetMealId: targetMealId,
    })
}


export const editFood = (userId, targetMealId, targetFoodId, name, cal) => dispatch => {
    dispatch({
        type: "EDIT_FOOD",
        userId: userId,
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