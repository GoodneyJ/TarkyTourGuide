import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CustomsMapFile from './IMAGES/CUSTOMSMAP.png';
import { MapContainer, ImageOverlay, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

export default class customsMap extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bounds: [1000, 1000]
        };
    }


    render() {

        return (
            <div id='mapid' >
                <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false} maxBounds={[[0,0], [500, 400]]}>
                    <ImageOverlay url={CustomsMapFile} bounds={[[0,0], [500, 400]]}/>
                </MapContainer>
            </div>
        )
    }
}
