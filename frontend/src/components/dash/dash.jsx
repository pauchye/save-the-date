import React from 'react';
// import MapView from '../map/map';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapCSS from './_dash.css';
const mapKey = require('../../secrets').googleMapKey

const markers = [ {lat: 40.8678805, lng: -73.87103059999999}, {lat: 40.05, lng: -73.9999999}, {lat: 40.7678805, lng: -73.97103059999999}]


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
    //   debugger
      this.state = {date: ''};
      this.state.filteredEvents = this.props.events;
    //   this.state.filteredDinings = this.props.dinings;

      this.handleChange = this.handleChange.bind(this)
      this.filterListings = this.filterListings.bind(this)
      this.onReady = this.onReady.bind(this)
      
    }

    static defaultProps = {
        center: {lat: 40.7678805, lng: -73.97103059999999}, 
        zoom: 13
     }

    componentDidMount(){
        // debugger
        this.props.fetchEvents();
        // this.props.fetchDinings();
        
        // debugger
    }


    handleChange(input){
        return (e) => {
            this.setState({[input]: e.currentTarget.value})
        }
    }

    // placeMarker(location) {
    //     let marker = new google.maps.Marker({
    //         position: location, 
    //         map: this.map
    //     });
       //  debugger
       //  console.log(marker)
//    }

//    componentDidMount(){
//     {markers.forEach((marker)=>{
//         return <Marker
//         title={'Title 1'}
//         name={'Name 1'}
//         position={marker} />
//     })
//    }
    filterListings(mapProps, map) {
        this.map = map;
        console.log('onFilter', this.map.getBounds())
    }

    onReady(props, map) {
        this.map = map;
        console.log('onReady map:', this.map.getBounds())
        // debugger;
    }


    render() {

        const events = this.props.events[0];
        // const dinings = this.props.dinings[0];
  
        if(!events) return null;
        // if(!dinings) return null;
        // debugger
        return (
            <div className = "dash-body">
                <div className = "dash-cont">
                    {/* <MapView /> */}
                    <Map 
                styles = {jsonStyle}    
                // options={mapOptions}    
                style={{width: '40%', 
                height: '100%', 
                position: 'relative',
                borderRadius: "20px",
                paddingLeft: "20px"
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
                        // console.log('event', event)
                        let lat = event.lat;
                        let lng = event.lng;
                        // const bound = this.map.getBounds();

                        // console.log(bound)
                        // console.log('{event.lat, event.lng}', {lat, lng} )
                        // console.log('marker', markers[0] )
                        return <Marker
                        key={id}
                        title={'Title 1'}
                        name={'Name 1'}
                        position={{lat, lng}} />
                    })}

                    
                    
 
                    {/* <Marker onClick={this.onMarkerClick}
                            name={'Current location'} /> */}
            
                    {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}
                </Map>
                </div>
                <div className="dash-right" >
                    <div> 
                        <input className="dash-cal" type="date" value={this.state.date} onChange={this.handleChange('date')}/>
                    </div>
                    <div>Choose the date</div>
                    <div className="dash-placehold">

                    </div>
                  
                </div>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: mapKey
  })(Dash)
// export default Dash;