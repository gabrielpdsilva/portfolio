import { Language } from '../types'
import { Theme } from '../types'

export const defaultSettings: Settings = {
  theme: {
    light: 'silk',
    dark: 'sunset',
  },
  language: 'en',
}

type Settings = {
  theme: {
    light: Theme
    dark: Theme
  }
  language: Language
}
