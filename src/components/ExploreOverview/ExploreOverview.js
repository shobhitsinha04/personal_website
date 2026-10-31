// src/components/ExploreOverview/ExploreOverview.js
import { experience, projects, education, publications, certifications } from '../../portfolio'
import './ExploreOverview.css'

const ExploreOverview = ({ navigate }) => {
  const sections = [
    { page: 'experience', label: 'Experience', desc: "Where I've worked and what I shipped there.", show: experience.length },
    { page: 'projects', label: 'Projects', desc: "Things I've designed, built, and shipped.", show: projects.length },
    { page: 'education', label: 'Education', desc: 'Berkeley, UIUC, and the coursework behind it.', show: education.length },
    { page: 'publications', label: 'Publications', desc: "Research I've put into the world.", show: publications.length },
    { page: 'certifications', label: 'Certifications', desc: "Courses and credentials I've earned.", show: certifications.length },
  ].filter((s) => s.show)

  return (
    <section className='section explore'>
      <p className='explore__kicker'>01 / Explore</p>
      <div className='explore__grid'>
        {sections.map((s, i) => (
          <button
            key={s.page}
            type='button'
            className='ebox'
            onClick={() => navigate(s.page)}
          >
            <div className='ebox__top'>
              <span className='ebox__num'>{String(i + 1).padStart(2, '0')}</span>
              <span className='ebox__arrow' aria-hidden='true'>&#8599;</span>
            </div>
            <h3 className='ebox__title'>{s.label}</h3>
            <p className='ebox__desc'>{s.desc}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ExploreOverview
