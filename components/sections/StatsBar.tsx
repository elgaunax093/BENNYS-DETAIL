'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 5, suffix: '.0★', label: 'Valoración media' },
  { value: 3, suffix: ' categorías', label: 'Mecánica · Detailing · Personalización' },
  { value: 20, suffix: '+', label: 'Servicios disponibles' },
  { value: 100, suffix: '%', label: 'Atención profesional' },
]

export default function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 80, damping: 20 }}
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs text-muted mt-1 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
