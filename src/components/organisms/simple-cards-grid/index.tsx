import { Card } from '../../molecules/card'

export function SimpleCardsGrid({ items }: SimpleCardsGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 place-items-center">
      {items.map(({ title, text }) => (
        <Card key={title}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{text}</Card.Description>
        </Card>
      ))}
    </div>
  )
}

type SimpleCardsGridProps = {
  items: Item[]
}

type Item = {
  title: string
  text: string
}
