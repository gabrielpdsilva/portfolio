import { Brazil } from '../icons/flags/Brazil';
import { UnitedStates } from '../icons/flags/UnitedStates';
import { Languages } from '../../locale/types';

type IconByLanguageProps = {
  language: Languages;
};

export function IconByLanguage({ language }: IconByLanguageProps) {
  switch (language) {
    case 'en':
      return <UnitedStates />;
    default:
      return <Brazil />;
  }
}
