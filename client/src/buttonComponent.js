import React, { Component } from 'react'
import ButtonResults from './buttonResults.js'

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.expandedToggleSwitch = this.expandedToggleSwitch.bind(this);
        this.fadeOutAnimation = this.fadeOutAnimation.bind(this);
    }

    fadeOutAnimation = () => {
        document.getElementById("simpleModal").classList.remove('fadeIn')
        document.getElementById("simpleModal").classList.add('fadeOut')
    }

    expandedToggleSwitch = () => {
        if(this.state.expanded) {
            document.querySelector('.modal').style.animation = "fadeOut 250ms"
            setTimeout(function() {
                this.setState({
                    expanded: false
                })
            }.bind(this), 240);
            
        } else {
            this.setState({
                expanded: true
            })
        }
    }

    render() {
       let filteredButtonStyles = {
           fontSize: '1.5rem',
           fontWeight: 700,

       }

       let styles = {
           card: {
               backgroundImage: `url(${this.props.backgroundThumbnail})`,
               backgroundSize: 'cover',
               

           }
       }
       
        return (
            <div>
                <a className='filter-button' href="#" onClick={this.expandedToggleSwitch}>
                    <div className ='card ammo-type-header' style={styles.card}>
                        <p style={filteredButtonStyles}> 
                                {this.state.expanded ? <ButtonResults stateList={this.props.stateList} buttonTitleProp={this.props.buttonTitleProp} listType={this.props.listType}/> : <p className="card-title">{this.props.buttonTitleProp}</p>} 
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}
