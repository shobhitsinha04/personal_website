// src/components/ExploreOverview/ExploreOverview.js
import { experience, projects, education, publications, certifications } from '../../portfolio'
import './ExploreOverview.css'

const ExploreOverview = ({ navigate }) => {
  const sections = [
    { page: 'experience', label: 'Experience', desc: "Where I've worked and what I did there.", show: experience.length },
    { page: 'projects', label: 'Projects', desc: "Things I've designed, built, and shipped.", show: projects.length },
    { page: 'education', label: 'Education', desc: 'Berkeley, UIUC, and the coursework behind it.', show: education.length },
    { page: 'publications', label: 'Publications', desc: "Research I've put into the world.", show: publications.length },
    { page: 'certifications', label: 'Certifications', desc: "Courses and credentials I've earned.", show: certifications.length },
  ].filter((s) => s.show)

  return (
    <section className='section explore'>
      <ul className='explore__list'>
        {sections.map((s) => (
          <li key={s.page}>
            <button className='explore__row' onClick={() => navigate(s.page)}>
              <span className='explore__label'>{s.label}</span>
              <span className='explore__desc'>{s.desc}</span>
              <span className='explore__arrow' aria-hidden='true'>&#8599;&#xFE0E;</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExploreOverview
