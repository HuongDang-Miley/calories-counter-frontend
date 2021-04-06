import { v4 as uuidv4 } from "uuid";
const initialState = {
    workouts: [
        { id: uuidv4(), name: "Jumping Jack", cal: 100 },
        { id: uuidv4(), name: "Squat", cal: 30 },
        { id: uuidv4(), name: "chilling", cal: 30 },
        { id: uuidv4(), name: "sitting", cal: 30 },
        { id: uuidv4(), name: "dancing", cal: 30 },
        { id: uuidv4(), name: "swiming", cal: 30 },
        { id: uuidv4(), name: "idk", cal: 30 },
    ]
}


const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ALL_WORKOUTS':
            return {
                ...state,
                workouts: []
            }
        default: return state
    }
}

export default workoutReducer