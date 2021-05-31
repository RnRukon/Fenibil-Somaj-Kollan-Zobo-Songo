
import React, { Component } from 'react'
import './style.css'


export default class mamberProps extends Component {
    render() {
        return (
           
          
            <div className='mamberCard'>
               
             
                <img  className='mamberLogo' src={this.props.mamberLogo} alt='Logo' height="60px" width="auto"></img>
                <h5>{this.props.mamberCardTitle}</h5>
                <p>{this.props.mamberSportsType}</p>
                <button className='mamberCardButton'> <a href={this.props.mamberLink} >Details</a></button>

            
                </div>
            
         

        )
    }
}



