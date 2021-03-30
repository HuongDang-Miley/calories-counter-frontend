import { v4 as uuidv4 } from "uuid";
const initialState = {
    workout: [
        { id: uuidv4(), name: "Jumping Jack", kcal: 100 },
        { id: uuidv4(), name: "Squat", kcal: 30 },
    ]
}


const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default workoutReducer