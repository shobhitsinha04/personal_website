// src/components/DetailBlock/DetailBlock.js
import GridArt from '../GridArt/GridArt'
import './DetailBlock.css'

const DetailBlock = ({ id, reverse, selected, kicker, date, title, points, tags, links, seed }) => (
  <article
    id={id}
    className={`dblock ${reverse ? 'dblock--reverse' : ''} ${selected ? 'dblock--selected' : ''}`}
  >
    <div className='dblock__visual'>
      <GridArt seed={seed} />
    </div>

    <div className='dblock__body'>
      <div className='dblock__meta'>
        <span className='dblock__kicker'>{kicker}</span>
        {date && <span className='dblock__date'>{date}</span>}
      </div>

      {title && <h3 className='dblock__title'>{title}</h3>}

      {points && points.length > 0 && (
        <ul className='dblock__points'>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {tags && tags.length > 0 && (
        <div className='dblock__tags'>
          {tags.map((t, i) => (
            <span key={i} className='dblock__tag'>
              + {t}
            </span>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className='dblock__links'>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target='_blank'
              rel='noopener noreferrer'
              className='dblock__link'
            >
              {l.label} &#8599;
            </a>
          ))}
        </div>
      )}
    </div>
  </article>
)

export default DetailBlock
