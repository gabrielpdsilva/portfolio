import { useTranslation } from 'react-i18next'
import { Footer } from '../../components/organisms/Footer'
import { Section } from '../../components/molecules/Section'
import { CardsGrid } from '../../components/organisms/CardsGrid'
import { Overview } from '../../components/organisms/Overview'
import { List } from '../../components/organisms/List'
import { Header } from '../../components/organisms/Header'

export function Portfolio() {
  const { t } = useTranslation()
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="space-y-8 p-4">
          <Overview />
          <Section title={t('principles.title')}>
            <CardsGrid />
          </Section>
          <Section title={t('academic.title')}>
            <List />
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
