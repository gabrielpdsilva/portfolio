import { useTranslation } from 'react-i18next'
import { openInNewTab } from '../../../shortcuts'
import { Card } from '../../molecules/card'

type HighlightCardProps = {
  title: string
  subtitle: string
  src: string
  onClick: () => void
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

export function Highlights() {
  const { t } = useTranslation()
  return (
    <div className="justify-center grid gap-4 md:grid-cols-3">
      <HighlightCard
        title={t('highlights.inspector.name')}
        subtitle={t('highlights.inspector.description')}
        src="assets/projects/inspector.png"
        onClick={() =>
          openInNewTab(
            'https://play.google.com/store/apps/details?id=com.inspector3.delfos&hl=pt'
          )
        }
      />
      <HighlightCard
        title={t('highlights.axis.name')}
        subtitle={t('highlights.axis.description')}
        src="assets/projects/axis.png"
        onClick={() =>
          openInNewTab(
            'https://play.google.com/store/apps/details?id=aero.flyaxis&hl=pt_BR'
          )
        }
      />
      <HighlightCard
        title={t('highlights.vowe.name')}
        subtitle={t('highlights.vowe.description')}
        src="assets/projects/vowe.png"
        onClick={() =>
          openInNewTab(
            'https://play.google.com/store/search?q=vowe&c=apps&hl=pt'
          )
        }
      />
    </div>
  )
}
