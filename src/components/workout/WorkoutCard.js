import React, { useRef, useState } from 'react'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { connect } from "react-redux";
import {
    showAllData,
    addWorkout,
    editWorkout,
    deleteWorkout,
} from '../../stores/actions/mealActionsCreator'

function WorkoutCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    let nameRef = useRef()
    let calRef = useRef()

    return (
        <>
            {/* ======================================= Toggle Display/Input fields ======================================= */}
            <td className='food-cell'>{showEdit
                ? <input className='food-input' ref={nameRef} defaultValue={props.workout.name}></input>
                : props.workout.name}
            </td>

            <td className='cal-cell'>{showEdit
                ? <input className='cal-input' type='number' ref={calRef} defaultValue={props.workout.cal}></input>
                : props.workout.cal}
            </td>
            {/* ======================================= Toggle Edit/Save Buttons ======================================= */}
            <td className='edit-btn'> {showEdit
                //======================================= => save button
                ? <button
                    className='add-n-save-btn'
                    onClick={() => {
                        props.editWorkout(props.userId, props.workout.id, nameRef.current.value, calRef.current.value)
                        setShowEdit(!showEdit)
                    }}><CheckCircleRoundedIcon></CheckCircleRoundedIcon></button>
                //======================================= => edit button
                : <button onClick={() => {
                    setShowEdit(!showEdit)
                }}><CreateRoundedIcon></CreateRoundedIcon></button>}
            </td>
            {/* ======================================= Delete Button ======================================= */}
            <td className='del-btn'><button
                className={showEdit ? 'del-btn-focus' : null}
                onClick={() => props.deleteWorkout(props.userId, props.workout.id)}><DeleteIcon></DeleteIcon></button>
            </td>
        </>
    )
}

const mapStateToProps = (state) => { return state}

export default connect(mapStateToProps, {
    showAllData,
    addWorkout,
    editWorkout,
    deleteWorkout,
})(WorkoutCard);


