import React, { Component } from 'react'
import axios from 'axios'; 
import ButtonComponent from './buttonComponent'
import CustomsThumbnail from './IMAGES/CUSTOMS.png'
import WoodsThumbnail from './IMAGES/WOODS.png'
import InterchangeThumbnail from './IMAGES/INTERCHANGE.png'
import ShorelineThumbnail from './IMAGES/SHORELINE4.png';
import FactoryThumbnail from './IMAGES/FACTORY.png'
import LabsThumbnail from './IMAGES/LABS.jpg'
import ReserveThumbnail from './IMAGES/RESERVE.png'

export default class keys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            keyList: []
        }


        //Function binds
        this.handleChange = this.handleChange.bind(this);
        this.getKeyList = this.getKeyList.bind(this);
    }

    //CALLS AXIOS GET FUNCTION
    componentDidMount = () => {
        this.getKeyList();
    }

    //GETS KEYS FROM DB API
    getKeyList = () => {
        axios.get('/keys')
            .then((response) => {
                const data = response.data;
                this.setState({keyList: data})
                console.log('Key-Data has been received!');
            })
            .catch(() => {
                console.log('Key-Data was not recieved.');
            });  
    }

    //INPUT STORAGE
    handleChange = (event) => {
        this.setState({input: event.target.value});
    }


    render() {



        if(this.state.input === '') {
            return (
                <div>
                        <input className='input' name="ammo" type='text' placeholder="What key are you looking for?" value={this.state.input} onChange={this.handleChange} />

                    <div className = 'row' id="center-stuff">
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Customs' listType="keys" backgroundThumbnail={CustomsThumbnail}/>
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Interchange' listType="keys" backgroundThumbnail={InterchangeThumbnail}/>
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Factory' listType="keys" backgroundThumbnail={FactoryThumbnail}/>
                    </div>
                    <div className="row">
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Shoreline' listType="keys" backgroundThumbnail={ShorelineThumbnail}/>
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Reserve' listType="keys" backgroundThumbnail={ReserveThumbnail}/>
                        <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Labs' listType="keys" backgroundThumbnail={LabsThumbnail}/>

                    </div>
                    <div className="row">
                    <ButtonComponent stateList={this.state.keyList} buttonTitleProp='Woods' listType="keys" backgroundThumbnail={WoodsThumbnail}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="search-container">
                    <input class='input' name="keys" type='text' placeholder="What key are you looking for?" value={this.state.input} onChange={this.handleChange} />
                <div>
                {this.state.keyList.filter((key) => {
            if(this.state.input === "") {
                return null;
            } else if (key.title.toLowerCase().includes(this.state.input.toLowerCase())) {
                return key
            }
            }).map((key, index) => {
                return (
                    <div key={index} className="ammo-container search-result">
                        <div className="modal-row">
                            <img className='ammo-icon' src={key.icon} alt={key.title}/>
                            <div className="modal-column key-info">
                                <p className="key-header">{key.title}</p>
                                <p className="key-tile key-spawns">{key.spawns}</p>
                                <p className="key-tile">{key.usage}</p>

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
