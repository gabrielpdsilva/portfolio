import { Language } from '../../../types'
import { Brazil } from '../../icons/flags/brazil'
import { UnitedStates } from '../../icons/flags/united-states'

export function IconByLanguage({ language }: IconByLanguageProps) {
  switch (language) {
    case 'en':
      return <UnitedStates />
    default:
      return <Brazil />
  }
}

type IconByLanguageProps = {
  language: Language
}
