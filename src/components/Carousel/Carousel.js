// src/components/Carousel/Carousel.js
import { useRef } from 'react'
import uniqid from 'uniqid'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './Carousel.css'

const Carousel = ({ title, viewAllLabel, items, onSelect, onViewAll }) => {
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
        <h2 className='carousel__title'>{title}</h2>
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

      <div className='carousel__track' ref={trackRef}>
        {items.map((it) => (
          <article className='hcard' key={uniqid()}>
            {it.label && <p className='hcard__label'>{it.label}</p>}
            <p className='hcard__hook'>{it.hook}</p>
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
