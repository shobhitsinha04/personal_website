// src/components/Header/Header.js
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ currentPage, setCurrentPage }) => {
  const { homepage, title } = header

  const handleHomeClick = () => {
    setCurrentPage('home')
  }

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <button onClick={handleHomeClick} className='link header__title'>
            {title}
          </button>
        ) : (
          <button onClick={handleHomeClick} className='header__title'>
            {title}
          </button>
        )}
      </h3>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  )
}

export default Header