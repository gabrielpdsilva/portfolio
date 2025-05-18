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
import { useMemo } from 'react'

export function useContent() {
  const { t } = useTranslation()

  const content = useMemo(
    () => ({
      overview: {
        title: t('overview.title'),
        subtitle: t('overview.subtitle'),
        detail: t('overview.detail'),
      },
      highlights: {
        title: t('highlights.title'),
        items: [
          {
            title: t('highlights.inspector.name'),
            subtitle: t('highlights.inspector.description'),
            src: 'assets/projects/inspector.png',
            url: 'https://play.google.com/store/apps/details?id=com.inspector3.delfos&hl=pt',
          },
          {
            title: t('highlights.axis.name'),
            subtitle: t('highlights.axis.description'),
            src: 'assets/projects/axis.png',
            url: 'https://play.google.com/store/apps/details?id=aero.flyaxis&hl=pt_BR',
          },
          {
            title: t('highlights.vowe.name'),
            subtitle: t('highlights.vowe.description'),
            src: 'assets/projects/vowe.png',
            url: 'https://play.google.com/store/search?q=vowe&c=apps&hl=pt',
          },
        ],
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
      timeline: {
        title: t('academic.title'),
        items: [
          {
            title: t(
              'academic.technologist_systems_analysis_development.title'
            ),
            subtitle: t(
              'academic.technologist_systems_analysis_development.subtitle'
            ),
            details: [
              `• ${t('academic.technologist_systems_analysis_development.course_conclusion')}`,
              `• ${t('academic.technologist_systems_analysis_development.certificate')}`,
            ],
          },
          {
            title: t('academic.english.title'),
            subtitle: t('academic.english.subtitle'),
            details: [`• ${t('academic.english.course_conclusion')}`],
          },
          {
            title: t('academic.technician_systems_development.title'),
            subtitle: t('academic.technician_systems_development.subtitle'),
            details: [
              `• ${t('academic.technician_systems_development.course_conclusion')}`,
              `• ${t('academic.technician_systems_development.certificate')}`,
            ],
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
    }),
    [t]
  )

  return content
}
