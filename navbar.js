import React, { Component } from 'react'
import { GiHeavyBullets } from 'react-icons/gi';
import { ImKey2 } from "react-icons/im";
import { FaMap, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <div id="navbar-container">

                    <ul class='navbar'>
                        <NavLink className="nav-link-item" activeClassName="selected" to='/home'>
                            <li class='nav-item'>
                                <FaHome className="icon"/>
                                <p class='nav-sub-heading'>HOME</p>
                            </li>
                        </NavLink>
                        <NavLink className="nav-link-item" activeClassName="selected" to='/ammo'>
                            <li class='nav-item'>
                                <GiHeavyBullets className='icon'/>
                                <p class='nav-sub-heading'>AMMO</p>
                            </li>
                        </NavLink>
                        <NavLink className="nav-link-item" activeClassName="selected" to='/keys'>
                            <li class='nav-item'>
                                <ImKey2 className="icon"/>
                                <p class='nav-sub-heading'>KEYS</p>
                            </li>
                        </NavLink>
                        <NavLink className="nav-link-item" activeClassName="selected" to='/maps'>
                            <li class='nav-item'>
                                <FaMap className="icon"/>
                                <p class='nav-sub-heading'>MAPS</p>
                            </li>
                        </NavLink>
                    </ul>

            </div>
        )
    }
}
