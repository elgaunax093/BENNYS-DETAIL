'use client'
import { motion } from 'framer-motion'
import { Wrench, Sparkles, Palette, CalendarDays, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const servicios = [
  {
    icon: Wrench,
    titulo: 'Mecánica Rápida',
    descripcion: 'Mantenimiento y reparación con diagnosis electrónica de precisión.',
    items: [
      'Mantenimientos integrales',
      'Cambio de aceite y filtros',
      'Frenos (discos y pastillas)',
      'Neumáticos',
      'Suspensión',
      'Baterías',
      'Diagnosis electrónica',
      'Pre-ITV',
    ],
    colSpan: 'md:col-span-1',
  },
  {
    icon: Sparkles,
    titulo: 'Detailing',
    descripcion: 'Tratamientos premium que devuelven la belleza original de tu vehículo.',
    items: [
      'Lavado exterior premium',
      'Lavado interior',
      'Limpieza de tapicerías',
      'Protección cerámica',
      'Tratamiento de llantas',
      'Tratamiento de plásticos',
      'Restauración de faros',
      'Descontaminado',
    ],
    colSpan: 'md:col-span-1',
  },
  {
    icon: Palette,
    titulo: 'Personalización',
    descripcion: 'Dale a tu coche una identidad única con nuestras soluciones a medida.',
    items: [
      'Iluminación ambiental',
      'Cambio de volante',
      'Láminas solares',
      'Retrovisores y accesorios',
      'Personalización interior y exterior',
      'Techo estrellado',
      'Instalación de CarPlay / Android Auto integrado',
    ],
    colSpan: 'md:col-span-1',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
}

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Tres especialidades, un mismo lugar"
          subtitle="Desde el primer lavado hasta la personalización más exigente, lo hacemos todo."
          center
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicios.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titulo}
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`relative rounded-2xl border border-white/8 bg-surface p-8 flex flex-col gap-6 group hover:border-gold/25 hover:shadow-[0_0_40px_rgba(201,168,106,0.08)] transition-all duration-300 ${s.colSpan}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center group-hover:border-gold/60 transition-all">
                  <Icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.titulo}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.descripcion}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted/80">
                      <Check size={13} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-gold/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Reserva ahora</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                ¿Listo para darle a tu coche el trato que merece?
              </h3>
              <p className="text-muted text-sm mt-2">Atendemos todos los días de la semana. Reserva online en segundos.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://bennysautodetail.booksy.com/ig"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-background font-semibold text-sm hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,106,0.4)] transition-all duration-300"
              >
                <CalendarDays size={15} />
                Reservar cita
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-foreground text-sm hover:border-gold transition-all"
              >
                Pedir presupuesto
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
