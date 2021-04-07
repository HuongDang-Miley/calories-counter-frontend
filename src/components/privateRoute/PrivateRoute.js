import React,{useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types';
import {  stayUp } from "../../stores/actions/authActionCreator";

export const PrivateRoute = (props) => {
  // {
  // component: Component,
  
  // newState,
  // ...rest
// }
//   console.log(newState);
  

  // let getToken = localStorage.getItem("jwtToken");
  // props.stayUp(getToken);
  // useEffect(() => {
  // }, []);
console.log(props);

  return (
    <div>
      PrivateRoute
    </div>
    // <Route
      // {...rest}
      // render={(props) =>
      // props.isAuth === true ? (
          // <Component {...props} />
        // ) : (
        //   <Redirect to="/login" />
        // )
      // }
      
    // />
  );
};

// PrivateRoute.propTypes = {
//   authUser: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//      newState: state
//    });
//the diff between top and down
const mapStateToProps = (state) => {
  // console.log(state);

  return {
    newState: state.login_Reducer,
  };
};

export default connect(mapStateToProps,{stayUp})(PrivateRoute);
