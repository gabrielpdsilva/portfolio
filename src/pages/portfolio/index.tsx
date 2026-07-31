import { Footer } from '@/components/organisms/footer'
import { Section } from '@/components/molecules/section'
import { SimpleCardsGrid } from '@/components/organisms/simple-cards-grid'
import { BoxOverview } from '@/components/organisms/box-overview'
import { Header } from '@/components/organisms/header'
import { DetailedCardsGrid } from '@/components/organisms/detailed-cards-grid'
import { useContent } from '@/hooks/use-content'
import { Timeline } from '@/components/organisms/timeline'

export function Portfolio() {
  const {
    overview,
    stacks,
    technologies,
    highlights,
    principles,
    professional,
    academic,
  } = useContent()
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="space-y-8 p-4">
          <div className="flex justify-center">
            <BoxOverview
              title={overview.title}
              subtitle={overview.subtitle}
              detail={overview.detail}
              primaryIcons={stacks}
              secondaryIcons={technologies}
            />
          </div>
          <Section title={highlights.title}>
            <DetailedCardsGrid items={highlights.items} />
          </Section>

          <Section title={principles.title}>
            <SimpleCardsGrid items={principles.items} />
          </Section>
          <Section title={professional.title}>
            <Timeline items={professional.items} />
          </Section>
          <div className="divider" />
          <Section title={academic.title}>
            <Timeline items={academic.items} />
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
