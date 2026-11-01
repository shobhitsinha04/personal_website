// src/components/Education/Education.js
import React, { useState } from 'react'
import { education } from '../../portfolio'
import './Education.css'

const base = process.env.PUBLIC_URL || ''

const Logo = ({ src, srcDark, alt, mark }) => {
  const [ok, setOk] = useState(Boolean(src))
  if (!ok) return <span className='edu__monogram'>{mark}</span>
  return (
    <>
      <img
        className='edu__logo-img edu__logo-img--light'
        src={src}
        alt={alt}
        onError={() => setOk(false)}
      />
      {srcDark && (
        <img className='edu__logo-img edu__logo-img--dark' src={srcDark} alt={alt} />
      )}
    </>
  )
}

const Education = () => {
  if (!education.length) return null

  const courseworkRaw = (education.find((e) => e.coursework) || {}).coursework
  const courses = courseworkRaw
    ? courseworkRaw
        .replace(/\.\s*$/, '')
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean)
    : []

  return (
    <section id='education' className='section detail'>
      <header className='detail__header'>
        <p className='detail__kicker'>Where I've studied</p>
        <h2 className='detail__title'>Education</h2>
      </header>

      <div className='detail__blocks'>
        {education.map((edu, idx) => (
          <article key={idx} className='edu'>
            <div className={`edu__logo ${edu.logoDark ? 'has-dark-logo' : ''}`}>
              <Logo
                src={edu.logo ? `${base}/images/logos/${edu.logo}` : null}
                srcDark={edu.logoDark ? `${base}/images/logos/${edu.logoDark}` : null}
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

      {courses.length > 0 && (
        <div className='edu__coursework'>
          <p className='edu__coursework-label'>Relevant coursework</p>
          <p className='edu__coursework-text'>{courses.join('   ·   ')}</p>
        </div>
      )}
    </section>
  )
}

export default Education
