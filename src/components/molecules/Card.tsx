import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}
export function Card({ children }: CardProps) {
  return (
    <div className="card w-96 h-44 bg-base-100 card-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-indigo-400">
      <div className="card-body">{children}</div>
    </div>
  )
}

type TitleProps = {
  children: ReactNode
}
function Title({ children }: TitleProps) {
  return <h2 className="card-title font-bold">{children}</h2>
}

type DescriptionProps = {
  children: ReactNode
}
function Description({ children }: DescriptionProps) {
  return <p>{children}</p>
}

Card.Title = Title
Card.Description = Description
