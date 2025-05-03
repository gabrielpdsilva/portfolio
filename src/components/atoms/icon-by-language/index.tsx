import { Brazil } from '../../icons/flags/br'
import { UnitedStates } from '../../icons/flags/united-states'
import { Language } from '../../../locale/types'

type IconByLanguageProps = {
  language: Language
}

export function IconByLanguage({ language }: IconByLanguageProps) {
  switch (language) {
    case 'en':
      return <UnitedStates />
    default:
      return <Brazil />
  }
}
