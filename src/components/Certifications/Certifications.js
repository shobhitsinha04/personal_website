// src/components/Certifications/Certifications.js
import React from 'react';
import uniqid from 'uniqid';
import { certifications } from '../../portfolio';
import LaunchIcon from '@material-ui/icons/Launch';
import './Certifications.css';

const Certifications = () => {
  if (!certifications.length) return null;

  return (
    <section id='certifications' className='section certifications'>
      <h2 className='section__title'>Certifications & Courses</h2>
      <div className='certifications__list'>
        {certifications.map((cert) => (
          <div key={uniqid()} className='certification__item'>
            <h3 className='certification__name'>{cert.name}</h3>
            <div className='certification__meta'>
              <p className='certification__issuer'>{cert.issuer}</p>
              <p className='certification__date'>{cert.date}</p>
            </div>
            
            {cert.description && (
              <ul className='certification__description'>
                {cert.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
            
            <div className='certification__footer'>
              {cert.credentialId && (
                <p className='certification__credential'>
                  Credential ID: {cert.credentialId}
                </p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  aria-label='verify certificate'
                  className='link link--icon certification__link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LaunchIcon />
                  <span>Verify Certificate</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;