import { v4 as uuidv4 } from "uuid";
const initialState = {
    user: {
        id: uuidv4(),
        email: 'Tom@email.com',
        password: '123',
        meals: [
            {
                type: 'Breakfast',
                food: [
                    { name: 'Egg', kcal: 70 },
                    { name: 'Latte', kcal: 50 },
                    { name: 'Bread', kcal: 100 },
                ]
            },
            {
                type: 'Snack',
                food: [
                    { name: 'Protein Bar', kcal: 100 },
                    { name: 'Diet Coke', kcal: 10 },
                ]
            },
        ],
        workout: [
            { name: "Jumping Jack", kcal: 100 },
            { name: "Squat", kcal: 30 },
        ]
    }
}


const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default userReducer