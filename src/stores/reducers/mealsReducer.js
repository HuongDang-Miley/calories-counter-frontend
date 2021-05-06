import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import * as actionTypes from "../actions/actionTypes";


const initialState = {
    meals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SHOW_ALL_DATA:
            return {
                ...state,
                meals: action.meals,
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        
        case actionTypes.DELETE_ALL_MEALS:
            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: [] })
            return {
                ...state,
                meals: []
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.EDIT_FOOD:

            let updateFoodInMeals = state.meals.map(meal => {
                if (meal.id === action.targetMealId) {
                    let updateFood = meal.food.map(food => {
                        if (food.id === action.targetFoodId) {
                            return {
                                ...food,
                                name: action.name,
                                cal: action.cal
                            }
                        } else { return food }
                    })
                    return {
                        ...meal,
                        food: updateFood
                    }
                } else { return meal }
            })

            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: updateFoodInMeals })
            return {
                ...state,
                meals: updateFoodInMeals
            }

        //=====================================================================================================================            
        //=====================================================================================================================            ◊
        case actionTypes.DELETE_FOOD:

            let deleteFoodInMeals = state.meals.map(meal => {
                if (meal.id === action.targetMealId) {
                    let deleteFood = meal.food.filter(food => food.id !== action.targetFoodId)

                    return {
                        ...meal,
                        food: deleteFood
                    }
                } else {
                    return meal
                }
            })

            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: deleteFoodInMeals })
            return {
                ...state,
                meals: deleteFoodInMeals
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.ADD_FOOD:

            let updateMeals = state.meals.map(meal => {
                if (meal.id === action.targetId) {
                    return {
                        ...meal,
                        food: [...meal.food, action.newFood]
                    }
                } else {
                    return meal
                }
            })
            console.log('addFoodInMeal', updateMeals)
            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: updateMeals })

            return {
                ...state,
                meals: updateMeals
            }


        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.EDIT_MEAL:

            let updateMeal = state.meals.map(meal => {
                if (meal.id === action.targetMealId) {
                    return { ...meal, mealType: action.newname }
                } else { return meal }
            })

            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: updateMeal })

            return {
                ...state,
                meals: updateMeal
            }


        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.DELETE_MEAL:

            let deleteMeal = state.meals.filter(meal => meal.id !== action.targetMealId)

            axios.post(`http://localhost:4000/api/data/update-meals`, { userId: action.userId, meals: deleteMeal })

            return {
                ...state,
                meals: deleteMeal
            }

        //=====================================================================================================================            
        //=====================================================================================================================            
        case actionTypes.ADD_MEAL:

            return {
                ...state,
                meals: [
                    {
                        id: uuidv4(),
                        mealType: action.mealType,
                        food: []
                    },
                    ...state.meals
                ]
            }

        default: return state

    }
}

export default mealsReducer