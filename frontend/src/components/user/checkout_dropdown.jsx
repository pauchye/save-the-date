import React from "react";
import { connect } from "react-redux";
import { fetchEvents } from '../../actions/event_actions';
import Message from '../message/message'
import './checkout.css'

const mSTP = (state) => {
  if (!state.session.user) return null;

  return {
    history: state.session.user.history,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  }
};

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  update(price){
    return e => this.setState({
      price: e.currentTarget.value
    })
  }
  

  render() {
    // debugger;

    const history = this.props.history[this.props.history.length - 1];
    let sum = 0;
    const allEvents = history[1].map((event, idx) => {
      if (event){
      sum += event.price
      return(
        <li key={idx}>
          {idx + 9}:00 - {event.title}      ${event.price}
        </li>
      )
    } else {
      return(
        <div></div>
      )
    }
    });

    let messageToSend = "" 
    history[1].forEach((event, idx) => {
      if (event){
        messageToSend += `${idx + 9}:00 - ${event.title} at ${event.description} \n` 
    }
    });
    let dateDate = history[0] 

    console.log(sum);
    
    return (
      <div className="checkout-main">
        <div className="checkout-body">
        <div className="checkout-text">
          {/* <a href="#/profile">Profile</a> */}
          <h2>Enjoy your Date</h2>
          <h4>On {history[0]}</h4>
          <ul className="modal-ul">{allEvents}</ul>
          <h4>Total: ${sum}</h4>

        </div>
        <div>Text details to your date: </div>

        <Message details={messageToSend} dateDate={dateDate}/>

        <div>
          {/* <button onClick={this.handleClick}>Check Out</button> */}
        </div>
        </div>
      </div>
    );
  }
}

export default connect(mSTP, mDTP)(CheckOut);
