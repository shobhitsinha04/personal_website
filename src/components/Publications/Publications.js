import React from 'react'
import './Publications.css'

const Publications = ({ publications }) => {
  if (!publications?.length) return null

  return (
    <section className='section publications' id='publications'>
      <h2 className='section__title'>Publications</h2>

      <div className='publications__grid'>
        {publications.map((publication, index) => (
          <div key={index} className='publication'>
            <h3 className='publication__title'>{publication.title}</h3>
            
            <div className='publication__authors'>{publication.authors}</div>
            
            <div className='publication__venue'>
              <strong>{publication.venue}</strong>
              {publication.location && (
                <span className='publication__location'> • {publication.location}</span>
              )}
              <span className='publication__year'> • {publication.month} {publication.year}</span>
            </div>

            {publication.note && (
              <div className='publication__note'>{publication.note}</div>
            )}

            {publication.description && (
              <ul className='publication__description'>
                {publication.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {publication.links && (
              <div className='publication__links'>
                {publication.links.paper && (
                  <a
                    href={publication.links.paper}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link publication__link'
                  >
                    Paper
                  </a>
                )}
                {publication.links.code && (
                  <a
                    href={publication.links.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link publication__link'
                  >
                    Code
                  </a>
                )}
              </div>
            )}

            {publication.status && (
              <div className='publication__status'>{publication.status}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications