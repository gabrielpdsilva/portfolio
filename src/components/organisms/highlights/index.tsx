import { useTranslation } from 'react-i18next'
import { Card } from '../../molecules/card'
import { useContent } from '../../../hooks/use-content'

export function Highlights() {
  const { highlights } = useContent()
  return (
    <div className="justify-center grid gap-4 lg:grid-cols-3">
      {highlights.items.map(({ title, subtitle, src, url }) => (
        <HighlightCard
          key={title}
          title={title}
          subtitle={subtitle}
          src={src}
          url={url}
        />
      ))}
    </div>
  )
}

function HighlightCard({ title, subtitle, src, url }: HighlightCardProps) {
  const { t } = useTranslation()
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <img src={src} className="mb-2 rounded-lg" />
      <Card.Description>{subtitle}</Card.Description>
      <a
        className="self-end btn btn-soft btn-primary"
        href={url}
        target="_blank"
      >
        {t('highlights.detail')}
      </a>
    </Card>
  )
}

type HighlightCardProps = {
  title: string
  subtitle: string
  src: string
  url: string
}
