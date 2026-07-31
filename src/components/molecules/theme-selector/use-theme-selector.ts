import { Theme } from '@/config/theme/type'
import { useState } from 'react'

export function useThemeSelector() {
  const [theme, setTheme] = useState<Theme>('light')

  const changeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as Theme
    setTheme(selectedTheme)
    document.documentElement.setAttribute('data-theme', selectedTheme)
  }

  return {
    theme,
    changeTheme,
  }
}
