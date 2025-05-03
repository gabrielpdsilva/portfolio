import { Language } from '../types'
import { Theme } from '../types'

export const defaultSettings: Settings = {
  theme: 'night',
  language: 'en',
}

type Settings = {
  theme: Theme
  language: Language
}
