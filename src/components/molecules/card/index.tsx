import { ReactNode } from 'react'

export function Card({ children }: CardProps) {
  return (
    <div className="card md:w-96 min-h-44 bg-base-100 card-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-primary">
      <div className="card-body">{children}</div>
    </div>
  )
}

function Title({ children }: TitleProps) {
  return <h2 className="card-title font-bold">{children}</h2>
}

function Description({ children }: DescriptionProps) {
  return <p className="text-sm">{children}</p>
}

Card.Title = Title
Card.Description = Description

type CardProps = {
  children: ReactNode
}

type TitleProps = {
  children: ReactNode
}

type DescriptionProps = {
  children: ReactNode
}
