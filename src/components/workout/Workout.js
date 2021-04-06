import React, { useRef } from 'react'
import './workout.css'
import WorkoutCard from './workoutCard/WorkoutCard'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export default function Workout(props) {
    let nameRef = useRef()
    let calRef = useRef()
    console.log(props)
    return (
        <div>
            <div className='selector-wrapper' >
                <button className='add-workout-button'>Add A Workout</button>
            </div>
            <table className='meal-table'>
                <thead>
                    <tr>
                        <th className='meal-types'>
                            <img src='/fire-light-theme.svg' />
                            WORKOUT</th>
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
                        <td className="edit-btn"><button className='add-n-save-btn'><AddCircleRoundedIcon></AddCircleRoundedIcon></button></td>
                        <td ></td>
                    </tr>
                    {/* ======================================= Display Food List ======================================= */}
                    {props.workouts.workouts.map(workout => (
                        <tr>
                            <WorkoutCard
                                key={workout.id}
                                workout={workout}
                            />
                        </tr>
                    ))}
                </tbody>
                {/* ======================================= Show Total Cal ======================================= */}
                <tfoot>
                    <tr>
                        <td className='food-cell last-cell'>Total Calories</td>
                        <td className='call-cell last-cell'>0</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
