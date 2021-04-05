import React from 'react'
import './sidebar.css'
import { connect, Provider } from "react-redux";

export const Sidebar=(props)=> {
    console.log(props);
    
    return (
        <div>
            
            
            <p>Sidebar</p>
            <p>Sidebar</p>
            <p>Sidebar</p>
            <p>Sidebar</p>
            <p>Sidebar</p>
            <p>Sidebar</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      newState: state.login_Reducer,
    };
  };
  
  
  export default connect(mapStateToProps, )(Sidebar);
  