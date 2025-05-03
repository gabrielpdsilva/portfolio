import { useState } from 'react'
import { Theme } from '../types'
import { defaultSettings } from '../constants/settings'

export function useTheme() {
  const { dark, light } = defaultSettings.theme

  const [theme, setTheme] = useState<Theme>(dark)

  function onChangeTheme(): void {
    setTheme(theme === light ? dark : light)
  }

  function setStorageTheme(newTheme: Theme): void {
    localStorage.setItem('theme', newTheme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html')?.setAttribute('data-theme', localTheme!)
  }

  return {
    theme,
    onChangeTheme,
    setStorageTheme,
  }
}
