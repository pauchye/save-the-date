import React from "react";
import { connect } from "react-redux";

const mSTP = (state) => {
  return null;
};

const mDTP = (dispatch) => {
  return null;
};

class Profile extends React.Component{
    
    render(){
        return(
            <h1>this is the profile</h1>
        )
    }
}

export default connect(mSTP, mDTP)(Profile);