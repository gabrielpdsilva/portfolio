import { Language } from '@/config/locale/type'
import { Brazil } from '@/components/icons/flags/brazil'
import { UnitedStates } from '@/components/icons/flags/united-states'

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
