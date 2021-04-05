import './App.css';
import React,{ useRef } from 'react'
import { connect } from 'react-redux'
import Meals from './components/meals/Meals'
import Workout from './components/workout/Workout'
import Sidebar from './components/sidebar/Sidebar'
import CaloriesCounter from './components/caloriesCounter/CaloriesCounter'

const App = (props) => {
  console.log(props)
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
           <Workout deleteWorkout={props.deleteWorkout}
           toggleField={props.toggleField}
           workouts= {props.workouts}
           editWorkout={props.editWorkout}/>
         </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
  workouts:state.workout_Reducer,
  show:state.showAdd,
  buttonText: state.buttonText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWorkout: (id)=> dispatch({type:"DELETE_WORK",targetId:id}),
    toggleField : ()=>dispatch({type:"TOGGLE_FIELD"}),
    editWorkout: (id) => dispatch({type:"EDIT_WORK", targetId: id})
    
    
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
