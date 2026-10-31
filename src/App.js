// src/App.js
import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Publications from './components/Publications/Publications'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedItem, setSelectedItem] = useState(null)

  const navigate = (page, idx = null) => {
    setSelectedItem(idx)
    setCurrentPage(page)
    window.scrollTo({ top: 0 })
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'experience':
        return <Experience selectedItem={selectedItem} />
      case 'education':
        return <Education />
      case 'publications':
        return <Publications />
      case 'projects':
        return <Projects selectedItem={selectedItem} />
      case 'certifications':
        return <Certifications />
      default:
        return <Home navigate={navigate} />
    }
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {renderContent()}
        {currentPage === 'home' && <Contact />}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
