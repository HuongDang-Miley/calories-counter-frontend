import './App.css';
import { useRef } from 'react'
import { connect } from 'react-redux'
import Meals from './components/meals/Meals'
import Workout from './components/workout/Workout'
import Sidebar from './components/sidebar/Sidebar'
import TopNav from './components/topNav/TopNav'

const App = (props) => {
  return (
    <div className="App">
      <div className='sidebar-wrapper' >
        <Sidebar />
      </div>
      <div className='main-wrapper'>
        <div className='TopNav-wrapper' >
          <TopNav />
        </div>
        <div className='cards-wrapper'>
          <div className='meals-wrapper'>
            <Meals />
          </div>
          <div className='workout-wrapper'>
            <Workout />
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
   state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
