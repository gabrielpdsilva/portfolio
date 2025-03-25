import { useTranslation } from 'react-i18next'
import { openInNewTab } from '../../shortcuts'

type HighlightCardProps = {
  title: string
  subtitle: string
  src: string
  onClick: () => void
}

function HighlightCard({ title, subtitle, onClick, src }: HighlightCardProps) {
  const { t } = useTranslation()
  return (
    <div className="max-w-sm rounded-lg border p-5 shadow">
      <img src={src} className="mb-2 rounded-lg" />
      <h2 className="mb-2 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="flex flex-col items-start">
        <p className="mb-3">{subtitle}</p>
        <button
          onClick={onClick}
          className="self-end cursor-pointer rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {t('highlights.detail')}
        </button>
      </div>
    </div>
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
