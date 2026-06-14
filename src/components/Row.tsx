import type { ReactNode } from "react"

type RowProps = {
  styles?:string
  children:ReactNode
}

export function Row( {...props}:RowProps) {
  return (
    <div className={`row ${props.styles}`}>
      { props.children }
    </div>
  )
}

export default Row