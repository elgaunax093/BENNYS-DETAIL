import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full border border-gold/20 text-gold bg-gold/5 ${className}`}
    >
      {children}
    </span>
  )
}
