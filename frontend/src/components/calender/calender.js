import React from 'react';
import calenderCSS from "./_calender.css"

class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            8:"",
            9:"",
            10:"",
            11:"",
            12:"",
            13:"",
            14:"",
            15:"",
            16:"",
            17:"",
            18:"",
            19:"",
            20:"",
            21:"",
            22:"",
            23:"",
            24:"",
        }

        this.drag = this.drag.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
    }

    drag(e){
        e.dataTransfer.setData("text", e.target.className);
        let data = e.dataTransfer.getData("text");
        this.setState({ [e.target.className]: document.getElementsByClassName(data)[0] });

    }

    allowDrop(e){
        e.preventDefault();
    }

    drop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementsByClassName(data)[0]);
        this.setState({ [e.target.className]: document.getElementsByClassName(data)[0] });
        console.log(this.state);
    }


    render() {
            return (
<form>
                <div className="calender-results-page">
                    <div className="calender">
                        <div>
                            <h3>SELECTED DATE</h3>
                        </div>
                        <div className="8"
                            onDrop={this.drop}  
                            onDragOver={this.allowDrop}>
                            <h4>8AM</h4>
                            <div
                                className="drag-this"
                                draggable="true"
                                onDragStart={this.drag}
                            >
                                <h4>MOVIE EVENT</h4>
                                <h6>MOVIE EVENT DESCRIPTION</h6>
                            </div>
                        </div>

                        <div className="9"
                            onDrop={this.drop}  
                            onDragOver={this.allowDrop}>
                            <h4>9AM</h4>
                        </div>

                        <div className="10"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>10AM</h4>
                        </div>

                        <div className="11"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>11AM</h4> 
                        </div>

                        <div className="12"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>12AM</h4>
                        </div>

                        <div className="13"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>1PM</h4>
                            
                        </div>

                        <div className="14"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>2PM</h4>
                            
                        </div>

                        <div className="15"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>3PM</h4>
                        
                        </div>

                        <div className="16"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>4PM</h4>
                            
                        </div>

                        <div className="17"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>5PM</h4>
                            
                        </div>

                        <div className="18"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>6PM</h4>
                            
                        </div>

                        <div className="19"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>7PM</h4>
                            
                        </div>

                        <div className="20"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>8PM</h4>
                            
                        </div>

                        <div className="21"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>9PM</h4>
                            
                        </div>

                        <div className="22"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>10PM</h4>
                            
                        </div>

                        <div className="23"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>11PM</h4>
                            
                        </div>

                        <div className="24"
                            onDrop={this.drop}
                            onDragOver={this.allowDrop}>
                            <h4>12PM</h4>
                            
                        </div>

                    </div>

                    <div className="results"
                        onDrop={this.drop}
                        onDragOver={this.allowDrop}>
                        <h3>Results go here</h3>
                       
                            
                          {this.props.events.map((event, id)=>
                           {return (<div key={id} 
                           draggable="true"
                           className="drag-this2"
                           onDragStart={this.drag}
                           >
                              <h4>{event.title}</h4> 
                                <h6>{event.description}</h6>
                               </div>)})}
                        
                            {/* <h4>DINING EVENT</h4> */}
                            
                        
                    </div>
                </div>
</form>
            );
        }
}

export default Calender;