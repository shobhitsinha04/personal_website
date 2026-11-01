// src/components/Header/Header.js
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ currentPage, navigate }) => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        <button
          onClick={() => navigate('home')}
          className={homepage ? 'link header__title' : 'header__title'}
        >
          {title}
        </button>
      </h3>
      <Navbar currentPage={currentPage} navigate={navigate} />
    </header>
  )
}

export default Header
