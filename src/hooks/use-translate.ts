import { useTranslation } from 'react-i18next'
import { Language } from '../types'

export function useTranslate() {
  const { i18n } = useTranslation()

  const { language, changeLanguage } = i18n

  function onLanguageClick(newLanguage: Language): void {
    changeLanguage(newLanguage)
    closeDropdownIfNecessary()
  }

  function closeDropdownIfNecessary(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return {
    language: language as Language,
    onLanguageClick,
  }
}
