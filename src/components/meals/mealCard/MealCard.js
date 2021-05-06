import React, { useState, useRef } from 'react'
import Meal from '../../../Meal.svg'
import FoodCard from '../foodCard/FoodCard.js'
import './mealcard.css'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export default function MealCard(props) {

    console.log()
    const [showEdit, setShowEdit] = useState(false)
    const [selectMeal, setSelectMeal] = useState(null)
    let foodRef = useRef()
    let calRef = useRef()


    const handleAddFood = (food, cal) => {
        if (!food || !cal) {
            alert('Field Cannot Be Emtpy')
        } else {
            props.addFood(props.userId, props.item.id, food, cal)
            foodRef.current.value = ''
            calRef.current.value = ''
        }
    }

    const handleEditMeal = (mealId, editName) => {
        if (!editName) {
            alert('You Haven Not Select A Meal Type')
        } else {
            props.editMeal(mealId, editName)
        }
    }

    return (
        <div>
            <table className='meal-table'>
                {/* ======================================= Display Meal Type ======================================= */}
                <thead>
                    <tr>
                        <th className='meal-types'>{showEdit //=> show selector when hit edit button
                            ? <select className='select-button' onChange={(event) => setSelectMeal(event.target.value)}>
                                <option value='none' defaultValue hidden>SELECT MEAL TYPE</option>
                                <option value="BREAKFAST">BREAKFAST</option>
                                <option value="BRUNCH">BRUNCH</option>
                                <option value="LUNCH">LUNCH</option>
                                <option value="SNACK">SNACK</option>
                                <option value="DINNER">DINNER</option>
                            </select>
                            : <>
                                <img src={Meal} alt='meal-img' />
                                {props.item.mealType.toUpperCase()}

                            </>}
                        </th>
                        <th className='cal-cell'>CALORIES</th>
                        <th className='edit-btn'>{showEdit
                            ? <button //=> Save Btn
                                className='add-n-save-btn'
                                onClick={() => {
                                    handleEditMeal(props.item.id, selectMeal)
                                    // handleEditMeal(props.item.id, foodRef.current.value)
                                    setShowEdit(!showEdit)
                                }}><CheckCircleRoundedIcon></CheckCircleRoundedIcon></button>
                            : <button onClick={() => setShowEdit(!showEdit)}><CreateRoundedIcon></CreateRoundedIcon></button> //=> Edit Btn
                        }
                        </th>

                        {/* =========== Delete Button =========== */}
                        {/* <th className='del-btn'><button onClick={() =>console.log(props.item.id)}><DeleteIcon></DeleteIcon></button></th> */}
                        <th className='del-btn'><button onClick={() => props.deleteMeal(props.userId, props.item._id)}><DeleteIcon></DeleteIcon></button></th>
                    </tr>

                </thead>

                {/* ======================================= Display Food List ======================================= */}
                <tbody>
                    {props.item.food.map(item => (
                        <FoodCard
                            userId={props.userId}
                            key={item.id}
                            mealId={props.item.id}
                            item={item}
                            deleteFood={props.deleteFood}
                            editFood={props.editFood}
                        />
                    ))}

                    {/* ======================================= Display Add New Food Section ======================================= */}
                    <tr>
                        <td className='food-cell'>
                            <input className='food-input' placeholder='Type Food' type='text' ref={foodRef}></input>
                        </td>
                        <td className='cal-cell'>
                            <input className='cal-input' placeholder='150' type='number' ref={calRef}></input>
                        </td>
                        {/* =========== Add Button =========== */}
                        <td className="edit-btn"><button className='add-n-save-btn' onClick={() => handleAddFood(foodRef.current.value, calRef.current.value)}><AddCircleRoundedIcon></AddCircleRoundedIcon></button></td>
                        <td ></td>
                    </tr>
                </tbody>

                {/* ======================================= Display Total Calories ======================================= */}
                <tfoot>
                    <tr>
                        <td className='food-cell last-cell'>Total</td>
                        <td className='cal-cell last-cell'>{props.item.food.length === 0
                            ? <>0</>
                            : <>{props.item.food.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</>
                        }
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
