'use client'
import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  goldTitle?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false, goldTitle = false }: Props) {
  return (
    <motion.div
      className={center ? 'text-center' : ''}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-medium">{eyebrow}</p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight ${
          goldTitle ? 'text-gold-gradient' : 'text-white-gradient'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-2xl" style={center ? { margin: '20px auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
