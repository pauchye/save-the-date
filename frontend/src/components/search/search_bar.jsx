import React from 'react';
import { connect } from 'react-redux';

const mSTP = state => {
    return {
        events: Object.values(state.events),
        dinings: Object.values(state.dinings)
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
        const events = this.props.events;
        const dinings = this.props.dinings;

        return (
          <form action="">
            <div>
              <input
                type="text"
                value={this.state.search}
                onChange={this.update("search")}
              />
            </div>

          </form>
        );
    }
    
}