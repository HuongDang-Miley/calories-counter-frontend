import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "./sidebar.css";
import { connect } from "react-redux";
import { deleteAllMeals, deleteAllWorkouts } from '../../stores/actions/mealActionsCreator'

function Sidebar(props) {
  // console.log('props in sidebar', props)
  let totalCalIntake = props.meals

    // map through meals array return an array that has child arrays of calories only
    .map((meal) =>
      meal.food
        .map((food) => food.cal)
        // return an array that has total calories in each child array
        .reduce((total, foodCal) => {
          return (total += Number(foodCal));
        }, 0)
    )
    // return total calories of the array
    .reduce((total, mealCal) => {
      return (total += Number(mealCal));
    }, 0);

  let totalCalBurned = props.workouts
    // return an array of calories only
    .map((workout) => workout.cal)
    // return total calories of the array
    .reduce((total, workoutCal) => {
      return (total += Number(workoutCal));
    }, 0);

  // const [totalCal, setTotalCal] = useState(Number(totalCalIntake) - Number(totalCalBurned))

  const deleteAllData = () => {
    props.deleteAllMeals(props.userId);
    props.deleteAllWorkouts(props.userId);
  };

  return (
    <div>
      <img className="logo" src="/logo.svg" alt='logo' />
      <table className="sidebar-table">
        <thead>
          <tr>
            <th className="sidebar-img-cell">
              <img className="sidebar-img" src="/total-dark-theme.svg" alt='total' />
            </th>
            <th className="sidebar-title-cell">Total Cal:</th>
            <th className="sidebar-cal-cell">
              {Number(totalCalIntake) - Number(totalCalBurned)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sidebar-img-cell">
              <img className="sidebar-img" src="/meal-dark-theme.svg" alt='meal' />
            </td>
            <td className="sidebar-title-cell">Cal Intake:</td>
            <td className="sidebar-cal-cell">{totalCalIntake}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="sidebar-img-cell">
              <img className="sidebar-img" src="/fire-dark-theme.svg" alt='fire' />
            </td>
            <td className="sidebar-title-cell">Cal Burned:</td>
            <td className="sidebar-cal-cell">{totalCalBurned}</td>
          </tr>
        </tbody>
      </table>
      <Button
        className="sidebar-btn"
        onClick={() => deleteAllData()}
        variant="outlined"
        color="secondary"
        fullWidth="true"
        startIcon={<DeleteIcon />}
      >
        RESER DATA
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals_Reducer.meals,
    workouts: state.workout_Reducer.workouts,
  };
};


export default connect(mapStateToProps, {
  deleteAllMeals,
  deleteAllWorkouts,
})(Sidebar);
