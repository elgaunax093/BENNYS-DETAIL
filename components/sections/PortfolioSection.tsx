'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const obras = [
  {
    src: '/images/mercedes-glc-interior.png',
    alt: "Interior Mercedes-AMG GLC tras detailing interior en Benny's Auto Detail",
    modelo: 'Mercedes-AMG GLC',
    servicio: 'Detailing interior',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/range-rover-sport-exterior.jpg',
    alt: 'Range Rover Sport plata tras lavado premium en Vitoria-Gasteiz',
    modelo: 'Range Rover Sport',
    servicio: 'Lavado premium',
    span: 'md:col-span-1',
  },
  {
    src: '/images/porsche-cayenne-exterior.jpg',
    alt: 'Porsche Cayenne gris tras detailing completo',
    modelo: 'Porsche Cayenne',
    servicio: 'Detailing completo',
    span: 'md:col-span-1',
  },
  {
    src: '/images/mercedes-interior-asientos.jpg',
    alt: "Interior de cuero negro tras limpieza de tapicería premium",
    modelo: 'Mercedes-Benz',
    servicio: 'Tapicería premium',
    span: 'md:col-span-1',
  },
  {
    src: '/images/porsche-volante-interior.jpg',
    alt: 'Volante e interior Porsche tras detailing interior',
    modelo: 'Porsche',
    servicio: 'Detailing interior',
    span: 'md:col-span-1',
  },
  {
    src: '/images/porsche-llanta-pinza-amarilla.jpg',
    alt: 'Llanta Porsche con pinza de freno amarilla tras tratamiento de llantas',
    modelo: 'Porsche',
    servicio: 'Tratamiento de llantas',
    span: 'md:col-span-1',
  },
  {
    src: '/images/carplay-instalacion.jpg',
    alt: "Pantalla CarPlay integrado instalado por Benny's Auto Detail",
    modelo: 'CarPlay integrado',
    servicio: 'Personalización',
    span: 'md:col-span-1',
  },
  {
    src: '/images/dacia-dokker-exterior.jpg',
    alt: 'Dacia Dokker blanco tras lavado exterior',
    modelo: 'Dacia Dokker',
    servicio: 'Lavado exterior',
    span: 'md:col-span-1',
  },
  {
    src: '/images/mercedes-cla-detalle.jpg',
    alt: "Detalle de capó Mercedes-Benz tras pulido y protección cerámica",
    modelo: 'Mercedes-Benz CLA',
    servicio: 'Pulido + cerámica',
    span: 'md:col-span-1',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function PortfolioSection() {
  const [lightbox, setLightbox] = useState<(typeof obras)[0] | null>(null)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Trabajos realizados"
          title="Resultados que hablan por sí solos"
          subtitle="Cada vehículo es tratado con la máxima atención al detalle. Aquí algunos de nuestros trabajos."
          center
        />

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[240px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {obras.map((obra, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${obra.span}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: 'spring', stiffness: 80, damping: 20 }}
              onClick={() => setLightbox(obra)}
            >
              <Image
                src={obra.src}
                alt={obra.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">{obra.servicio}</p>
                <p className="font-serif font-bold text-foreground text-lg">{obra.modelo}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} className="text-gold" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1400}
                height={900}
                className="object-contain w-full h-full max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <p className="text-xs tracking-widest uppercase text-gold">{lightbox.servicio}</p>
                <p className="font-serif text-xl font-bold text-foreground">{lightbox.modelo}</p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:border-gold/40 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X size={18} className="text-foreground" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
