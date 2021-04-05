import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { logout } from "../../stores/actions/authActionCreator";
import { stayUp } from "../../stores/actions/authActionCreator";





export const TopNav=(props)=> {
    console.log(props);

    useEffect(() => {
        let getToken = localStorage.getItem("jwtToken");
        // props.stayUp(getToken);
    
        console.log(getToken)
      }, []);
    
    return (
        <div>
            TopNav
            {/* <button onClick={props.logout}>LOG OUT</button> */}

        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state);
  
    return {
      newState: state
    //   .login_Reducer,
    };
  };
  
  export default connect(mapStateToProps,{ })(TopNav);