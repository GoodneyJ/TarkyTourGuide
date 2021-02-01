import React, { Component } from 'react'
import CustomsMap from './customsMap'
import WoodsMap from './woodsMap'

export default class maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customsExpanded: false,
            woodsExpanded: false
        }

        this.customsToggleSwitch = this.customsToggleSwitch.bind(this);
        this.woodsToggleSwitch = this.woodsToggleSwitch.bind(this);

    }

    customsToggleSwitch = () => {
        if(this.state.customsExpanded) {
            this.setState({
                customsExpanded: false
            })
        } else {
            this.setState({
                customsExpanded: true
            })
        }
    }
    woodsToggleSwitch = () => {
        if(this.state.woodsExpanded) {
            this.setState({
                woodsExpanded: false
            })
        } else {
            this.setState({
                woodsExpanded: true
            })
        }
    }

    render() {
        return (
            <div>
                <h1>MAPS PAGE</h1>
                <div >
                    <ul className="map-list">
                        <li className="map-list-item">           
                            <h2><button className="map-btn" onClick={this.customsToggleSwitch}>CUSTOMS</button></h2>
                            {this.state.customsExpanded ? <CustomsMap /> : ""}
                        </li>
                        <li className="map-list-item">           
                            <h3><button className="map-btn" onClick={this.woodsToggleSwitch}>WOODS</button></h3>
                            {this.state.woodsExpanded ? <WoodsMap /> : ""}
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}
