import React from 'react'
const Workout=(props) =>{
    return (
    

        <div className ='workout-header'> 
        
        <h3>WORKOUT</h3>

      
      <div className = 'calories-header'>
        <h4>CALORIES BURNT</h4>
      </div>
        {/* <button onClick ={props.toggleField }></button> */}
        
        <input className="add-workout" placeholder="type workout"></input><input></input>
        
        {props.workouts.workouts.map((currWork)=>(
            <div>
            <button className="delete-workout-button" onClick={()=>props.deleteWorkout(currWork.id)}>X</button>
            {currWork.kcal}
            <u>{currWork.name}</u>
            
          </div>
        )
        )
    }
        </div>
    
        )
    }
  

export default Workout