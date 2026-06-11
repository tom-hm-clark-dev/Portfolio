import type { ReactNode } from 'react'

type SectionProps = {
  bg: string,
  children: ReactNode
}

export function Section({bg, children}: SectionProps) {
  return (
    <div className={`section section--${bg}`}>
      {children}
    </div>
  )
}