import React, { Component } from 'react'
import './style.css'
import Logo from "../Header/navber/logo512.png"
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterAddress">
                <div className="FooterAddress-h3">
                    <img className='footerLogo' src={Logo} alt='Logo' height="100px" width="100px"></img>
                <h3>ফেনিবিল সমাজকল্যাণ যুব সংঘ</h3>
                <address>ফেনিবিল-নারায়ণতলা-সুনামগঞ্জ সদর <br></br>সুনামগঞ্জ।</address>
                <p><b>Developer:</b>MD.Rukon Uddin Sikder</p>
                </div>
            </div>
        )
    }
}
