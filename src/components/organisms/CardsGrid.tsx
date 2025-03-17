import { useTranslation } from 'react-i18next'
import { Card } from '../molecules/Card'

export function CardsGrid() {
  const { t } = useTranslation()
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <Card>
        <Card.Title>
          {' '}
          {t('principles.about_valuable_features.title')}
        </Card.Title>
        <Card.Description>
          {t('principles.about_valuable_features.description')}
        </Card.Description>
      </Card>

      <Card>
        <Card.Title> {t('principles.about_clean_code.title')}</Card.Title>
        <Card.Description>
          {t('principles.about_clean_code.description')}
        </Card.Description>
      </Card>

      <Card>
        <Card.Title> {t('principles.about_learning.title')}</Card.Title>
        <Card.Description>
          {t('principles.about_learning.description')}
        </Card.Description>
        <p className="text-sm">{t('principles.about_learning.detail')}</p>
      </Card>
    </div>
  )
}
