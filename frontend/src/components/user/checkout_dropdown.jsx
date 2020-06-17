import React from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import "../modal/modal.scss";

const mSTP = (state) => {
  return null;
};

const mDTP = (dispatch) => {
  return null;
};

class ProfileDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.closeModal);
  }

  render() {
    // const { events } = this.props;
    return (
      <div className="modal-child-div">
        <div className="modal-child-div1">
          <ul>
            <li>This is the drop down</li>
          </ul>
        </div>

        <div>
          <button onClick={this.handleClick}>Check Out</button>
        </div>
      </div>
    );
  }
}

export default connect(mSTP, mDTP)(ProfileDropDown);
