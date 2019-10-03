import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const incidences = {
  stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
  { latitude: 47.359423, longitude: -122.021071 },
  { latitude: 47.2052192687988, longitude: -121.988426208496 },
  { latitude: 47.6307081, longitude: -122.1434325 },
  { latitude: 47.3084488, longitude: -122.2140121 },
  { latitude: 47.5524695, longitude: -122.0425407 }]
};

class IncidentsMap extends Component {
  state = {
    incidence: null
  }

//   updatePurchaseState () {
//     console.log(this.props.incidence)
//     const sendData = Object.values(this.props.incidence.location)
        
//     this.setState( { incidence: sendData } );
// }
  render() {
    // console.log(...this.props)
    return (
      <div>
        <h1>IncidentsMap</h1>
        <p>MAP</p>
        <p>Incidents List</p>

        <Map google={this.props.google} zoom={14} 
        // initialCenter={}
        >
          <Marker name={'Current location'} position={{ lat: 37.778519, lng: -122.405640 }} />
          <Marker name={'Current location'} position={{ lat: 39.778519, lng: -122.405640 }} />
        </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({ apiKey: ('AIzaSyD0B3BbdRZhNPDZCLL4xPvq09YfgeWk3VE') })(IncidentsMap);