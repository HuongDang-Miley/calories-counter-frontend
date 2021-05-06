import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

const initialState = {
    workouts: []
}


const workoutReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SHOW_ALL_DATA":
            console.log("SHOW_ALL_DATA action", action)
            // return state
            return {
                ...state,
                workouts: action.workouts,
            }

        case 'DELETE_ALL_WORKOUTS':
            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: [] })
            return {
                ...state,
                workouts: []
            }

        // adding new workout
        case "ADD_WORKOUT":
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


        case "DELETE_WORKOUT":
            console.log(action)

            const newArr = state.workouts.filter((currEl) => {
                return currEl.id !== action.targetId;
            });

            console.log('newArr', newArr)

            axios.post(`http://localhost:4000/api/data/update-workout`, { userId: action.userId, workouts: newArr })

            return {
                ...state,
                workouts: newArr
            }

        case "EDIT_WORKOUT":
            console.log(action)
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


        default:
            return state
    }
}

export default workoutReducer

