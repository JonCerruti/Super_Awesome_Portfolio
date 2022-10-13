import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/profile-pic.jpg'
import Family from '../../assets/images/family.jpg'
import Football from '../../assets/images/football_with_mags.JPG'

const header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Jonathan Cerruti</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />

        <div className='me'>
          <img src={ME} alt= 'me' />
        </div>
        <div className='family'>
          <img src={Family} alt= 'family' />
        </div>
        <div className='football'>
          <img src={Football} alt= 'football' />
        </div>
        <a href='#contact' className=''scroll__down> Scroll Down </a>

        

      </div>
   </header>
  )
}

export default header