import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './_dash.css';
import secrets from '../../secrets';
import CalendarContainer from '../calender/calender_container';
// import { openModal } from '../../actions/modal_actions';
// import LocationShow from './location_show';

const {googleMapKey} = secrets;

// const markers = [ {lat: 40.8678805, lng: -73.87103059999999}, {lat: 40.05, lng: -73.9999999}, {lat: 40.7678805, lng: -73.97103059999999}]

const jsonStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#f7d2f7"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5e4f9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

  
class Dash extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: '',
      filteredEvents: this.props.events
    };
      this.handleChange = this.handleChange.bind(this)
      this.filterListings = this.filterListings.bind(this)
      this.onReady = this.onReady.bind(this)
      
    }

    static defaultProps = {
        center: {lat: 40.7678805, lng: -73.97103059999999}, 
        zoom: 13
     }

    componentDidMount(){        
        // const userId = this.props.currentUser.id;
        // this.props.fetchUser(userId);
        
        this.props.fetchEvents().then(
            () => this.setState({filteredEvents: this.props.events[0]})
        );
    }


    handleChange(input){
        return (e) => {
            this.setState({[input]: e.currentTarget.value})
        }
    }

    filterListings(mapProps, map) {
        this.map = map;
        let NElat = this.map.getBounds().getNorthEast().lat();
        let NElng = this.map.getBounds().getNorthEast().lng();
        let SWlat = this.map.getBounds().getSouthWest().lat();
        let SWlng = this.map.getBounds().getSouthWest().lng();
        console.log('this.props.events[0]', this.props.events[0])
        console.log('this.state', this.state)
        let filteredEvents = this.props.events[0].filter(event => {
            return(
                (event.lat < NElat && event.lat > SWlat)&&(event.lng < NElng && event.lng > SWlng)
            )
        })
        this.setState({filteredEvents: filteredEvents})
        console.log('this.state', this.state)

    }

    onReady(props, map) {
        this.map = map;
        console.log('onReady map:', this.map.getBounds())
    }


    render() {

        const events = this.props.events[0];        
        if(!events) return null;

        return (
            <div className = "dash-body">
                <div className = "dash-cont">
                    <Map 
                styles = {jsonStyle}    
                style={{width: '40%', 
                height: '85%', 
                position: 'relative',
                borderRadius: "20px",
            }}
                google={this.props.google} 
                zoom={14} 
                initialCenter={{
                    lat: 40.7678805,
                    lng: -73.97103059999999
                  }}
                  onReady= {this.onReady}
                  onZoomChanged = {this.filterListings}
                  onDragend = {this.filterListings}
                > 
                    {events.map((event, id)=>{
                        let lat = event.lat;
                        let lng = event.lng;

                        return <Marker
                        key={id}
                        title={event.title}
                        position={{lat, lng}}
                        className="Marker"
                        onClick={() => this.map.panTo({ lat: event.lat, lng: event.lng })} 
                        />
                    })}

                </Map>
                </div>
                <div className="dash-right" >
                    <div> 
                        <input className="dash-cal" type="date" value={this.state.date} onChange={this.handleChange('date')}/>
                    </div>

                    {/* <a onClick={() => openModal("checkOut")}></a> */}
                    <div>

                    <CalendarContainer 
                      events={this.state.filteredEvents}
                      date = {this.state.date}
                      
                    />
                </div>                
            </div>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: googleMapKey
  })(Dash)