import { useTranslation } from 'react-i18next'
import { openInNewTab } from '../../../shortcuts'
import { Card } from '../../molecules/card'
import { useContent } from '../../../hooks/use-content'

export function Highlights() {
  const { highlights } = useContent()
  return (
    <div className="justify-center grid gap-4 lg:grid-cols-3">
      {highlights.map(({ title, subtitle, src, url }) => (
        <HighlightCard
          key={title}
          title={title}
          subtitle={subtitle}
          src={src}
          onClick={() => openInNewTab(url)}
        />
      ))}
    </div>
  )
}

function HighlightCard({ title, subtitle, onClick, src }: HighlightCardProps) {
  const { t } = useTranslation()
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <img src={src} className="mb-2 rounded-lg" />
      <Card.Description>{subtitle}</Card.Description>
      <button onClick={onClick} className="self-end btn btn-soft btn-primary">
        {t('highlights.detail')}
      </button>
    </Card>
  )
}

type HighlightCardProps = {
  title: string
  subtitle: string
  src: string
  onClick: () => void
}
