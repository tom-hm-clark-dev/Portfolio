import type {ReactNode} from 'react'

type ColProps = {
  children:ReactNode
}

export function Col({ children }:ColProps) {
  return (
    <div className='col'>
      { children }
    </div>
  )
}

export default Col