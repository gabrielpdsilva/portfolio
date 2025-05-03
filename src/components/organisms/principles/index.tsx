import { useTranslation } from 'react-i18next'
import { Card } from '../../molecules/card'

const principleKeys = [
  'about_valuable_features',
  'about_clean_code',
  'about_learning',
  'about_tests',
  'about_ux',
  'about_principles',
]

export function Principles() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 place-items-center">
      {principleKeys.map((principleKey) => (
        <PrincipleCard key={principleKey} principleKey={principleKey} />
      ))}
    </div>
  )
}

type PrincipleCardProps = {
  principleKey: string
}

function PrincipleCard({ principleKey }: PrincipleCardProps) {
  const { t } = useTranslation()
  const title = `principles.${principleKey}.title`
  const description = `principles.${principleKey}.description`
  return (
    <Card>
      <Card.Title>{t(title)}</Card.Title>
      <Card.Description>{t(description)}</Card.Description>
    </Card>
  )
}
