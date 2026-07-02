'use client'
import { motion } from 'framer-motion'
import { Check, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const columnas = [
  {
    titulo: 'Mecánica Rápida',
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
  },
  {
    titulo: 'Detailing',
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
  },
  {
    titulo: 'Personalización',
    items: [
      'Iluminación ambiental',
      'Cambio de volante',
      'Láminas solares',
      'Retrovisores y accesorios',
      'Personalización interior y exterior',
      'Techo estrellado',
      'CarPlay / Android Auto integrado',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function ComparativaSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Todos nuestros servicios"
          title="Todo lo que podemos hacer por tu coche"
          subtitle="Consulta sin compromiso para cualquier servicio. Adaptamos el trabajo a lo que tu vehículo necesita."
          center
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {columnas.map((col) => (
            <motion.div
              key={col.titulo}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
              }}
              className="rounded-2xl border border-white/8 bg-background p-7 flex flex-col gap-5"
            >
              <h3 className="font-serif text-xl font-bold text-foreground border-b border-white/6 pb-4">
                {col.titulo}
              </h3>
              <ul className="space-y-3 flex-1">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted/90">
                    <Check size={14} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA presupuesto */}
        <motion.div
          className="mt-10 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/8 to-gold/3 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 60, damping: 20 }}
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Presupuesto personalizado</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Consulta tu presupuesto sin compromiso
            </h3>
            <p className="text-muted text-sm mt-2 max-w-md">
              Cada vehículo es diferente. Cuéntanos lo que necesitas y te damos precio al momento.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-background font-semibold text-sm hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,106,0.4)] transition-all duration-300"
            >
              Pedir presupuesto
            </a>
            <a
              href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20%F0%9F%9A%97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#25D366]/40 text-[#25D366] text-sm hover:border-[#25D366]/70 hover:bg-[#25D366]/10 transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href="tel:+34603768714"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 text-muted text-sm hover:border-white/30 hover:text-foreground transition-all"
            >
              <Phone size={15} />
              603 76 87 14
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
