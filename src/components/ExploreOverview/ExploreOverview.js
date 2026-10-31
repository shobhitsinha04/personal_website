// src/components/ExploreOverview/ExploreOverview.js
import { experience, projects, education, publications, certifications } from '../../portfolio'
import './ExploreOverview.css'

const ExploreOverview = ({ navigate }) => {
  const links = [
    { page: 'experience', label: 'Experience', show: experience.length },
    { page: 'projects', label: 'Projects', show: projects.length },
    { page: 'education', label: 'Education', show: education.length },
    { page: 'publications', label: 'Publications', show: publications.length },
    { page: 'certifications', label: 'Certifications', show: certifications.length },
  ].filter((l) => l.show)

  return (
    <section className='section explore'>
      <p className='explore__kicker'>Explore</p>
      <ul className='explore__list'>
        {links.map((l) => (
          <li key={l.page}>
            <button className='explore__link' onClick={() => navigate(l.page)}>
              <span className='explore__label'>{l.label}</span>
              <span className='explore__arrow' aria-hidden='true'>&rarr;</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExploreOverview
