import { useTranslation } from 'react-i18next'
import { GitHub } from '@/components/icons/social-medias/github'
import { StackOverflow } from '@/components/icons/social-medias/stack-overflow'
import { Git } from '@/components/icons/techs/git'
import { Javascript } from '@/components/icons/techs/javascript'
import { Typescript } from '@/components/icons/techs/typescript'
import { React } from '@/components/icons/techs/react'
import { ReactNative } from '@/components/icons/techs/react-native'
import { NestJS } from '@/components/icons/techs/nestjs'
import { Jest } from '@/components/icons/techs/jest'
import { Firebase } from '@/components/icons/techs/firebase'
import { Postgres } from '@/components/icons/techs/postgres'
import { Angular } from '@/components/icons/techs/angular'
import { Mobile } from '@/components/icons/stack/mobile'
import { Monitor } from '@/components/icons/stack/monitor'
import { Database } from '@/components/icons/stack/database'
import { useMemo } from 'react'
import { Claude } from '@/components/icons/techs/claude'
import { Mongo } from '@/components/icons/techs/mongo'
import { Figma } from '@/components/icons/techs/figma'
import { NextJS } from '@/components/icons/techs/nextjs'
import { LinkedIn } from '@/components/icons/social-medias/linkedin'

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
            title: t('highlights.dashboard_delfos.name'),
            subtitle: t('highlights.dashboard_delfos.description'),
            src: 'assets/projects/dashboard_delfos.png',
            url: 'https://www.delfos.energy',
          },
          {
            title: t('highlights.monitor_delfos.name'),
            subtitle: t('highlights.monitor_delfos.description'),
            src: 'assets/projects/monitor_delfos.png',
            url: 'https://play.google.com/store/apps/details?id=com.delfosim.monitordelfosapp',
          },
          {
            title: t('highlights.inspector.name'),
            subtitle: t('highlights.inspector.description'),
            src: 'assets/projects/inspector.png',
            url: 'https://play.google.com/store/apps/details?id=com.inspector3.delfos',
          },
          {
            title: t('highlights.axis.name'),
            subtitle: t('highlights.axis.description'),
            src: 'assets/projects/axis.png',
            url: 'https://play.google.com/store/apps/details?id=aero.flyaxis',
          },
          {
            title: t('highlights.vowe.name'),
            subtitle: t('highlights.vowe.description'),
            src: 'assets/projects/vowe.png',
            url: 'https://play.google.com/store/search?q=vowe&c=apps',
          },
          {
            title: t('highlights.selaz.name'),
            subtitle: t('highlights.selaz.description'),
            src: 'assets/projects/selaz.png',
            url: 'https://play.google.com/store/apps/details?id=com.selaz.quartzhexapod',
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
        { name: 'React Native', Icon: ReactNative },
        { name: 'React', Icon: React },
        { name: 'NextJS', Icon: NextJS },
        { name: 'NestJS', Icon: NestJS },
        { name: 'Jest', Icon: Jest },
        { name: 'Angular', Icon: Angular },
        { name: 'Firebase', Icon: Firebase },
        { name: 'Postgres', Icon: Postgres },
        { name: 'MongoDB', Icon: Mongo },
        { name: 'Claude', Icon: Claude },
        { name: 'Figma', Icon: Figma },
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
            title: t('principles.about_ai.title'),
            text: t('principles.about_ai.description'),
          },
          {
            title: t('principles.about_tests.title'),
            text: t('principles.about_tests.description'),
          },
          {
            title: t('principles.about_principles.title'),
            text: t('principles.about_principles.description'),
          },
          {
            title: t('principles.about_learning.title'),
            text: t('principles.about_learning.description'),
          },
        ],
      },
      professional: {
        title: t('professional.title'),
        items: [
          {
            title: t('professional.delfos.title'),
            subtitle: t('professional.delfos.subtitle'),
            details: t('professional.delfos.details'),
          },
          {
            title: t('professional.proaero.title'),
            subtitle: t('professional.proaero.subtitle'),
            details: t('professional.proaero.details'),
          },
          {
            title: t('professional.terapia_de_bolso.title'),
            subtitle: t('professional.terapia_de_bolso.subtitle'),
            details: t('professional.terapia_de_bolso.details'),
          },
          {
            title: t('professional.cernovapps.title'),
            subtitle: t('professional.cernovapps.subtitle'),
            details: t('professional.cernovapps.details'),
          },
        ],
      },
      academic: {
        title: t('academic.title'),
        items: [
          {
            title: t(
              'academic.technologist_systems_analysis_development.title'
            ),
            subtitle: t(
              'academic.technologist_systems_analysis_development.subtitle'
            ),
            details: t(
              'academic.technologist_systems_analysis_development.details'
            ),
          },
          {
            title: t('academic.english.title'),
            subtitle: t('academic.english.subtitle'),
            details: t('academic.english.details'),
          },
          {
            title: t('academic.technician_systems_development.title'),
            subtitle: t('academic.technician_systems_development.subtitle'),
            details: t('academic.technician_systems_development.details'),
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
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gabriel-pimentel-da-silva',
          Icon: LinkedIn,
        },
      ],
      about: {
        release_date: getReleaseText(),
        license: t('about.license'),
      },
    }),
    [t]
  )

  return content
}

function getReleaseText(): string {
  const originalReleaseYear = 2025
  const currentYear = new Date().getFullYear()
  return `© ${originalReleaseYear} - ${currentYear}`
}
