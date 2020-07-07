import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  if (!state.session.user) return null;
  return {
    history: state.session.user.history,
  };
}

const mDTP = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    // debugger;
    this.props.openModal('date');
    
  }

  render() {
    // debugger;
    if (!this.props.history){
    return (
      <div className="">
        <div className="">
          <p>You don't have a schedule yet</p>
        </div>
      </div>
    )}

    const allEvents = this.props.history.map((event, idx) => {
      return (
        <option value={idx} key={idx}>
          {event[0]}
        </option>
      )
    })

    return (
      <div className="modal-child-div">
        <div className="modal-child-div1">
          <h2>Your past schedule</h2>
          {/* <ul className="modal-ul">{allEvents}</ul> */}

          <select id="date-history" onChange={this.handleClick}>
            {allEvents}
          </select>
        </div>
      </div>
    );
  }
}


export default connect(mSTP, mDTP)(Profile);