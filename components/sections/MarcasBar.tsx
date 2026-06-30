'use client'
import { motion } from 'framer-motion'

const ejemplos = ['Mercedes-Benz', 'Porsche', 'Range Rover', 'Dacia', 'y muchas más']

export default function MarcasBar() {
  return (
    <section className="py-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted/50 mb-3">
          Trabajamos con todas las marcas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {ejemplos.map((m, i) => (
            <motion.span
              key={m}
              className="text-sm md:text-base tracking-widest uppercase text-muted/40 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {m}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
