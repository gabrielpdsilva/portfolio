import { useTranslation } from 'react-i18next'
import { GitHub } from '../components/icons/social-medias/github'
import { StackOverflow } from '../components/icons/social-medias/stack-overflow'
import { Git } from '../components/icons/techs/git'
import { Javascript } from '../components/icons/techs/javascript'
import { Typescript } from '../components/icons/techs/typescript'
import { React } from '../components/icons/techs/react'
import { ReactNative } from '../components/icons/techs/react-native'
import { NestJS } from '../components/icons/techs/nestjs'
import { Jest } from '../components/icons/techs/jest'
import { Firebase } from '../components/icons/techs/firebase'
import { Postgres } from '../components/icons/techs/postgres'
import { Angular } from '../components/icons/techs/angular'
import { Mobile } from '../components/icons/stack/mobile'
import { Monitor } from '../components/icons/stack/monitor'
import { Database } from '../components/icons/stack/database'

export function useContent() {
  const { t } = useTranslation()

  return {
    overview: {
      title: t('overview.title'),
      subtitle: t('overview.subtitle'),
      detail: t('overview.detail'),
    },
    stacks: [
      {
        name: 'Mobile',
        Icon: Mobile,
      },
      {
        name: 'Front-end',
        Icon: Monitor,
      },
      {
        name: 'Back-end',
        Icon: Database,
      },
    ],
    technologies: [
      { name: 'Git', Icon: Git },
      { name: 'JavaScript', Icon: Javascript },
      { name: 'TypeScript', Icon: Typescript },
      { name: 'React', Icon: React },
      { name: 'React Native', Icon: ReactNative },
      { name: 'NestJS', Icon: NestJS },
      { name: 'Jest', Icon: Jest },
      { name: 'Firebase', Icon: Firebase },
      { name: 'Postgres', Icon: Postgres },
      { name: 'Angular', Icon: Angular },
    ],
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
