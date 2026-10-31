import React, { useEffect } from 'react'
import { projects } from '../../portfolio'
import DetailBlock from '../DetailBlock/DetailBlock'
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
    <section id='projects' className='section detail'>
      <header className='detail__header'>
        <p className='detail__kicker'>Things I've built</p>
        <h2 className='detail__title'>Projects</h2>
      </header>

      <div className='detail__blocks'>
        {projects.map((project, idx) => {
          const links = []
          if (project.sourceCode) links.push({ label: 'View code', href: project.sourceCode })
          if (project.marketplace) links.push({ label: 'Marketplace', href: project.marketplace })
          return (
            <DetailBlock
              key={idx}
              id={`project-item-${idx}`}
              reverse={idx % 2 === 1}
              selected={selectedItem === idx}
              seed={idx + 11}
              kicker={project.name}
              title={project.hook}
              points={project.description}
              tags={project.stack || []}
              links={links}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
