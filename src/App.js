// src/App.js - Make sure all components are imported
import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Publications from './components/Publications/Publications' // Make sure this import exists
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications' // Make sure this import exists
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('home')

  const renderContent = () => {
    switch(currentPage) {
      case 'experience':
        return <Experience />
      case 'publications':
        return <Publications />
      case 'projects':
        return <Projects />
      case 'certifications':
        return <Certifications />
      default:
        return <About />
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