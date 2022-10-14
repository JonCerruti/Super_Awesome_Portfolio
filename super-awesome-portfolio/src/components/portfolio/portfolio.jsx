import React from 'react'
import './portfolio.css'
import Project from '../../assets/images/My-first-project.png'
import Project2 from '../../assets/images/project_1.png'
import Project3 from '../../assets/images/touchdown_daily.png'
import Project4 from '../../assets/images/social_network_api.gif'
import Project5 from '../../assets/images/employee_tracker_example.gif'
import Project6 from '../../assets/images/readme-gen-img-3.png'


const data = [
  {
    id: 1,
    image: Project,
    title: 'My First Code Refactor',
    github:'https://github.com/JonCerruti/module-1/tree/alpha',
    demo: 'https://joncerruti.github.io/module-1/'
  },
  {
    id: 2,
    image: Project2,
    title: 'About Your Birthday Group Project #1',
    github:'https://github.com/JonCerruti/About-Your-Birthday',
    demo: 'https://joncerruti.github.io/About-Your-Birthday/'
  },
  {
    id: 3,
    image: Project3,
    title: 'Touchdown Daily Group Project #2',
    github:'https://github.com/Archer261/nfl-news',
    demo: 'https://morning-savannah-61110.herokuapp.com/'
  },
  {
    id: 4,
    image: Project4,
    title: 'Social Network API',
    github:'https://github.com/JonCerruti/Social_Network_API',
    demo: 'https://drive.google.com/file/d/1TzPSVGIyWeGK6LVQETe5IvAxsqV0-jHB/view'
  },
  {
    id: 5,
    image: Project5,
    title: 'SQL Employee Tracker',
    github:'https://github.com/JonCerruti/employee_tracker',
    demo: 'https://drive.google.com/file/d/1eXZPli3CtSWTns6yV1JPaZfdMy2oZJMl/view'
  },
  {
    id: 6,
    image: Project6,
    title: 'Node.js README Generator',
    github:'https://github.com/JonCerruti/README-Generator',
    demo: 'https://drive.google.com/file/d/1kOvVLIhQvcYDKZPbrYzAW9XeK2bSvidc/view'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
        
        <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src= {image} alt={title} />
            <h3>{title}</h3>
            <div className="portolio__items-cta">
            <a href={github} className='btn'> Github</a>
            <a href={demo} className='btn btn-primary'> Live Demo</a>
            </div>
          </div>
          </article>
        )
})
}
         
      </div>
    </section>
  )
}

export default Portfolio