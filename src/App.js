import './App.css';
import { v4 as uuidv4 } from "uuid";
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
            <Meals
              meals={props.meals}
              addFood={props.addFood}
              deleteFood={props.deleteFood}
              deleteMeal={props.deleteMeal}
              editFood={props.editFood}
              editMeal={props.editMeal}
              handleSelectMeal ={props.handleSelectMeal}
            />
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
    state: state,
    meals: state.meals_Reducer

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFood: (targetId, food, cal) => dispatch({ type: 'ADD_FOOD', targetId: targetId, newFood: { id: uuidv4(), name: food, cal: cal } }),
    deleteFood: (targetMealId, targetFoodId) => dispatch({ type: 'DELETE_FOOD', targetMealId: targetMealId, targetFoodId: targetFoodId }),
    deleteMeal: (targetMealId) => dispatch({ type: 'DELETE_MEAL', targetMealId: targetMealId }),
    editFood: (targetMealId, targetFoodId, name, cal) => dispatch({ type: 'EDIT_FOOD', targetMealId: targetMealId, targetFoodId: targetFoodId, name: name, cal: cal }),
    editMeal: (targetMealId, name) => dispatch({ type: 'EDIT_MEAL', targetMealId: targetMealId, name: name, }),
    handleSelectMeal: (mealType) => (dispatch({type: 'ADD_MEAL', mealType: mealType}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
