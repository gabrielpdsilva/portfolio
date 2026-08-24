import { useIsVisible } from '@/hooks/use-is-visible'
import { ReactNode, useRef } from 'react'

export function Section({ title, children }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isSectionVisible = useIsVisible(ref)
  return (
    <div
      ref={ref}
      className={`transition-opacity ease-in duration-700 ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="space-y-3">
        <p className="font-bold text-2xl text-center">{title}</p>
        {children}
      </div>
    </div>
  )
}

type SectionProps = {
  title: string
  children: ReactNode
}
