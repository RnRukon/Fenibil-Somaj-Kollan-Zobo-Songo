import React, { Component } from 'react'
import CardBody from './Card-body/Card-Body'
import './style.css'

export default class committee extends Component {
    render() {
        return (
            <div>
                
                <div className="CommitteeTitle">
               
                
                    <h2 className="komiti" >কমিটি</h2>
                    
                </div>
            
                <CardBody/>
            </div>
        )
    }
}
