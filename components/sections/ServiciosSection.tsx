'use client'
import { motion } from 'framer-motion'
import { Wrench, Sparkles, Palette, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.856l-.486-.29-5.003 1.191 1.26-4.872-.32-.5A13.239 13.239 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.927c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.975-1.182-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.896-2.158-1.228-2.956-.323-.776-.65-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.32s1.428 3.85 1.627 4.116c.2.265 2.81 4.29 6.81 6.018.952.412 1.695.658 2.274.842.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
    </svg>
  )
}

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
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Contacta con nosotros</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                ¿Tienes alguna duda o quieres pedir presupuesto?
              </h3>
              <p className="text-muted text-sm mt-2">Atendemos por teléfono y WhatsApp. Cuéntanos lo que necesita tu coche.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-background font-semibold text-sm hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,106,0.4)] transition-all duration-300"
              >
                <WhatsAppIcon size={15} />
                Escríbenos por WhatsApp
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
