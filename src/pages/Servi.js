import React from 'react'
import './Seee.css'
import  adobe from'./images/Adobe.png'
import next from './images/Amazon.png'
import fresh from './images/Freshworks.png'
import linkedin from './images/linkedin.png'
import Netflix from './images/Netflix.png'
import sourceforce from './images/Microsoft.png'
export default function Service() {
  return (
    <div className='flex'>
                <div className='insideee'><img src={adobe}></img></div>
                <div className='insideee'><img src={next}></img></div>
                <div className='insideee'><img src={fresh}></img></div>
                <div className='insideee'><img src={linkedin}></img></div>
                <div className='insideee'><img src={Netflix}></img></div>
                <div className='insideee'><img src={sourceforce}></img></div>
            
    </div>
  )
}