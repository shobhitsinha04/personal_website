// src/components/Experience/Experience.js
import React, { useEffect } from 'react'
import { experience } from '../../portfolio'
import DetailBlock from '../DetailBlock/DetailBlock'
import './Experience.css'

const base = process.env.PUBLIC_URL || ''

const Experience = ({ selectedItem }) => {
  useEffect(() => {
    if (selectedItem != null) {
      const el = document.getElementById(`experience-item-${selectedItem}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedItem])

  if (!experience.length) return null

  return (
    <section id='experience' className='section detail'>
      <header className='detail__header'>
        <p className='detail__kicker'>Where I've worked</p>
        <h2 className='detail__title'>Experience</h2>
      </header>

      <div className='detail__blocks'>
        {experience.map((exp, idx) => (
          <DetailBlock
            key={idx}
            id={`experience-item-${idx}`}
            reverse={idx % 2 === 1}
            selected={selectedItem === idx}
            seed={idx + 1}
            kicker={exp.company}
            date={exp.location ? `${exp.duration} · ${exp.location}` : exp.duration}
            title={exp.name}
            hook={exp.hook}
            points={exp.description}
            logo={{
              src: exp.logo ? `${base}/images/logos/${exp.logo}` : null,
              srcDark: exp.logoDark ? `${base}/images/logos/${exp.logoDark}` : null,
              alt: exp.company,
              mark: exp.mark,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
