import type { ReactNode } from 'react'

type SectionProps = {
  bg: string,
  id: string,
  children: ReactNode
}

export function Section({id, bg, children}: SectionProps) {
  return (
    <div className={`section section--${bg}`}>
      {children}
    </div>
  )
}

export default Section