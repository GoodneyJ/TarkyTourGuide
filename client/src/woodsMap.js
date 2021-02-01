import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import WoodsMapFile from './IMAGES/WOODSMAP.png';
import { MapContainer, ImageOverlay, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

export default class WoodsMap extends Component {

    render() {

        return (
            <div id='mapid' >
                <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false} maxBounds={[[0,0], [500, 400]]}>
                    <ImageOverlay url={WoodsMapFile} bounds={[[0,0], [500, 400]]}/>
                    
                </MapContainer>
            </div>
        )
    }
}