import { useTranslation } from 'react-i18next'

export function CardsGrid() {
  const { t } = useTranslation()
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">
            {' '}
            {t('principles.about_valuable_features.title')}
          </h2>
          <p>{t('principles.about_valuable_features.description')}</p>
        </div>
      </div>

      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">
            {t('principles.about_clean_code.title')}
          </h2>
          <p>{t('principles.about_clean_code.description')}</p>
        </div>
      </div>

      <div className="card w-96 h-44 bg-base-100 card-lg shadow-md">
        <div className="card-body">
          <h2 className="card-title font-bold">
            {t('principles.about_learning.title')}
          </h2>
          <p>{t('principles.about_learning.description')}</p>
          <p className="text-sm">{t('principles.about_learning.detail')}</p>
        </div>
      </div>
    </div>
  )
}
