import React from 'react'
import './HeroSection.css'
import video from '../Assets/video-1.mp4'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What Are You Waiting For?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='bttn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='bttn--large'>REGISTER TODAY<i className='far fa-paly-circle' /></Button>
      </div>
    </div>
  )
}

export default HeroSection
