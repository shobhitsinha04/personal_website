// src/components/Carousel/Carousel.js
import { useRef } from 'react'
import uniqid from 'uniqid'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './Carousel.css'

const Carousel = ({ index, title, viewAllLabel, items, onSelect, onViewAll }) => {
  const trackRef = useRef(null)

  const scrollByCards = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.hcard')
    const amount = card ? card.offsetWidth + 22 : track.clientWidth * 0.8
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  if (!items || !items.length) return null

  return (
    <section className='section carousel'>
      <div className='carousel__head'>
        <div className='carousel__heading'>
          {index && <p className='carousel__index'>{index} / Work</p>}
          <h2 className='carousel__title'>{title}</h2>
        </div>
        <div className='carousel__controls'>
          <button
            type='button'
            className='carousel__arrow'
            aria-label={`Scroll ${title} left`}
            onClick={() => scrollByCards(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type='button'
            className='carousel__arrow'
            aria-label={`Scroll ${title} right`}
            onClick={() => scrollByCards(1)}
          >
            <ChevronRightIcon />
          </button>
          <button type='button' className='carousel__viewall' onClick={onViewAll}>
            {viewAllLabel} &rarr;
          </button>
        </div>
      </div>

      <div className='carousel__rule' />

      <div className='carousel__track' ref={trackRef}>
        {items.map((it) => (
          <article className='hcard' key={uniqid()}>
            <div className='hcard__meta'>
              {it.label && <span className='hcard__label'>{it.label}</span>}
              {it.tag && <span className='hcard__tag'>{it.tag}</span>}
            </div>
            <p className='hcard__hook'>{it.hook}</p>
            {it.blurb && <p className='hcard__blurb'>{it.blurb}</p>}
            <button
              type='button'
              className='hcard__more'
              onClick={() => onSelect(it.index)}
            >
              Find out more &rarr;
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Carousel
