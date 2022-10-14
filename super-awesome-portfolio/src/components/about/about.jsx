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
         <p>Hi, I'm Jonathan Cerruti, a Full Stack Web Developer Student in the MSU Coding Bootcamp. I am scheduled to complete my bootcamp in November 2022. 
          When I'm not coding I love being with my wife Alex, and my son Magnus. I can be found at the Redwood National Park daily, or tearing it up with my son at local parks in Humboldt Count California.
          I currently work as a Team Lead at Target in Eureka, Ca, where I run a dynamic team that's main goal is to recover the store from a 
          day filled with many guests. On any given night I lead about 20 team members to recover the store and get it ready for another day of business.
          My dream is to become a Software Engineer one day. My passion and determination will get me there and my work ethic will keep me there.
          </p> 
          <p1 className='hashtag'>#Husband #Father #HardWorker #WebDeveloper #LoveMyJourney

         </p1>
         <br/>
         <br/>
         <br/>

         <a href='#contact' className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
    </section>

       
    
  )
}

export default About