import React from 'react'
import './portfolio.css'
import Project6 from '../../assets/images/My-first-project.png'
import Project from '../../assets/images/project_1.png'
import Project2 from '../../assets/images/touchdown_daily.png'
import Project4 from '../../assets/images/social_network_api.gif'
import Project5 from '../../assets/images/employee_tracker_example.gif'
import Project3 from '../../assets/images/project_3.png'


const data = [
  {
    id: 1,
    image: Project,
    title: 'About Your Birthday Group Project #1',
    github:'https://github.com/JonCerruti/About-Your-Birthday',
    demo: 'https://joncerruti.github.io/About-Your-Birthday/'
  },
  {
    id: 2,
    image: Project2,
    title: 'Touchdown Daily Group Project #2',
    github:'https://github.com/Archer261/nfl-news',
    demo: 'https://morning-savannah-61110.herokuapp.com/'
  },
  {
    id: 3,
    image: Project3,
    title: 'Pixel Block Party',
    github:'https://github.com/jaronhadley/react_minecraft',
    demo: 'https://pixel-block-party.herokuapp.com/'
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
    title: 'My First Code Refactor',
    github:'https://github.com/JonCerruti/module-1/tree/alpha',
    demo: 'https://joncerruti.github.io/module-1/'
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