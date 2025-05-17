import { Card } from '../../molecules/card'
import { useContent } from '../../../hooks/use-content'

export function Principles() {
  const { principles } = useContent()
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 place-items-center">
      {principles.items.map(({ title, text }) => (
        <Card key={title}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{text}</Card.Description>
        </Card>
      ))}
    </div>
  )
}
