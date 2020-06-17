import { connect } from "mongoose";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import React from 'react';


const mSTP = (state, ownProps) => {
    const eventId = ownProps.match.params.eventId;
    const event = state.events[eventId];
    return {
        event
    }
}

const mDTP = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchEvent: eventId => dispatch(fetchEvent(eventId))
    }
}

class EventShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const eventId = this.props.match.params.eventId
        this.props.fetchEvents();
        this.props.fetchEvent(eventId);
    }

    render(){
        return null;
    }
}

export default connect(mSTP, mDTP)(EventShow)