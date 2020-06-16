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
      this.state = {date: ''};
      this.handleChange = this.handleChange.bind(this)
      this.filterListings = this.filterListings.bind(this)
    }

    static defaultProps = {
        center: {lat: 40.7678805, lng: -73.97103059999999}, 
        zoom: 13
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
        // let bounds = this.props.google.maps.LatLngBounds;
        // console.log(this.props.google)
        // console.log(bounds)
        // console.log(mapProps)
        // console.log(map)
        console.log('filter', arguments)
        console.log('this.props.google', this.props.google)
        console.log('this.props.google.maps.LatLngBounds.toJSON', this.props.google.maps.LatLngBounds.toJSON)
        console.log('this.props.google.maps.LatLngBounds.getNorthEast', this.props.google.maps.LatLngBounds.getNorthEast)

    }

    render() {
        return (
            <div className = "dash-body">
                <div className = "dash-cont">
                    {/* <MapView /> */}
                    <Map 
                styles = {jsonStyle}    
                // options={mapOptions}    
                style={{width: '60%', 
                height: '100%', 
                position: 'relative',
            }}
                google={this.props.google} 
                zoom={14} 
                initialCenter={{
                    lat: 40.7678805,
                    lng: -73.97103059999999
                  }}
                  onZoomChanged = {this.filterListings}
                  onDragend = {this.filterListings}
                >
                    {markers.map((marker, id)=>{
                        return <Marker
                        key={id}
                        title={'Title 1'}
                        name={'Name 1'}
                        position={marker} />
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
                <div>
                    <div> 
                        <input className="dash-cal" type="date" value={this.state.date} onChange={this.handleChange('date')}/>
                    </div>
                    <div>Choose the date</div>
                  
                </div>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: mapKey
  })(Dash)
// export default Dash;