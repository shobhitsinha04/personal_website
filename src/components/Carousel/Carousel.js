// src/components/Carousel/Carousel.js
import uniqid from 'uniqid'
import './Carousel.css'

const Carousel = ({ title, viewAllLabel, items, onSelect, onViewAll }) => {
  if (!items || !items.length) return null

  return (
    <section className='section carousel'>
      <div className='carousel__head'>
        <h2 className='carousel__title'>{title}</h2>
        <button type='button' className='carousel__viewall' onClick={onViewAll}>
          {viewAllLabel} &rarr;
        </button>
      </div>

      <div className='carousel__track'>
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
