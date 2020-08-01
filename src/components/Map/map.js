import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '90%',
    height: '90%',
};

class GoogleMap extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: -35.494410, lng: -62.982203}}
            >
              <Marker position={{ lat: -35.494410, lng: -62.982203}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD_8TyiyvEh30b52sg9Y8IjJ5cuZ1shF_I'
  })(GoogleMap);