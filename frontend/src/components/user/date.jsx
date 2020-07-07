import React from 'react';
import { connect } from 'react-redux';

const mSTP = state => {
    if (!state.session.user) return null;
    return {
        history: state.session.user.history,
    };
}

class Date extends React.Component {
    
    render(){
        const e = document.getElementById("date-history");
        const idx = e.options[e.selectedIndex].value;
        const history = this.props.history[idx];
        // eslint-disable-next-line
        const thisEvent = history[1].map((event, idx) => {
            if (event)
            return (
                <li key={idx}>
                    {idx + 9}:00 - {event.title}
                </li>
            )
        });

        return (
            <div className="date-child-div">
                <div className="modal-child-div1">
                    <h4>
                        {history[0]}
                        {thisEvent}
                    </h4>
                </div>
            </div>
        )
    }
}

export default connect(mSTP, null)(Date);