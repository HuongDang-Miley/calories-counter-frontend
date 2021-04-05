import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'; //thunk 1
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import mealsReducer from './stores/reducers/mealsReducer'
import workoutReducer from './stores/reducers/workoutReducer'
import loginReducer from './stores/reducers/loginReducer'
import calCounterReducer from './stores/reducers/calCounterReducer'
import { Router } from 'react-router';

const middleware = [thunk];//thunk 2 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  meals_Reducer: mealsReducer,
  login_Reducer: loginReducer,
  workout_Reducer: workoutReducer,
  cal_couter_Reducer: calCounterReducer,

})

const rootStore = createStore(rootReducer,    composeEnhancers(applyMiddleware(...middleware))
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={rootStore}>
      {/* <Router> */}

      <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
