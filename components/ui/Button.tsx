'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  children, href, onClick, variant = 'primary', size = 'md', className = '', target, rel,
}: Props) {
  const base =
    'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer'
  const sizes = { sm: 'px-5 py-2 text-sm', md: 'px-7 py-3 text-sm', lg: 'px-9 py-4 text-base' }
  const variants = {
    primary:
      'bg-gold text-background hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,106,0.35)]',
    outline:
      'border border-gold/40 text-foreground backdrop-blur-md bg-white/5 hover:border-gold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(201,168,106,0.2)]',
    ghost: 'text-gold hover:text-gold-light underline-offset-4 hover:underline',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={{ textDecoration: 'none' }}>
        {inner}
      </a>
    )
  }
  return inner
}
