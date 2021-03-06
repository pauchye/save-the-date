import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
import "../modal/modal.scss"

const mSTP = state => {
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
        this.handleCheckout = this.handleCheckout.bind(this);
    }


    handleClick(e){
      e.preventDefault();
      this.props.logout();
      this.props.closeModal();
    }

    handleCheckout(e){
      e.preventDefault();
      window.location.hash = `/checkout`
      this.props.closeModal();
    }

    render(){
      
      if (!this.props.history || this.props.history.length < 1 ){
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
      )};
        
      const history = this.props.history[this.props.history.length-1];
      // eslint-disable-next-line
      const allEvents = history[1].map((event,idx) => {
        if (event)
        return (
          <li key={idx}>
            {idx+9}:00 - {event.title}
          </li>
        )
      });

        return (
          <div className="modal-child-div">
            <div className="modal-child-div1">
              {/* <a href="#/profile">Profile</a> */}
              <button onClick={this.handleClick} className="dash-cal">
                Logout
              </button>
              <h2>Your schedule</h2>
              <h4>{history[0]}</h4>
              <ul className="modal-ul">{allEvents}</ul>
              {/* <a href="#/checkout">Check Out</a> */}
            </div>
            <button onClick={this.handleCheckout} className="dash-cal">
                Checkout
            </button>

            <div>
            {/* <button onClick={this.handleCheckout} className="dash-cal">
                Checkout
            </button> */}

              {/* <button onClick={this.handleClick} className="dash-cal">
                Logout
              </button> */}
            </div>
          </div>
        );
    }
}

export default connect(mSTP, mDTP)(ProfileDropDown)
