import React from 'react';
// import MapView from '../map/map';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapCSS from './_dash.css';
const mapKey = require('../../secrets').googleMapKey

class Dash extends React.Component {
    constructor(props) {
      super(props);

    }

    static defaultProps = {
        center: {lat: 40.7678805, lng: -73.97103059999999}, 
        zoom: 13
     }

    render() {
        return (
            <div className = "dash-body">
                <div className = "dash-cont">
                    {/* <MapView /> */}
                    <Map 
                style={{width: '60%', height: '100%', position: 'relative'}}
                google={this.props.google} 
                zoom={14} 
                initialCenter={{
                    lat: 40.7678805,
                    lng: -73.97103059999999
                  }}
                >
                    <Marker
                    title={'Title 1'}
                    name={'Name 1'}
                    position={{lat: 37.778519, lng: -122.405640}} />
 
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
                    <div>Input date</div>
                    <div>Input time</div>
                </div>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: mapKey
  })(Dash)
// export default Dash;