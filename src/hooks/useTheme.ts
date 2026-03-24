import { useState, useEffect } from 'react'
import { type ThemeId, DEFAULT_THEME } from '../theme/themes'

const STORAGE_KEY = 'portfolio-theme'

function applyTheme(theme: ThemeId) {
  document.documentElement.setAttribute('data-theme', theme)
}

function getStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null
    if (stored) return stored
  } catch {
    // ignore
  }
  return DEFAULT_THEME
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const initial = getStoredTheme()
    applyTheme(initial)
    return initial
  })

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  return { theme, setTheme }
}
