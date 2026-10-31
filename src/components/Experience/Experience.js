// src/components/Experience/Experience.js
import React, { useEffect } from 'react';
import { experience } from '../../portfolio';
import './Experience.css';

const Experience = ({ selectedItem }) => {
  useEffect(() => {
    if (selectedItem != null) {
      const el = document.getElementById(`experience-item-${selectedItem}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedItem]);

  if (!experience.length) return null;

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__list'>
        {experience.map((exp, idx) => (
          <div
            key={idx}
            id={`experience-item-${idx}`}
            className={`experience__item ${selectedItem === idx ? 'experience__item--selected' : ''}`}
          >
            <h3 className='experience__role'>{exp.name}</h3>
            <div className='experience__header'>
              <h4 className='experience__company'>{exp.company}</h4>
              <div className='experience__details'>
                {exp.duration && (
                  <span className='experience__duration'>{exp.duration}</span>
                )}
                {exp.location && (
                  <span className='experience__location'> • {exp.location}</span>
                )}
              </div>
            </div>
            <ul className='experience__description'>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
