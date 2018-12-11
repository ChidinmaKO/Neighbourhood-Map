import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

require("recompose");


const iconDefault = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
const iconOpen = 'http://maps.google.com/mapfiles/ms/icons/red.png';



class MarkerInfoWindow extends React.Component {

    

    render(){

        return (

            <div>

                <Marker
                    icon={this.props.placeToShow === this.props.marker.id && this.props.isOpen ? { url: iconOpen } : { url: iconDefault }}
                    key={this.props.marker.id}
                    position={{lat: this.props.marker.location.lat, lng: this.props.marker.location.lng}}
                    onClick={() => this.props.onToggleOpen(this.props.marker.id)}
                    >
                    {this.props.placeToShow === this.props.marker.id && this.props.isOpen &&
                    <InfoWindow onCloseClick={this.props.onToggleOpen}>
                        <div className='info-window'>
                            <h1>{this.props.marker.name}</h1>
                            <p className='info-address'>
                                <span>Address: </span>
                                {`${this.props.marker.location.formattedAddress[0]}, 
                                ${this.props.marker.location.formattedAddress[1]}, 
                                ${this.props.marker.location.formattedAddress[2]}
                            `}</p>
                            <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com.eg/maps/?q=${this.props.marker.location.lat},${this.props.marker.location.lng}`}>Check that</a>
                        </div>
                    </InfoWindow>}
                </Marker>
                
            </div>
        )
    }
}


export default MarkerInfoWindow