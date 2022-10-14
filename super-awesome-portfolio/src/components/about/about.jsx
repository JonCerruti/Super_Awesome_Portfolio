import React from 'react'
import './about.css'
import Family from '../../assets/images/family_man.jpg'
import { GiGraduateCap } from 'react-icons/gi'
import { AiOutlineFolderOpen } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src= {Family} alt='Me and my family'/>
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <GiGraduateCap  className='about__icon'/>
              <h5>Experience</h5>
              <small>Nov 2022 Graduate!</small>
          </article>
          <article className='about__card'>
            <AiOutlineFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ Projects Completed</small>
          </article>
        </div>
         <p>A paragraph about me!lksandfklsdnvklscnv;lxcmvl;cxm /xc
           nsdkvnxcklvnxcvxcvnxckvnkcxnvkxcvlzcxnv k.xcznvlkfndkvl

         </p>

         <a href='#contact' className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
    </section>

       
    
  )
}

export default About