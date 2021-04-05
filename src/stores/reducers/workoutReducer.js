import { v4 as uuidv4 } from "uuid";
const initialState = {
    workoutArray: [
        { name: "Jumping Jack", cal: 100, id: uuidv4() },
        { name: "Squat", cal: 30, id: uuidv4() },
    ],
    showAdd: true,
    buttonText: "show"

}


const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        
        // case "TOGGLE_FIELD":
        //     const text =(state.showAdd ?  "Show" : "Hide")
        //     return{
        //         ...state,
        //         showAdd:!state.showAdd,
        //         buttonText:text

        //     }


        case "DELETE_WORK":
        const newArr = state.workoutArray.filter((currEl)=>{
            return currEl.id !== action.targetId;

        });
        return {
            ...state,
            workoutArray : newArr
        }
        
            


        default: 
        console.log("default")
        return state
    }
}

export default workoutReducer