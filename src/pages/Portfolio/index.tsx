import { useTranslation } from 'react-i18next'
import { Footer } from '../../components/organisms/footer'
import { Section } from '../../components/molecules/section'
import { Principles } from '../../components/organisms/principles'
import { Overview } from '../../components/organisms/overview'
import { AcademicTrajectory } from '../../components/organisms/academic-trajectory'
import { Header } from '../../components/organisms/header'
import { Highlights } from '../../components/organisms/highlights'

export function Portfolio() {
  const { t } = useTranslation()
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="space-y-8 p-4">
          <div className="flex justify-center">
            <Overview />
          </div>
          <Section title={t('highlights.title')}>
            <Highlights />
          </Section>
          <Section title={t('principles.title')}>
            <Principles />
          </Section>
          <Section title={t('academic.title')}>
            <AcademicTrajectory />
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
