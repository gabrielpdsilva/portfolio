import { Language } from './locale/type'
import { Theme } from './theme/type'

export const config: Config = {
  theme: {
    light: 'silk',
    dark: 'dracula',
  },
  language: 'pt-BR',
}

type Config = {
  theme: {
    light: Theme
    dark: Theme
  }
  language: Language
}
