'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const faqs = [
  {
    q: '¿Necesito cita previa?',
    a: 'Sí, recomendamos reservar cita previa a través de nuestra plataforma Booksy o llamándonos directamente al 603 76 87 14 para garantizar disponibilidad. También puedes escribirnos por WhatsApp.',
  },
  {
    q: '¿Hacen recogida a domicilio?',
    a: 'Sí, ofrecemos servicio de recogida a domicilio. Contáctanos para coordinar los detalles y disponibilidad en tu zona.',
  },
  {
    q: '¿Trabajan con todas las marcas?',
    a: 'Trabajamos con todo tipo de vehículos y marcas: Mercedes-Benz, Porsche, Range Rover, Dacia, y cualquier otro coche o furgoneta. No hay marca que nos limite.',
  },
  {
    q: '¿Cuánto tarda un detailing completo?',
    a: 'El tiempo depende del estado y tamaño del vehículo. Un lavado premium puede tardar entre 2 y 4 horas; un detailing integral o protección cerámica puede llevar un día completo o más. Te lo informamos al momento de la reserva.',
  },
  {
    q: '¿Aceptáis pago con tarjeta?',
    a: 'Sí, aceptamos pago con tarjeta, además de efectivo.',
  },
  {
    q: '¿Qué incluye la protección cerámica?',
    a: 'La protección cerámica es un tratamiento de alta gama que forma una capa protectora sobre la pintura de tu vehículo, protegiéndola de agentes externos, lluvia, UV y suciedad. Consulta disponibilidad y precio con nosotros.',
  },
]

function FAQItem({ item, isOpen, onClick }: { item: (typeof faqs)[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/6 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-medium text-sm md:text-base transition-colors ${isOpen ? 'text-foreground' : 'text-muted group-hover:text-foreground'}`}>
          {item.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'border-gold bg-gold/15 text-gold' : 'border-white/15 text-muted group-hover:border-gold/30'}`}>
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted leading-relaxed pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          center
        />

        <motion.div
          className="mt-14 rounded-2xl border border-white/8 bg-surface px-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              item={faq}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
