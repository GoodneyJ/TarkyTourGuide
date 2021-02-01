import React, { Component } from 'react'

export default class ButtonResults extends Component {
    render() {
        if(this.props.listType === "ammo") {
            return (
                <div>
                    <p className="ammo-header">{this.props.stateList.filter((item) => item.type === this.props.buttonTitleProp).map((item, index) => {
                        return (
                            <div className = "row">
                                <div className="column">
                                    <img className='ammo-icon' src={item.icon} />
                                </div>
                                <div className="column ammo-info">
                                    <p className="ammo-header result">{item.title}</p>
                                    <p className="ammo-tile result">D:{item.damage} P:{item.penetrationValue}</p>
                                    <p className="ammo-tile ammo-note">{item.note}</p>
                                </div>
                            </div>
                        )})}
                    </p>
                </div>
            )
        } else if(this.props.listType === "keys") {
            return (
                <div>
                    <p className="key-header">{this.props.stateList.filter((item) => item.maps === this.props.buttonTitleProp).map((item, index) => {
                        return (
                            <div className = "row">
                                <div className="column">
                                    <img className='ammo-icon' src={item.icon} />
                                </div>
                                <div className="column ammo-info">
                                    <p className="key-header result">{item.title}</p>
                                    <p className="key-tile result">{item.spawns}</p>
                                    <p className="key-tile key-spawns">{item.usage}</p>
                                </div>
                            </div>
                        )})}
                    </p>
                </div>
            )   
        }
    }
}
