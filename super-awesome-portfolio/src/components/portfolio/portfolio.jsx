import React from 'react'
import './portfolio.css'
import Project from '../../assets/images/My-first-project.png'
import Project2 from '../../assets/images/project_1.png'
import Project3 from '../../assets/images/touchdown_daily.png'


const data = [
  {
    id: 1,
    image: Project2,
    title: 'My first group project',
    github:'github.com',
    demo: 'liveserver.com'
  },
  {
    id: 2,
    image: Project,
    title: 'My first group project',
    github:'github.com',
    demo: 'liveserver.com'
  },
  {
    id: 3,
    image: Project3,
    title: 'My first group project',
    github:'github.com',
    demo: 'liveserver.com'
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