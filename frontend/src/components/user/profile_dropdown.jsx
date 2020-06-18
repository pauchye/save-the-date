import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
// import { Link } from 'react-router-dom';
import "../modal/modal.scss"
// import "./modal.scss";

const mSTP = state => {
    return {
        currentUser: state.session.currentUser,
        events: Object.values(state.events)
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchEvents: () => dispatch(fetchEvents())
    }
}

class ProfileDropDown extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchEvents();
    // }

    handleClick(e){
        e.preventDefault();
        this.props.logout().then(this.props.closeModal)
        // this.props.logout()
    }

    render(){
        // const {events} = this.props;
        return (
          <div className="modal-child-div">
            <div className="modal-child-div1">
              <p>Your past dating schedual</p>
              <ul>
                <li>This is the drop down</li>
              </ul>
            </div>

            <div>
              <button onClick={this.handleClick} className="dash-cal">
                Logout
              </button>
            </div>
          </div>
        );
    }
}

export default connect(mSTP, mDTP)(ProfileDropDown)
