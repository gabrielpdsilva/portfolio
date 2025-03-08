import { ReactNode } from 'react'

type SectionProps = {
  title: string
  children: ReactNode
}
export function Section({ title, children }: SectionProps) {
  return (
    <div className="space-y-3">
      <p className="font-bold text-2xl text-center">{title}</p>
      {children}
    </div>
  )
}
