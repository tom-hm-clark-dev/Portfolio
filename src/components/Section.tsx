import type { CSSProperties, ReactNode } from 'react'

type SectionProps = {
  bg?: string,
  id?: string,
  children: ReactNode,
  style?: CSSProperties
}

export function Section({id, bg, children, style}: SectionProps) {
  return (
    <div 
    id={id} 
    className={`section section--${bg}`}
    style={style}>
      {children}
    </div>
  )
}

export default Section