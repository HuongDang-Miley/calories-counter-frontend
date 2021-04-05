import React, { useState, useRef } from 'react'
import FoodCard from '../foodCard/FoodCard.js'
import './mealcard.css'
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
            <table>
                <tr>
                    <th>Food</th>
                    <th>Cal</th>
                    <th>Edit</th>
                    <th>Del</th>
                </tr>
                <tr>
                    <td>Chicken</td>
                    <td>20</td>
                    <td>Edit</td>
                    <td>Del</td>
                </tr>
            </table>
            {/* ======================================= Display Meal Type ======================================= */}
            <div>
                {showEdit
                    ? <span>
                        <input placeholder={props.item.type} ref={foodRef}></input>
                        <span> cal </span>
                        <button onClick={() => {
                            props.editMeal(props.item.id, foodRef.current.value)
                            setShowEdit(!showEdit)
                        }}>√</button>
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
            <div className='addfood-wrapper'>
                <form className='add-food'
                    onChange={() => handleInputChange(foodRef.current.value, calRef.current.value)}
                    onSubmit={handleSubmitFood}
                >
                    <input className='food-input' type='text' ref={foodRef}></input>
                    <input className='cal-input' type='number' ref={calRef}></input>
                    <button className='add-btn'>+</button>
                </form>

            </div>

            {/* ======================================= Display Total Calories ======================================= */}
            {props.item.food.length === 0
                ? <p>Total: 0</p>
                : <p>Total: {props.item.food.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</p>
            }

        </div>
    )
}
