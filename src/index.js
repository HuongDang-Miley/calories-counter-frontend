import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import mealsReducer from './stores/reducers/mealsReducer'
import workoutReducer from './stores/reducers/workoutReducer'
import loginReducer from './stores/reducers/loginReducer'


const mealsStore = createStore(mealsReducer)

const rootStore = combineReducers({
  meals_Reducer: mealsReducer,
  login_Reducer: loginReducer,
  workout_Reducer: workoutReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={mealsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
