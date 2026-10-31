import React, { useEffect } from 'react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ selectedItem }) => {
  useEffect(() => {
    if (selectedItem != null) {
      const el = document.getElementById(`project-item-${selectedItem}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedItem])

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            id={`project-item-${idx}`}
            className={`project-wrap ${selectedItem === idx ? 'project-wrap--selected' : ''}`}
          >
            <ProjectContainer project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
