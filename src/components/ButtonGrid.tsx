import type { ReactNode } from 'react'

type ButtonGridProps = {
  children: ReactNode
}

export function ButtonGrid({ children }: ButtonGridProps) {
  return <div className="button-grid">{children}</div>
}
