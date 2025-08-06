// src/components/Certifications/Certifications.js - More realistic layout
import React from 'react';
import uniqid from 'uniqid';
import { certifications } from '../../portfolio';
import LaunchIcon from '@material-ui/icons/Launch';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './Certifications.css';

const Certifications = () => {
  if (!certifications.length) return null;

  return (
    <section id='certifications' className='section certifications'>
      <h2 className='section__title'>Certifications & Courses</h2>
      <div className='certifications__list'>
        {certifications.map((cert) => (
          <div key={uniqid()} className='certification__item'>
            <div className='certification__header'>
              <h3 className='certification__name'>{cert.name}</h3>
              <div className='certification__meta'>
                <p className='certification__issuer'>{cert.issuer}</p>
                <span className='certification__date'>{cert.date}</span>
              </div>
            </div>
            
            <div className='certification__actions'>
              {cert.verifyLink && (
                <a
                  href={cert.verifyLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='certification__button certification__button--verify'
                >
                  <VerifiedUserIcon className='certification__button-icon' />
                  <span>Verify</span>
                </a>
              )}
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='certification__button certification__button--view'
                >
                  <LaunchIcon className='certification__button-icon' />
                  <span>View Certificate</span>
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