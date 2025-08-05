// src/components/Publications/Publications.js 
import React from 'react';
import uniqid from 'uniqid';
import { publications } from '../../portfolio';  
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Publications.css';

const Publications = () => {  
  if (!publications.length) return null;

  return (
    <section id='publications' className='section publications'>
      <h2 className='section__title'>Publications</h2>
      <div className='publications__list'>
        {publications.map((pub) => (
          <div key={uniqid()} className='publication__item'>
            <h3 className='publication__title'>{pub.title}</h3>
            <p className='publication__authors'>{pub.authors}</p>
            <p className='publication__venue'>
              {pub.venue} • {pub.location} • {pub.month} {pub.year}
            </p>
            
            {pub.note && (
              <p className='publication__note'>{pub.note}</p>
            )}
            
            {pub.description && (
              <ul className='publication__description'>
                {pub.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
            
            {pub.links && (
              <div className='publication__links'>
                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    aria-label='paper'
                    className='link link--icon'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LaunchIcon />
                    <span>Paper</span>
                  </a>
                )}
                {pub.links.code && (
                  <a
                    href={pub.links.code}
                    aria-label='code'
                    className='link link--icon'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                    <span>Code</span>
                  </a>
                )}
              </div>
            )}
            
            {pub.status && (
              <div className='publication__status'>{pub.status}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;