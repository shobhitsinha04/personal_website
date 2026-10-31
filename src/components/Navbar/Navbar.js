// src/components/Navbar/Navbar.js - anchor nav with scrollspy
import { useContext, useState, useEffect } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import {
  experience,
  education,
  projects,
  publications,
  certifications,
  about,
} from '../../portfolio'
import './Navbar.css'

const sections = [
  { id: 'experience', label: 'Experience', show: experience.length },
  { id: 'education', label: 'Education', show: education.length },
  { id: 'projects', label: 'Projects', show: projects.length },
  { id: 'publications', label: 'Publications', show: publications.length },
  { id: 'certifications', label: 'Certifications', show: certifications.length },
  { id: 'contact', label: 'Contact', show: true },
].filter((s) => s.show)

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [active, setActive] = useState('')

  const toggleNavList = () => setShowNavList(!showNavList)

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {sections.map((s) => (
          <li className='nav__list-item' key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={() => setShowNavList(false)}
              className={`link link--nav ${active === s.id ? 'link--active' : ''}`}
            >
              {s.label}
            </a>
          </li>
        ))}

        {about.resume && (
          <li className='nav__list-item'>
            <a
              href={about.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='link link--nav nav__resume'
            >
              Resume
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
