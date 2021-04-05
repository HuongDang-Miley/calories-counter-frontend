import React from 'react'
import './meals.css'
import MealCard from './mealCard/MealCard.js'
import Test2 from './Test2.js'



export default function Meals(props) {
    return (
        <div>
            <div className='selector' >
                <select onChange={(event) => props.handleSelectMeal(event.target.value)}>
                    <option value='none' defaultValue hidden>Add A Meal</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Brunch">Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Snack">Snack</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>

            {props.meals.meals.map(item => (
                <MealCard
                    key={item.id}
                    item={item}
                    addFood={props.addFood}
                    deleteFood={props.deleteFood}
                    deleteMeal={props.deleteMeal}
                    editFood={props.editFood}
                    editMeal={props.editMeal}
                />
            ))}
        </div>
    )
}
