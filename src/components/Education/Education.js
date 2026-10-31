// src/components/Education/Education.js
import React, { useState } from 'react'
import { education } from '../../portfolio'
import './Education.css'

const base = process.env.PUBLIC_URL || ''

const Logo = ({ src, alt, mark }) => {
  const [ok, setOk] = useState(Boolean(src))
  return ok ? (
    <img src={src} alt={alt} onError={() => setOk(false)} />
  ) : (
    <span className='edu__monogram'>{mark}</span>
  )
}

const Education = () => {
  if (!education.length) return null

  const coursework = (education.find((e) => e.coursework) || {}).coursework

  return (
    <section id='education' className='section detail'>
      <header className='detail__header'>
        <p className='detail__kicker'>Where I've studied</p>
        <h2 className='detail__title'>Education</h2>
      </header>

      <div className='detail__blocks'>
        {education.map((edu, idx) => (
          <article key={idx} className='edu'>
            <div className='edu__logo'>
              <Logo
                src={edu.logo ? `${base}/images/logos/${edu.logo}` : null}
                alt={edu.school}
                mark={edu.mark}
              />
            </div>

            <div className='edu__body'>
              {(edu.duration || edu.location) && (
                <p className='edu__date'>
                  {edu.duration}
                  {edu.duration && edu.location ? ' · ' : ''}
                  {edu.location}
                </p>
              )}
              <h3 className='edu__school'>{edu.school}</h3>
              <p className='edu__degree'>{edu.degree}</p>
              {edu.track && <p className='edu__track'>{edu.track}</p>}
              {(edu.gpa || edu.honors) && (
                <div className='edu__facts'>
                  {edu.gpa && <span className='edu__fact'>GPA {edu.gpa} / 4.00</span>}
                  {edu.honors && <span className='edu__fact edu__fact--honors'>{edu.honors}</span>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {coursework && (
        <div className='edu__coursework'>
          <p className='edu__coursework-label'>Relevant coursework</p>
          <p className='edu__coursework-text'>{coursework}</p>
        </div>
      )}
    </section>
  )
}

export default Education
