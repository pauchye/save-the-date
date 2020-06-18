import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';


import "../modal/modal.scss"
import { fetchEvent } from '../../actions/event_actions';

const mSTP = state => {
    return {
        
    }
}

const mDTP = dispatch => {
    return {
        // fetchEvent: (eventId) =>  dispatch(fetchEvent(eventId)),
        openModal: (modal) => dispatch(openModal(modal)),
    };
}

// class LocationShow extends React.Component{
//     constructor(props){
//         super(props)
//     }
const LocationShow = props => {
    // render(){
    // debugger;
        return (
            <div className="modal-child-div">
            <div className="modal-child-div1">
                <ul>
                    <p>this is location show</p>
                {/* {props.event.title} */}
                </ul>
            </div>
            </div>
        );
    // }
}

export default connect(mSTP, mDTP)(LocationShow);