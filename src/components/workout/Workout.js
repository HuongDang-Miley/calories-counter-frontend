import React,{useRef} from 'react';
import "./workout.css"


const Workout=(props) =>{
    const workoutRef = useRef();
    const calRef =  useRef();

    return (
    
        <div>

        <div className ='workout-header'> 
        {/* <button className="add-workout"onClick={()=>props.addWorkout()}>+</button> */}
        <br />
        <br />
        <section className ="child"> 
        <h3>WORKOUT</h3>
        
        </section>

    
      {/* <div className = 'calories-header'> */}
        <section className="child">
            <h4>CALORIES BURNED</h4>

            </section>
      {/* </div> */}
        <button className= "toggle-btn" onClick ={props.toggleField }>{props.buttonText}</button>
        {props.show ?
        <div className="add-Workout-field">
            <h3>add workout</h3>
        {/* the inputs for the workouts and calories */}
        <input className="type-workout" ref={workoutRef} placeholder="type workout"></input><input className="type-calories" ref= {calRef}></input>
        {/* button that adds new workout and calories */}
        <button onclick={()=>props.addWorkout(workoutRef.current.value, calRef.current.value)}>add new workout</button>
            
        </div>
        :null}
        <br />
        <br />
        <br />
        

        {/* map through workout array */}
        {props.workouts.workouts.map((currWork)=>(
            <div>
            <button className="delete-workout-button" onClick={()=>props.deleteWorkout(currWork.id)}>x</button>
            <button className="edit-workout-button" onClick={()=>props.editWorkout(currWork.id)}>✏</button>
            <input placeholder="edit workout" onChange={(event)=> props.changeWorkoutName(currWork.id,event.target.value)}></input>
            <section className="workout-name both">
                <ul>
<li><b>{currWork.name}</b></li>
                
<li><b>{currWork.cal} calories burned</b></li>
    </ul>

            </section>

            
            
        </div>
        )
        )
    }
    </div>
        </div>
    
        )
    }


export default Workout