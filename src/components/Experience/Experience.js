import React from 'react';
import uniqid from 'uniqid';
import { experience } from '../../portfolio'; 
import './Experience.css'; 

const Experience = () => {
  if (!experience.length) return null;

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__list'>
        {experience.map((exp) => (
          <div key={uniqid()} className='experience__item'>
            <h3 className='experience__role'>{exp.name}</h3>
            <h4 className='experience__company'>{exp.company}</h4>
            <div className='experience__details'>
              {exp.duration && (
                <span className='experience__duration'>{exp.duration}</span>
              )}
              {exp.location && (
                <span className='experience__location'> • {exp.location}</span>
              )}
            </div>
            <ul className='experience__description'>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;