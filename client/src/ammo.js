import React, { Component } from 'react'
import axios from 'axios'; 
import ButtonComponent from './buttonComponent.js'
import Asval from './IMAGES/ASVAL.png'
import M590 from './IMAGES/M590.png'
import MP7 from './IMAGES/MP7.png'
import P90 from './IMAGES/P90.png'
import AK103 from './IMAGES/AK103.png'
import HK416 from './IMAGES/HK416.png'
import KS23 from './IMAGES/KS23.png'
import APS from './IMAGES/APS.png'
import ASH from './IMAGES/ASH.png'
import Mosin from './IMAGES/MOSIN.png'
import Shrimp from './IMAGES/SHRIMP.png'
import Vector from './IMAGES/VECTOR.png'
import VPO from './IMAGES/VPO.png'
import UMP from './IMAGES/UMP.png'
import PPSH from './IMAGES/PPSH.png'
import SR25 from './IMAGES/SR25.png'
import TOZ from './IMAGES/TOZ.png'
import AK74M from './IMAGES/74M.png'



export default class ammo extends Component {
    constructor(props) {
        super(props);

        this.state = {

            input: '',
            ammoList: []
        }

        //Function binds for 'this'
        this.handleChange = this.handleChange.bind(this);
        this.getAmmoList = this.getAmmoList.bind(this);

    };



    //CALLS AXIOS GET FUNCTION
    componentDidMount = () => {
        this.getAmmoList();
    }

    //INPUT STORAGE
    handleChange = (event) => {
            this.setState({input: event.target.value});
    }
    //RETRIEVES AMMO LIST FROM API
    getAmmoList = () => {
        axios.get('/ammo')
            .then((response) => {
                const data = response.data;
                this.setState({ammoList: data})
                console.log('Ammo-Data has been received!');
            })
            .catch(() => {
                console.log('Ammo-Data was not recieved.');
            });  
    }

    render() {


        if(this.state.input === '') {
            return (
                <div id='bruh'>
                    <input className='input' name="ammo" type='text' placeholder="What type of ammo do you need?" value={this.state.input} onChange={this.handleChange} />
                    <div id="button-container">
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='.45' listType="ammo" backgroundThumbnail={UMP}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='4.6x30' listType="ammo" backgroundThumbnail={MP7}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='5.45x39' listType="ammo" backgroundThumbnail={AK74M}/>
                        </div>
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='5.56x45' listType="ammo" backgroundThumbnail={HK416}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='5.7x28' listType="ammo" backgroundThumbnail={P90}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='7.62x25' listType="ammo" backgroundThumbnail={PPSH}/>
                        </div>
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='7.62x39' listType="ammo" backgroundThumbnail={AK103}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='7.62x51' listType="ammo" backgroundThumbnail={SR25}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='7.62x54' listType="ammo" backgroundThumbnail={Mosin}/>
                        </div>
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='9x18' listType="ammo" backgroundThumbnail={APS}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='9x19' listType="ammo" backgroundThumbnail={Vector}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='9x21' listType="ammo" backgroundThumbnail={Shrimp}/>
                        </div>
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='9x39' listType="ammo" backgroundThumbnail={Asval}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='12.7x55' listType="ammo" backgroundThumbnail={ASH}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='12x70' listType="ammo" backgroundThumbnail={M590}/>
                        </div>
                        <div className="row">
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='20x70' listType="ammo" backgroundThumbnail={TOZ}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='23x75' listType="ammo" backgroundThumbnail={KS23}/>
                            <ButtonComponent stateList={this.state.ammoList} buttonTitleProp='.366' listType="ammo" backgroundThumbnail={VPO}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='search-container'>
                    <input class='input' name="ammo" type='text' placeholder="What type of ammo do you need?" value={this.state.input} onChange={this.handleChange} />
                <div>
                {this.state.ammoList.filter((ammo) => {
            if(this.state.input === "") {
                return null;
            } else if (ammo.title.toLowerCase().includes(this.state.input.toLowerCase())) {
                return ammo
            }
            }).map((ammo, index) => {
                return (
                    <div key={index} className="ammo-container search-result">
                        <div className="modal-row">
                        <img className='ammo-icon' src={ammo.icon} alt={ammo.title}/>
                            <div className="modal-column ammo-info">
                                <p className="ammo-header">{ammo.title}</p>
                                <p className="ammo-tile">D:{ammo.damage} P:{ammo.penetrationValue}</p>
                                <p className="ammo-tile ammo-note">{ammo.note}</p>
                            </div>
                        </div>
                    </div>
                )})}
                </div>
            </div>
            )
        }
    }
}
