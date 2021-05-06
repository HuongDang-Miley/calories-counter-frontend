import React from 'react'
import './meals.css'
import MealCard from './mealCard/MealCard.js'
import { addMeal } from '../../stores/actions/mealActionsCreator'
import { connect } from "react-redux";


function Meals(props) {

    return (
        <div>
            <div className='selector-wrapper' >
                <select onChange={(event) => props.addMeal(event.target.value)}>
                    <option value='none' defaultValue hidden>Add A Meal</option>
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="BRUNCH">Brunch</option>
                    <option value="LUNCH">Lunch</option>
                    <option value="SNACK">Snack</option>
                    <option value="DINNER">Dinner</option>
                </select>
            </div>

            {props.meals.map(item => (
                <MealCard
                    key={item.id}
                    item={item}
                    userId={props.userId}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals_Reducer.meals,
    };
};


export default connect(mapStateToProps, { addMeal })(Meals);

