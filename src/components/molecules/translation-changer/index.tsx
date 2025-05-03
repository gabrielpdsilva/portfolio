import { IconByLanguage } from '../../atoms/icon-by-language'
import { Brazil } from '../../icons/flags/brazil'
import { UnitedStates } from '../../icons/flags/united-states'
import { useTranslate } from '../../../hooks/use-translate'

export function TranslationChanger() {
  const { language, onLanguageClick } = useTranslate()

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <IconByLanguage language={language} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
      >
        <li onClick={() => onLanguageClick('en')}>
          <a>
            <UnitedStates />
          </a>
        </li>
        <li onClick={() => onLanguageClick('pt-BR')}>
          <a>
            <Brazil />
          </a>
        </li>
      </ul>
    </div>
  )
}
