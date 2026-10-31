// src/contexts/theme.js - Improved with proper auto detection and persistence
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // Default to the warm light theme; honor a saved choice if present.
    const savedTheme = localStorage.getItem('themeName')
    if (savedTheme) {
      setThemeName(savedTheme)
    }
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