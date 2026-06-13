import type { ReactNode } from "react"

type RowProps = {
  width?:string
  children:ReactNode
}

export function Row( {children, width}:RowProps) {
  return (
    <div className={`row ${width}`}>
      { children }
    </div>
  )
}

export default Row