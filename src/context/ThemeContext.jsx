import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const themes = ['dark', 'blue', 'dust']

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('nexasite-theme')
    if (themes.includes(saved)) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'blue'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nexasite-theme', theme)
  }, [theme])

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = themes.indexOf(prev)
      return themes[(idx + 1) % themes.length]
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
