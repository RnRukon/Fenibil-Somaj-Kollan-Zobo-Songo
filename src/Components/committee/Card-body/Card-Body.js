import React, { Component } from 'react'
import Card from './Card'
import Shahalom from './img/ShahAlom.jpg'
import Kotobuddin from './img/kotobuddin.jpg'
import Motin from './img/motin.jpg'
import Anowar from './img/anowar.jpg'
import Abdulali from './img/abdulali.jpg' 
import Elias from './img/eleas.jpg'
import Jewel from './img/jewel.jpg'
import Dinislam from './img/dinislam.jpg'
 


export default class CardBody extends Component {
   
    render() {
        return (
            <div className="CardBody row">

        <div className="clm-sm-12">
                
            <Card
              Logo={Shahalom}
              CardTitle="মোঃ শাহ-আলম"
              SportsType="সভাপতি"
              link="http://localhost:3001/"
              
            />

       </div>
       <div className="clm-sm-12">
            <Card
              Logo={Kotobuddin}
              CardTitle="কতুব উদ্দিন মাছুম"
              SportsType="সম্পাদক"
              link="http://localhost:3001/"
            />
        </div>

        <div className="clm-sm-12">
            <Card
              Logo={Motin}
              CardTitle="সৈয়দ আব্দুল মুতিন"
              SportsType="সহ-সম্পাদক"
              link="http://localhost:3001/"
            />
        </div>

        <div className="clm-sm-12">
            <Card
              Logo={Anowar}
              CardTitle="আনোয়ার হোসেন"
              SportsType="ক্যাশিয়ার"
              link="http://localhost:3001/"
            />
        </div>

        <div className="clm-sm-12">
            <Card
              Logo={Abdulali}
              CardTitle="মোঃ আব্দুল আলী"
              SportsType="প্রুফ"
              link="http://localhost:3001/"
            />
        </div>


        <div className="clm-sm-12">
            <Card
              Logo={Elias}
              CardTitle="ইলিয়াস উদ্দিন"
              SportsType="বিজ্ঞাপন"
              link="http://localhost:3001/"
            />
        </div>


        <div className="clm-sm-12">
            <Card
              Logo={Jewel}
              CardTitle="জুয়েল আহমেদ"
              SportsType="তথ্য"
              link="http://localhost:3001/"
            />
        </div>

        
        <div className="clm-sm-12">
            <Card
              Logo={Dinislam}
              CardTitle="সৈয়দ দ্বীন ইসলাম"
              SportsType="পাবলিকেশন"
              link="http://localhost:3001/"
            />
        </div>

    </div>
                         
            
        )
    }
}
