import React, { Component } from 'react'
import './style.css'
import Logo from './logo512.png'

export default class Navber extends Component {
    render() {
        return (
            <div className='Navber'>
                <div><img className='Logo' src={Logo} alt="Logo" height='80px'width='80px'></img></div>

                <div className='Menu'>
                    <li><a href="#home"> HOME</a></li>
                    <li><a href="#home"> ACTIVITIE'S</a></li>
                    <li><a href="#home"> CONTACT</a></li>
                    <li><a href="#home"> LOGIN</a></li>
                    <li><a href="#home">ABOUT</a></li>
                </div>
            </div>
        )
    }
}
