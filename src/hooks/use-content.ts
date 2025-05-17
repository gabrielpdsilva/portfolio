import { useTranslation } from 'react-i18next'
import { GitHub } from '../components/icons/social-medias/github'
import { StackOverflow } from '../components/icons/social-medias/stack-overflow'

export function useContent() {
  const { t } = useTranslation()

  return {
    overview: {
      title: t('overview.title'),
      subtitle: t('overview.subtitle'),
      detail: t('overview.detail'),
    },
    principles: {
      title: t('principles.title'),
      items: [
        {
          title: t('principles.about_valuable_features.title'),
          text: t('principles.about_valuable_features.description'),
        },
        {
          title: t('principles.about_clean_code.title'),
          text: t('principles.about_clean_code.description'),
        },
        {
          title: t('principles.about_learning.title'),
          text: t('principles.about_learning.description'),
        },
        {
          title: t('principles.about_tests.title'),
          text: t('principles.about_tests.description'),
        },
        {
          title: t('principles.about_ux.title'),
          text: t('principles.about_ux.description'),
        },
        {
          title: t('principles.about_principles.title'),
          text: t('principles.about_principles.description'),
        },
      ],
    },
    socialMedias: [
      {
        name: 'GitHub',
        url: 'https://github.com/gabrielpdsilva',
        Icon: GitHub,
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/12829458/gabrielpdsilva',
        Icon: StackOverflow,
      },
    ],
    footer: t('footer'),
  }
}
