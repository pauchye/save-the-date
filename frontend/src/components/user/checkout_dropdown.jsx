import React from "react";
import { connect } from "react-redux";
// import { openModal } from "../../actions/modal_actions";
// import { fetchEvents } from "../../actions/event_actions";
import "../modal/modal.scss";

const mSTP = (state) => {
  return null;
};

const mDTP = (dispatch) => {
  return null;
};

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.closeModal);
  }

  render() {
    return (
      <div className="modal-child-div">
        <div className="modal-child-div1">
          <ul>
            <li>This is the Checkout</li>
          </ul>
        </div>

        <div>
          <button onClick={this.handleClick}>Check Out</button>
        </div>
      </div>
    );
  }
}

export default connect(mSTP, mDTP)(CheckOut);
