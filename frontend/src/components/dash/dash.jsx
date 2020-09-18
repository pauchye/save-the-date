import React from 'react';
// import MapView from '../map/map';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import mapCSS from './_dash.css';
import secrets from '../../secrets';
import CalendarContainer from '../calender/calender_container';
import { openModal } from '../../actions/modal_actions';
import LocationShow from './location_show';
const { googleMapKey } = secrets;
const markers = [{ lat: 40.8678805, lng: -73.87103059999999 }, { lat: 40.05, lng: -73.9999999 }, { lat: 40.7678805, lng: -73.97103059999999 }]
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
    // debugger;
    //   this.props.fetchEvents();
    this.state = {
      date: '',
      filteredEvents: this.props.events
    };
    //   this.state.filteredDinings = this.props.dinings;
    // debugger
    this.handleChange = this.handleChange.bind(this)
    this.filterListings = this.filterListings.bind(this)
    this.onReady = this.onReady.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }
  static defaultProps = {
    // center: {lat: 40.7678805, lng: -73.97103059999999}, // midtown
    center: { lat: 40.716557, lng: -74.001955 },    // downtown
    zoom: 13
  }
  componentDidMount() {
    // this.props.fetchUsers();
    const userId = this.props.currentUser.id;
    this.props.fetchUser(userId);
    this.props.fetchEvents().then(
      () => this.setState({ filteredEvents: this.props.events[0] })
    );
    // this.props.fetchDinings();
    // this.setState({filteredEvents: this.props.events[0]})
    // debugger
  }
  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value })
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
      return (
        (event.lat < NElat && event.lat > SWlat) && (event.lng < NElng && event.lng > SWlng)
      )
    })
    this.setState({ filteredEvents: filteredEvents })
    console.log('this.state', this.state)
  }
  onReady(props, map) {
    this.map = map;
    console.log('onReady map:', this.map.getBounds())
  }
  onMarkerClick = (props, marker, e) => {
    console.log('hello')
    this.setState({
      // activeMarkerName: props.name,
      activeMarkerTitle: props.title,
      activeMarkerId: props.id,
      // activeMarkerRevision: props.revision,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    console.log(this.state)
  };
  render() {
    const events = this.props.events[0];
    // const dinings = this.props.dinings[0];
    if (!events) return null;
    // if(!dinings) return null;
    // debugger
    console.log(events)
    return (
      <div className="dash-body">
        <div className="dash-cont">
          <Map
            styles={jsonStyle}
            // options={mapOptions}    
            style={{
              width: '40%',
              height: '85%',
              position: 'relative',
              borderRadius: "20px",
            }}
            google={this.props.google}
            zoom={14}
            initialCenter={{
              // lat: 40.7678805,
              // lng: -73.97103059999999
              lat: 40.716557,   // downtown
              lng: -74.001955
            }}
            onReady={this.onReady}
            onZoomChanged={this.filterListings}
            onDragend={this.filterListings}
          >
            {/* {events.map((event, id) => ( */}
            {events.map((event, id) => (
              // let lat = event.lat;
              // let lng = event.lng;
              <Marker
                key={id}
                title={event.title}
                // position={40.7678805, -73.97103059999999}
                position={{ lat: event.lat, lng: event.lng }}
                // position={{lat, lng}}
                className="Marker"
                // onClick={() => this.map.panTo(event.lat, event.lng)} 
                onClick={this.onMarkerClick}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            // position={{lat: event.lat, lng: event.lng}}
            >
              <div>
                <h1>{this.state.activeMarkerTitle}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <div className="dash-right" >
          <div className="dash-data-cont">
            <input className="dash-cal" type="date" value={this.state.date} onChange={this.handleChange('date')} />
            {/* <div>Drag the events on the right to create your ideal date!</div> */}
          </div>
          
          <a onClick={() => openModal("checkOut")}></a>
          <div>
            <CalendarContainer
              events={this.state.filteredEvents}
              date={this.state.date}
            />
          </div>
          {/* <div className="dash-placehold">
                        <ul>
                          {this.state.filteredEvents.map((event, id)=>
                           {return (<li key={id}>{event.title}</li>)})}
                        </ul>
                    </div> */}
        </div>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: googleMapKey
})(Dash)
// export default Dash;