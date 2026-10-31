// src/components/Publications/Publications.js
import React from 'react'
import { publications } from '../../portfolio'
import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@material-ui/icons/GitHub'
import './Publications.css'

const base = process.env.PUBLIC_URL || ''

const Publications = () => {
  if (!publications.length) return null

  return (
    <section id='publications' className='section detail'>
      <header className='detail__header'>
        <p className='detail__kicker'>Research</p>
        <h2 className='detail__title'>Publications</h2>
      </header>

      <div className='detail__blocks'>
        {publications.map((pub, idx) => (
          <article key={idx} className='pub'>
            <div className='pub__head'>
              {pub.status && <span className='pub__status'>{pub.status}</span>}
              <h3 className='pub__title'>{pub.title}</h3>
              <p className='pub__authors'>{pub.authors}</p>
              <p className='pub__venue'>
                {pub.venue} · {pub.location} · {pub.month} {pub.year}
              </p>
            </div>

            {pub.summary && <p className='pub__summary'>{pub.summary}</p>}

            {pub.figures && pub.figures.length > 0 && (
              <div className='pub__figures'>
                {pub.figures.map((fig, i) => (
                  <figure key={i} className='pub__figure'>
                    <div className='pub__figure-frame'>
                      <img
                        src={`${base}/images/publications/${fig.src}`}
                        alt={fig.caption}
                        loading='lazy'
                      />
                    </div>
                    {fig.caption && <figcaption>{fig.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}

            {pub.description && pub.description.length > 0 && (
              <ul className='pub__points'>
                {pub.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}

            {pub.links && (
              <div className='pub__links'>
                {pub.links.paper && (
                  <a
                    className='pub__link'
                    href={pub.links.paper}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LaunchIcon fontSize='small' />
                    <span>Paper</span>
                  </a>
                )}
                {pub.links.arxiv && (
                  <a
                    className='pub__link'
                    href={pub.links.arxiv}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LaunchIcon fontSize='small' />
                    <span>arXiv</span>
                  </a>
                )}
                {pub.links.code && (
                  <a
                    className='pub__link'
                    href={pub.links.code}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon fontSize='small' />
                    <span>Code</span>
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Publications
