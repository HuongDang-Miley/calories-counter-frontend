import React, { useState, useRef } from 'react'
import FoodCard from '../foodCard/FoodCard.js'
import './mealcard.css'
export default function MealCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    let foodRef = useRef()
    let calRef = useRef()


    const handleAddFood = (food, cal) => {
        if (!food || !cal) {
            alert('Field Cannot Be Emtpy')
        } else {
            props.addFood(props.item.id, food, cal)
            foodRef.current.value = ''
            calRef.current.value = ''
        }
    }

    return (
        <div className='meal-card'>
            <table>
                {/* ======================================= Display Meal Type ======================================= */}
                <tr>
                    <th>{showEdit
                        ? <input placeholder={props.item.type} ref={foodRef}></input>
                        : props.item.type}
                    </th>
                    <th>Cal</th>
                    <th>{showEdit
                        ? <button onClick={() => {
                            props.editMeal(props.item.id, foodRef.current.value)
                            setShowEdit(!showEdit)
                        }}>Save</button>
                        : <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
                    }
                    </th>
                    <th><button onClick={() => props.deleteMeal(props.item.id)}>Delete</button></th>
                </tr>

                {/* ======================================= Display Food List ======================================= */}
                {props.item.food.map(item => (
                    <FoodCard
                    key={item.id}
                    mealId={props.item.id}
                    item={item}
                    deleteFood={props.deleteFood}
                    editFood={props.editFood}
                />
                ))}
                {/* ======================================= Display Add New Food Section ======================================= */}
                <tr>
                    <td><input type='text' ref={foodRef}></input></td>
                    <td><input type='number' ref={calRef}></input></td>
                    <td></td>
                    <td><button onClick={() => handleAddFood(foodRef.current.value, calRef.current.value)}>ADD</button></td>
                </tr>

                {/* ======================================= Display Total Calories ======================================= */}
                <tr>
                    {props.item.food.length === 0
                        ? <td>Total: 0</td>
                        : <td>Total: {props.item.food.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</td>
                    }
                </tr>
            </table>
        </div>
    )
}
