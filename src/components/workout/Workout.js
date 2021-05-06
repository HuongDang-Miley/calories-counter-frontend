import React, { useRef } from 'react'
import './workout.css'
import WorkoutCard from './WorkoutCard'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import { connect } from "react-redux";
import { addWorkout, editWorkout, deleteWorkout } from '../../stores/actions/mealActionsCreator'

function Workout(props) {
    let nameRef = useRef()
    let calRef = useRef()

    const handleAddWorkout = () => {
        if (nameRef.current.value === '' || calRef.current.value === '') {
            alert('Field Cannot Be Empty, Calories Must Be A Number')
            return
        } 
        props.addWorkout(props.userId, nameRef.current.value, calRef.current.value)
        nameRef.current.value = ''
        calRef.current.value = ''
    }

    return (
        <div>
            <table className='workout-table'>
                <thead>
                    <tr>
                        <th className='meal-types'><img src='/fire-light-theme.svg' alt='fire' />WORKOUT</th>
                        <th className='cal-cell'>CAL BURNED</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='food-cell'>
                            <input className='food-input' placeholder='Type Workout' type='text' ref={nameRef}></input>
                        </td>
                        <td className='cal-cell'>
                            <input className='cal-input' placeholder='150' type='number' ref={calRef}></input>
                        </td>
                        {/* =========== Add Button =========== */}
                        <td className="edit-btn"><button className='add-n-save-btn' onClick={() => handleAddWorkout()}><AddCircleRoundedIcon></AddCircleRoundedIcon></button></td>
                        <td ></td>
                    </tr>
                    {/* ======================================= Display Workout List List ======================================= */}
                    {props.workouts.map(workout => (
                        <tr key={workout.id}>
                            <WorkoutCard
                                userId={props.userId}
                                workout={workout}
                            />
                        </tr>
                    ))}
                </tbody>
                {/* ======================================= Show Total Cal ======================================= */}
                <tfoot>
                    <tr>
                        <td className='food-cell last-cell'>Total</td>
                        <td className='cal-cell last-cell'>
                            {props.workouts.length === 0
                                ? <>0</>
                                : <>{props.workouts.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</>
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


const mapStateToProps = (state) => {
    return {
        workouts: state.workout_Reducer.workouts,
    };
};


export default connect(mapStateToProps, {
    addWorkout,
    editWorkout,
    deleteWorkout,
})(Workout);
