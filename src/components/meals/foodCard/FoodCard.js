import React, { useRef, useState } from 'react'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function FoodCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    let nameRef = useRef()
    let calRef = useRef()

    const handleEditFood = (mealId, itemId, editName, editCal) => {
        if (!editName || !editCal) {
            alert('Field Cannot Be Empty')
        } else {
            props.editFood(mealId, itemId, editName, editCal)
        }
    }

    return (
        <tr>
            <td className='food-cell'>{showEdit
                ? <input className='food-input' ref={nameRef} defaultValue={props.item.name}></input>
                : props.item.name}
            </td>

            <td className='cal-cell'>{showEdit
                ? <input className='cal-input' type='number' ref={calRef} defaultValue={props.item.cal}></input>
                : props.item.cal}
            </td>

            <td className='edit-btn'> {showEdit
                ? <button //=> save button
                    className='add-n-save-btn'
                    onClick={() => {
                        props.editFood(props.mealId, props.item.id, nameRef.current.value, calRef.current.value)
                        setShowEdit(!showEdit)
                    }}><CheckCircleRoundedIcon></CheckCircleRoundedIcon></button>

                : <button onClick={() => { //=>edit Button
                    setShowEdit(!showEdit)
                }}><CreateRoundedIcon></CreateRoundedIcon></button>}
            </td>

            <td className='del-btn'><button
                className={showEdit ? 'del-btn-focus' : null}
                onClick={() => props.deleteFood(props.mealId, props.item.id)}><DeleteIcon></DeleteIcon></button></td>
        </tr>
    )
}
