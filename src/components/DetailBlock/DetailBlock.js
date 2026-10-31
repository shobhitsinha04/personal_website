// src/components/DetailBlock/DetailBlock.js
import { useState } from 'react'
import GridArt from '../GridArt/GridArt'
import './DetailBlock.css'

const Logo = ({ src, alt, mark }) => {
  const [ok, setOk] = useState(Boolean(src))
  return ok ? (
    <img className='dblock__logo-img' src={src} alt={alt} onError={() => setOk(false)} />
  ) : (
    <span className='dblock__monogram'>{mark}</span>
  )
}

const Visual = ({ logo, spec, seed }) => {
  if (logo) {
    return (
      <div className='dblock__visual dblock__visual--logo'>
        <Logo src={logo.src} alt={logo.alt} mark={logo.mark} />
      </div>
    )
  }

  if (spec) {
    return (
      <div className='dblock__visual dblock__visual--spec'>
        {spec.metrics && spec.metrics.length > 0 && (
          <div className='spec__stats'>
            {spec.metrics.map((m, i) => (
              <div key={i} className='spec__stat'>
                <span className='spec__value'>{m.value}</span>
                <span className='spec__label'>{m.label}</span>
              </div>
            ))}
          </div>
        )}
        {spec.stack && spec.stack.length > 0 && (
          <div className='spec__stack'>
            {spec.stack.map((t, i) => (
              <span key={i} className='spec__chip'>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='dblock__visual'>
      <GridArt seed={seed} />
    </div>
  )
}

const DetailBlock = ({
  id,
  reverse,
  selected,
  kicker,
  date,
  title,
  hook,
  points,
  tags,
  links,
  seed,
  logo,
  spec,
}) => (
  <article
    id={id}
    className={`dblock ${reverse ? 'dblock--reverse' : ''} ${selected ? 'dblock--selected' : ''}`}
  >
    <Visual logo={logo} spec={spec} seed={seed} />

    <div className='dblock__body'>
      {(kicker || date) && (
        <div className='dblock__meta'>
          {kicker && <span className='dblock__kicker'>{kicker}</span>}
          {date && <span className='dblock__date'>{date}</span>}
        </div>
      )}

      {title && <h3 className='dblock__title'>{title}</h3>}

      {hook && <p className='dblock__hook'>{hook}</p>}

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
