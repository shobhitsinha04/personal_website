// src/contexts/theme.js - Improved with proper auto detection and persistence
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('themeName')
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    if (savedTheme) {
      setThemeName(savedTheme)
    } else {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    }

    // Listen for system theme changes
    const handleChange = (e) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light')
      }
    }

    darkMediaQuery.addEventListener('change', handleChange)
    
    return () => darkMediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', newTheme)
    setThemeName(newTheme)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }