import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import * as actionTypes from "../actions/actionTypes"

const initialState = {
    workouts: []
}


const workoutReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SHOW_ALL_DATA:
            return {
                ...state,
                workouts: action.workouts,
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.DELETE_ALL_WORKOUTS:
            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: [] })
            return {
                ...state,
                workouts: []
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.ADD_WORKOUT:
            const newWorkout = {
                name: action.newName,
                cal: action.newCal,
                id: uuidv4()
            }

            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: [...state.workouts, newWorkout] })
            return {
                ...state,
                workouts: [...state.workouts, newWorkout]
            }

        //=====================================================================================================================            
        //=====================================================================================================================            

        case actionTypes.DELETE_WORKOUT:
            
            const newArr = state.workouts.filter((currEl) => {
                return currEl.id !== action.targetId;
            });

            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: newArr })

            return {
                ...state,
                workouts: newArr
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.EDIT_WORKOUT:
            
            let updateArr = state.workouts.map((item) => {
                if (item.id === action.targetId) {
                    return {
                        ...item,
                        name: action.newName,
                        cal: action.newCal
                    }
                } else {
                    return item
                }
            })

            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: updateArr })
            return {
                ...state,
                workouts: updateArr
            }


        default: return state
    }
}

export default workoutReducer

