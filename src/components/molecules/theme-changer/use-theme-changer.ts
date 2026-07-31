import { useState } from 'react'
import { Theme } from '@/config/theme/type'
import { config } from '@/config'

export function useThemeChanger() {
  const { dark, light } = config.themes

  const [theme, setTheme] = useState<Theme>(config.defaultTheme)

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
