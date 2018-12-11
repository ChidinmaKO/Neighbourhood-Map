
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerInfoWindow from './MarkerInfoWindow'
const { compose } = require("recompose");




const Map = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 6.447250, lng: 3.470260}}
  >



  {props.v.map(marker =>
    <MarkerInfoWindow
    key={marker.id}
    marker={marker}
    withStateHandlers= {props.withStateHandlers}
    venue={props.venue}
    onToggleOpen={() => {props.onToggleOpen(marker.id)}}
    placeToShow={props.placeToShow}
    isOpen = {props.isOpen}
    />
  )}




  </GoogleMap>
);

export default Map