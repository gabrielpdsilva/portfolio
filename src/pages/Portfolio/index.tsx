import { useTranslation } from 'react-i18next'
import { Footer } from '../../components/organisms/Footer'
import { Section } from '../../components/molecules/Section'
import { CardsGrid } from '../../components/organisms/CardsGrid'
import { Overview } from '../../components/organisms/Overview'
import { Academic } from '../../components/organisms/Academic'
import { Header } from '../../components/organisms/Header'
import { Highlights } from '../../components/organisms/Highlights'

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
            <CardsGrid />
          </Section>
          <Section title={t('academic.title')}>
            <Academic />
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
