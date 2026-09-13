// src/components/Education/Education.js
import React from 'react';
import uniqid from 'uniqid';
import { education } from '../../portfolio';
import './Education.css';

const Education = () => {
  if (!education.length) return null;

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>
      <div className='education__list'>
        {education.map((edu) => (
          <div key={uniqid()} className='education__item'>
            <h3 className='education__school'>{edu.school}</h3>
            <h4 className='education__degree'>{edu.degree}</h4>
            {edu.track && <p className='education__track'>{edu.track}</p>}
            {(edu.duration || edu.location) && (
              <p className='education__details'>
                {edu.duration && (
                  <span className='education__duration'>{edu.duration}</span>
                )}
                {edu.duration && edu.location && ' • '}
                {edu.location && (
                  <span className='education__location'>{edu.location}</span>
                )}
              </p>
            )}
            {edu.gpa && (
              <p className='education__gpa'>GPA: {edu.gpa} / 4.00</p>
            )}
            {edu.honors && <p className='education__honors'>{edu.honors}</p>}
            {edu.coursework && (
              <p className='education__coursework'>
                <span className='education__coursework-label'>
                  Relevant coursework:{' '}
                </span>
                {edu.coursework}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
