import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
// import { Link } from 'react-router-dom';
import "../modal/modal.scss"
// import "./modal.scss";

const mSTP = state => {
  // debugger
    if (!state.session.user) return null;

    return {
      history: state.session.user.history,
    };
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
      // this.props.logout().then(this.props.closeModal)
      this.props.logout();
      this.props.closeModal();
    }

    render(){

      
      if (!this.props.history)
      return (
        <div className="modal-child-div">
            <div className="modal-child-div1">
              <p>You don't have a schedule yet</p>
            </div>

            <div>
              <button onClick={this.handleClick} className="dash-cal">
                Logout
              </button>
            </div>
          </div>
        );
        
      const history = this.props.history[this.props.history.length-1];
      const allEvents = history[1].map((event,idx) => {
        // debugger;
        if (event){
        return (
        <li>
        {idx+9} : {event.title}

        </li>
        )}
      });

        return (
          <div className="modal-child-div">
            <div className="modal-child-div1">
              <p>Your past dating schedual</p>
              <ul>
                <h1>{history[0]}</h1>
                <ul>{allEvents}</ul>

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
