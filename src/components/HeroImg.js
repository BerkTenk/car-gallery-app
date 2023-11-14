import React from 'react'
import hero from "../assets/Car Gallery (1).png"
import "./heroImg.css"

function HeroImg() {
  return (
    <div className='hero mt-5'>
      <div className='mask'>
        <img className='intro-img' src={hero} alt='intro' />
      </div>
      <div className='content'>
        <h1>WELCOME TO</h1>
        <p>CAR GALLERY </p>

        
      </div>
    </div>
  )
}

export default HeroImg