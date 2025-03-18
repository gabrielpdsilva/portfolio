import { useTranslation } from 'react-i18next'
import { TechnologyToolsGrid } from '../molecules/TechnologyToolsGrid'
import { TechnologyStackGrid } from '../molecules/TechnologyStackGrid'

export function Overview() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="src/assets/avatar-gather.png" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-center lg:text-left">
            {t('overview.title')}
          </h1>
          <div className="font-bold text-2xl py-6 text-center lg:text-left group transition duration-300 text-indigo-400">
            {t('overview.subtitle')}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-400" />
          </div>
          <p className="italic">{t('overview.detail')}</p>
        </div>
      </div>
      <div className="space-y-1">
        <TechnologyStackGrid />
        <TechnologyToolsGrid />
      </div>
    </div>
  )
}
