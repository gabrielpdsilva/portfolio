import { Language } from '../../../types'
import { Brazil } from '../../icons/flags/brazil'
import { UnitedStates } from '../../icons/flags/united-states'

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
