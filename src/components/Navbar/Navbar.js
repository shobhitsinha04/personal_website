// src/components/Navbar/Navbar.js
import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { experience, publications, projects, certifications } from '../../portfolio'
import './Navbar.css'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setShowNavList(false)
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {experience.length ? (
          <li className='nav__list-item'>
            <button
              onClick={() => handleNavigation('experience')}
              className={`link link--nav ${currentPage === 'experience' ? 'link--active' : ''}`}
            >
              Experience
            </button>
          </li>
        ) : null}

        {publications.length ? (
          <li className='nav__list-item'>
            <button
              onClick={() => handleNavigation('publications')}
              className={`link link--nav ${currentPage === 'publications' ? 'link--active' : ''}`}
            >
              Publications
            </button>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <button
              onClick={() => handleNavigation('projects')}
              className={`link link--nav ${currentPage === 'projects' ? 'link--active' : ''}`}
            >
              Projects
            </button>
          </li>
        ) : null}

        {certifications.length ? (
          <li className='nav__list-item'>
            <button
              onClick={() => handleNavigation('certifications')}
              className={`link link--nav ${currentPage === 'certifications' ? 'link--active' : ''}`}
            >
              Certifications
            </button>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar