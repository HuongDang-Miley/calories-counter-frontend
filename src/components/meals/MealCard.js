import React, { useState, useRef } from 'react'
import FoodCard from './foodCard/FoodCard.js'

export default function MealCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    const [food, setFood] = useState('')
    const [cal, setCal] = useState('')
    const foodRef = useRef()
    const calRef = useRef()

    const handleSubmitFood = (event) => {
        event.preventDefault();
        if (!food || !cal) {
            alert('Field Cannot Be Emtpy')
        } else {
            props.addFood(props.item.id, food, cal)
            setFood('')
            setCal('')
        }
    }

    const handleInputChange = (food, cal) => {
        setFood(food)
        setCal(cal)
    }

    return (
        <div className='meal-card'>
            {/* ======================================= Display Meal Type ======================================= */}
            <div>
                {showEdit
                    ? <span>
                        <input placeholder={props.item.type} ref={foodRef}></input>
                        <span> cal </span>
                        <button onClick={() => {
                            props.editMeal(props.item.id, foodRef.current.value)
                            setShowEdit(!showEdit)
                        }}>Save</button>
                    </span>
                    : <span>
                        <span>{props.item.type}</span>
                        <span> cal </span>
                        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
                    </span>
                }
                <button onClick={() => props.deleteMeal(props.item.id)}>Delete</button>
            </div>

            {/* ======================================= Display Food List ======================================= */}
            {props.item.food.map(item => (
                // <div key={item.id}>
                <FoodCard
                    key={item.id}
                    mealId={props.item.id}
                    item={item}
                    deleteFood={props.deleteFood}
                    editFood={props.editFood}
                />
                // </div>
            ))}
            {/* ======================================= Display Add New Food Section ======================================= */}
            <form
                onChange={() => handleInputChange(foodRef.current.value, calRef.current.value)}
                onSubmit={handleSubmitFood}
            >
                <input type='text' ref={foodRef}></input>
                <input type='number' ref={calRef}></input>
                <button>Add Food</button>
            </form>

            {/* ======================================= Display Total Calories ======================================= */}
            {props.item.food.length === 0
                ? <p>Total: 0</p>
                : <p>Total: {props.item.food.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</p>
            }

        </div>
    )
}
