'use client'
import { motion } from 'framer-motion'
import { Home, Car, Stethoscope, Star, Camera } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const features = [
  { icon: Home, label: 'Centro integral', desc: 'Mecánica, detailing y personalización en un solo lugar.' },
  { icon: Star, label: 'Trato cercano', desc: 'Valorado con 5 estrellas por nuestros clientes reales.' },
  { icon: Car, label: 'Vehículos premium', desc: 'Experiencia con Mercedes-AMG, Porsche, Range Rover y más.' },
  { icon: Home, label: 'Recogida a domicilio', desc: 'Nos desplazamos a recoger tu vehículo si lo necesitas.' },
  { icon: Stethoscope, label: 'Diagnosis electrónica', desc: 'Identificamos el fallo a la primera con tecnología de diagnosis.' },
  { icon: Camera, label: 'Resultados documentados', desc: 'Seguimiento fotográfico antes y después de cada trabajo.' },
]

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Sobre nosotros"
              title="Un equipo que ama los coches"
            />
            <motion.p
              className="mt-6 text-muted leading-relaxed text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              En Benny&apos;s Auto Detail nos gusta cuidar tu coche como si fuese nuestro. Conseguimos el resultado que buscas en tu vehículo en un mismo centro: desde limpiezas básicas hasta recuperación completa de vehículos, mantenimientos integrales y personalización a tu gusto — iluminación ambiental, techo estrellado, cambios de interior y exterior.
            </motion.p>
            <motion.p
              className="mt-4 text-muted leading-relaxed text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Trabajamos con marcas premium: Mercedes-Benz, Porsche, Range Rover y mucho más. Contacta con nosotros para cualquier duda.
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.label}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-surface hover:border-gold/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.label}</p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
