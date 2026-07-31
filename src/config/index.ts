import { Language } from './locale/type'
import { Theme } from './theme/type'

export const config: Config = {
  themes: {
    light: 'silk',
    dark: 'dracula',
  },
  defaultTheme: 'dracula',
  language: 'en',
}

type Config = {
  themes: {
    light: Theme
    dark: Theme
  }
  defaultTheme: Theme
  language: Language
}
