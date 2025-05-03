import { useTranslation } from 'react-i18next'
import { Card } from '../../molecules/card'

const contents = [
  'about_valuable_features',
  'about_clean_code',
  'about_learning',
  'about_tests',
  'about_ux',
  'about_principles',
]

export function CardsGrid() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {contents.map((content) => (
        <PrincipleCard key={content} content={content} />
      ))}
    </div>
  )
}

type PrincipleCardProps = {
  content: string
}

function PrincipleCard({ content }: PrincipleCardProps) {
  const { t } = useTranslation()
  const title = `principles.${content}.title`
  const description = `principles.${content}.description`
  return (
    <Card key={content}>
      <Card.Title>{t(title)}</Card.Title>
      <Card.Description>{t(description)}</Card.Description>
    </Card>
  )
}
