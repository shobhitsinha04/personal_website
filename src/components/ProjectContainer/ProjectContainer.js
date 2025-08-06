// src/components/ProjectContainer/ProjectContainer.js - Enhanced GitHub links
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {/* Display description as bullet points */}
    {project.description && (
      <ul className='project__description'>
        {project.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    )}

    {/* Display tech stack */}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* Enhanced Links Section */}
    <div className='project__links'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='view source code'
          className='project__link project__link--github'
        >
          <GitHubIcon className='project__link-icon' />
          <span className='project__link-text'>View Code</span>
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='live preview'
          className='project__link project__link--demo'
        >
          <LaunchIcon className='project__link-icon' />
          <span className='project__link-text'>Live Demo</span>
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer