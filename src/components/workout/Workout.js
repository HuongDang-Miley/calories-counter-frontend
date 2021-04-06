import React from "react";
import "./workout.css";

export const Workout = (props) => {
  return (
    <div className="workout-header">
      <button className="add-workout" onClick={() => props.addWorkout()}>
        {" "}
        ADD A WORKOUT
      </button>
      <br />
      <br />
      <section className="child">
        <h3>WORKOUT</h3>
      </section>

      {/* <div className = 'calories-header'> */}
      <section className="child">
        <h4>CALORIES BURNT</h4>
      </section>
      {/* </div> */}
      {/* <button onClick ={props.toggleField }></button> */}
      <br />
      <br />
      <input className="type-workout" placeholder="type workout"></input>
      <input className="type-calories"></input>

      {props.workouts.workouts.map((currWork) => (
        <div>
          <button
            className="delete-workout-button"
            onClick={() => props.deleteWorkout(currWork.id)}
          >
            x
          </button>
          <button
            className="edit-workout-button"
            onClick={() => props.editWorkout(currWork.id)}
          >
            ✏
          </button>
          <section className="workout-name both">
            <ul>
              <li>
                <u>{currWork.name}</u>
              </li>
            </ul>
          </section>
          <section className="workout-calories both">{currWork.cal}</section>
        </div>
      ))}
    </div>
  );
};

// export default Workout;
