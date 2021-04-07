import React, { connect, useState } from 'react'

import './meals.css'
import MealCard from './mealCard/MealCard.js'



export default function Meals(props) {
    
    return (
        <div>
            <div className='selector-wrapper' >
                <select onChange={(event) => props.handleSelectMeal(event.target.value)}>
                    <option value='none' defaultValue hidden>Add A Meal</option>
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="BRUNCH">Brunch</option>
                    <option value="LUNCH">Lunch</option>
                    <option value="SNACK">Snack</option>
                    <option value="DINNER">Dinner</option>
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

// const mapStateToProps = (state) => {
//     return {
//       state: state,
//       meals: state.meals_Reducer

//     }
//   }


//   export default connect(mapStateToProps )(Meals);
