import { useTranslation } from 'react-i18next'
import { Language } from '../../../locale/types'
import { IconByLanguage } from '../../atoms/icon-by-language'
import { Brazil } from '../../icons/flags/br'
import { UnitedStates } from '../../icons/flags/united-states'

export function TranslationChanger() {
  const { i18n } = useTranslation()

  function onLanguageClick(language: Language): void {
    i18n.changeLanguage(language)
    closeDropdownIfNecessary()
  }

  function closeDropdownIfNecessary(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <IconByLanguage language={i18n.language as Language} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
      >
        <li onClick={() => onLanguageClick('pt-BR')}>
          <a>
            <Brazil />
          </a>
        </li>
        <li onClick={() => onLanguageClick('en')}>
          <a>
            <UnitedStates />
          </a>
        </li>
      </ul>
    </div>
  )
}
