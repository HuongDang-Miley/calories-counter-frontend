import './App.css';
import React,{ useRef } from 'react'
import { connect } from 'react-redux'
import Meals from './components/meals/Meals'
import Workout from './components/workout/Workout'
import Sidebar from './components/sidebar/Sidebar'
import CaloriesCounter from './components/caloriesCounter/CaloriesCounter'

const App = (props) => {
  return (
    <div className="App">
      <div className='sidebar-wrapper' >
        <Sidebar />
      </div>
      <div className='main-wrapper'>
        <div className='CaloriesCounter-wrapper' >
          <CaloriesCounter />
        </div>
        <div className='cards-wrapper'>
          <div className='meals-wrapper'>
            <Meals />
          </div>
          <div className='workout-wrapper'>
            <Workout />
            <button onClick ={props.toggleField }></button>
            <h1>test "workout":</h1>
            {props.workouts.map((currWork)=>(
              <div>
                <button onClick={()=>props.deleteWorkout(currWork.id)}>X</button>
                <u>{currWork.name}</u>
                {currWork.kcal}

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
  workouts:state.workoutArray,
  show:state.showAdd,
  buttonText: state.buttonText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWorkout: (id)=> dispatch({type:"DELETE_WORK",targetId:id}),
    toggleField : ()=>dispatch({type:"TOGGLE_FIELD"})
    
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
