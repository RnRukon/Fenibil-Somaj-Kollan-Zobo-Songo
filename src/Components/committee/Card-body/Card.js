
import React, { Component } from 'react'
import './Style.css'

export default class Card extends Component {
    render() {
        return (
            
          
            <div className='Card'>
             
                <img  className='Logo' src={this.props.Logo} alt='Logo' height="100px" width="auto"></img>
                <h1 className="cardTitle">{this.props.CardTitle}</h1>
                <p>{this.props.SportsType}</p>
                <button className='button'> <a href={this.props.link} >Details</a></button>

            </div>

        )
    }
}



