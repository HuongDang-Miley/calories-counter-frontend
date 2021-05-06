import axios from "axios";
import * as actionTypes from "./actionTypes";
import jwtDecode from "jwt-decode";
import { v4 as uuidv4 } from "uuid";


// =========================== MEALS FUNCTION (for mealReducer)===========================

export const showAllMeals = (userId) => async dispatch => {
    console.log('userId', userId)
    // let response = await axios.get('http://localhost:4000/api/meals/show-all-meals/606e944ed1859c59c0d21a85')
    let response = await axios.get(`http://localhost:4000/api/meals/show-all-meals/${userId}`)
    console.log('response.data.meals', response.data)
    dispatch({
        type: "SHOW_ALL_MEALS",
        meals: response.data.meals
    })
}


// export const addFood = (userId, targetId, food, cal) => dispatch => {
//     // let response = await axios.get(`http://localhost:4000/api/meals/add-meal`, {})
//     dispatch({
//         type: "ADD_FOOD",
//         targetId: targetId,
//         newFood: { id: uuidv4(), name: food, cal: cal },
//     })
// }
export const addFood = (userId, targetId, food, cal) => dispatch => {

    console.log('userId:', userId, 'targetId:', targetId, 'food:', food, 'cal:', cal)
    // let response = await axios.get(`http://localhost:4000/api/meals/add-meal`, {})
    dispatch({
        type: "ADD_FOOD",
        targetId: targetId,
        userId: userId,
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
export const deleteMeal = (userId, targetMealId) => async dispatch => {

    await axios.delete(`http://localhost:4000/api/meals/delete-meal`, { params: { userId: userId, targetMealId: targetMealId } })

    await dispatch({
        type: "DELETE_MEAL",
        targetMealId: targetMealId
    })
}

// export const editFood = (targetMealId, targetFoodId, name, cal) => dispatch => {
//     dispatch({
//         type: "EDIT_FOOD",
//         targetMealId: targetMealId,
//         targetFoodId: targetFoodId,
//         name: name,
//         cal: cal,
//     })
// }
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

// export const addMeal = (userId, mealType) => async dispatch => {
//     await axios.post(`http://localhost:4000/api/meals/add-meal`, { userId: userId, mealType: mealType } )
//     console.log('userId:', userId, 'mealType:', mealType)
//     dispatch({
//         type: "ADD_MEAL",
//         mealType: mealType
//     });
// }


// export const addMeal = (userId, mealType) => async dispatch => {
//     // await axios.post(`http://localhost:4000/api/meals/add-meal`, { userId: userId, mealType: mealType } )
//     console.log('userId:', userId, 'mealType:', mealType)
//     dispatch({
//         type: "ADD_MEAL",
//         mealType: mealType
//     });
// }



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