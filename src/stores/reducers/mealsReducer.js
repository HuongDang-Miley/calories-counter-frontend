import { v4 as uuidv4 } from "uuid";
const initialState = {

    meals: [
        {
            id: uuidv4(),
            type: 'Breakfast',
            food: [
                { name: 'Egg', kcal: 70 },
                { name: 'Latte', kcal: 50 },
                { name: 'Bread', kcal: 100 },
            ]
        },
        {
            id: uuidv4(),
            type: 'Snack',
            food: [
                { name: 'Protein Bar', kcal: 100 },
                { name: 'Diet Coke', kcal: 10 },
            ]
        },
    ]

}


const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default mealsReducer