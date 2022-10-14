import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/profile-pic.jpg'
// import Football from '../../assets/images/football_with_mags.JPG'
import HeaderSocial from './headerSocials'

const header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Jonathan Cerruti</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocial />
        
      <div className='img_container'>
        <div className='me'>
          <img src={ME} alt= 'me' />
        </div>
        
        <a href='#contact' className='scroll__down'> Scroll Down </a> 
        </div>

        

      </div>
   </header>
  )
}

export default header