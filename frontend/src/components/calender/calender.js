import React from "react";
import calenderCSS from "./_calender.css";
import { Link } from "react-router-dom";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: "",
      21: "",
      22: "",
      23: "",
      24: "",
    };
    this.selected = "";
    this.allEvents = {};
    this.drag = this.drag.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drop = this.drop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reloadList = this.reloadList.bind(this);
    // this.deleteEvent = this.deleteEvent.bind(this)
  }

  reloadList() {
    window.location.reload();
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.currentUser);
    // debugger;
    const date = this.props.date;
    // const schedule = "test";
    const schedule = Object.values(this.state).slice(0, 16);

    this.props.currentUser.history.push([date, schedule]);

    console.log(this.props.currentUser.history);
    const modifiedUser = this.props.currentUser;

    // this.props.updateUser(modifiedUser)
    this.props.updateUser(modifiedUser);
    this.props.fetchUser(this.props.currentUser.id);
  }

  drag(e) {
    // debugger
    // let classNameTarget = e.target.className ||
    e.dataTransfer.setData("text/plain", e.target.className);
    let data = e.dataTransfer.getData("text/plain");
    this.selected = e.target.className;
    // debugger
    // this.allEvents[this.selected] = {};
    this.setState({
      [e.target.className]: document.getElementsByClassName(data)[0],
    });
    // debugger
    // e.target.appendChild(document.getElementsByClassName(data)[0]);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  // deleteEvent(e){
  //     let parentNode = e.target.parentNode;
  //     // debugger
  //     parentNode.remove()
  //     // debugger
  // }

  drop(e) {
    e.preventDefault();
    // debugger
    e.dataTransfer.setData("text/plain", e.target.className);
    let data = e.dataTransfer.getData("text/plain");
    // debugger
    let thisNode = document.getElementsByClassName(data)[0];
    if (thisNode) {
      let copiedNode = thisNode.cloneNode(true);
      // e.target.appendChild(document.getElementsByClassName(data)[0]);
      e.target.appendChild(copiedNode);
      console.log("this.allEvents 1", this.allEvents);
      console.log("this.state 1", this.state);
      this.setState({ [e.target.className]: this.allEvents[this.selected] });
      console.log("this.allEvents 2", this.allEvents);

      console.log("this.state 2", this.state);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit} className="cal-button">
          {" "}
          Save the Date!{" "}
        </button>
        <button onClick={this.reloadList} className="cal-button">
          {" "}
          Clear the List!{" "}
        </button>
        {/* <Link className='cal-button' to='/dash'> Clear the List! </Link> */}
        <div className="calender-results-page">
          <div className="calender">
            <div>{/* <h3>{this.props.date}</h3> */}</div>
            <div className="8" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>TIME</h4>
              <div
                className="drag-this"
              >
                <h4>EVENT</h4>
                <h6>DETAILS</h6>
              </div>
            </div>

            <div className="9" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>9AM</h4>
            </div>

            <div className="10" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>10AM</h4>
            </div>

            <div className="11" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>11AM</h4>
            </div>

            <div className="12" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>12AM</h4>
            </div>

            <div className="13" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>1PM</h4>
            </div>

            <div className="14" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>2PM</h4>
            </div>

            <div className="15" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>3PM</h4>
            </div>

            <div className="16" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>4PM</h4>
            </div>

            <div className="17" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>5PM</h4>
            </div>

            <div className="18" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>6PM</h4>
            </div>

            <div className="19" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>7PM</h4>
            </div>

            <div className="20" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>8PM</h4>
            </div>

            <div className="21" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>9PM</h4>
            </div>

            <div className="22" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>10PM</h4>
            </div>

            <div className="23" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>11PM</h4>
            </div>

            <div className="24" onDrop={this.drop} onDragOver={this.allowDrop}>
              <h4>12PM</h4>
            </div>
          </div>

          <div
            className="results"
            onDrop={this.drop}
            onDragOver={this.allowDrop}
          >
            <h3>Events at This Location</h3>

            {this.props.events.map((event, id) => {
              {
                this.allEvents[event.title] = event;
              }
              return (
                <div
                  key={id}
                  draggable="true"
                  //    id={id}
                  className={event.title}
                  onDragStart={this.drag}
                >
                  <h4>{event.title}</h4>
                  <h6>{event.description}</h6>
                  {/* <h6 onClick={this.deleteEvent} >X</h6> */}
                </div>
              );
            })}

            {/* <h4>DINING EVENT</h4> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Calender;
