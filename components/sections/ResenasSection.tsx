'use client'
import { motion } from 'framer-motion'
import { Star, ExternalLink, Video, Camera } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

type Resena = {
  nombre: string
  tiempo: string
  texto?: string
  respuesta?: string
  badge?: 'video' | 'fotos'
}

const resenas: Resena[] = [
  {
    nombre: 'Miguel Angel Vialet',
    tiempo: 'Hace 2 meses',
    texto: '10/10 fui a montar un CarPlay integrado y perfecto. Recomendable para cualquier trabajo.',
    respuesta: 'Gracias por su visita, y que disfrute su CarPlay 🤝',
  },
  {
    nombre: 'Ilyas Lakouas',
    tiempo: 'Hace 1 mes',
    texto: 'Muy buena experiencia y muy buen trato. Llevé a que me hagan una limpieza el coche y la verdad que un servicio premium y de profesionales.',
    respuesta: 'Gracias por confiar en nosotros 🤝',
  },
  {
    nombre: 'Maruan El Ayadi',
    tiempo: 'Hace 2 meses',
    texto: 'Muy buena experiencia tintando las ventanas y con la limpieza premium!!!!',
    respuesta: 'Gracias por confiar en nosotros ✔️',
  },
  {
    nombre: 'Jansel Garcia',
    tiempo: 'Hace 4 días',
    texto: 'Un trato excepcional, muy atentos y amables. Sin duda volveré.',
    respuesta: 'Gracias por confiar en nosotros 🤝',
  },
  {
    nombre: 'Ericka Jiménez',
    tiempo: 'Hace 2 meses',
    texto: 'Llevé a que me revisen una avería y dieron con el fallo a la primera. Atención profesional, taller muy recomendable.',
    respuesta: 'Gracias por confiar en nosotros 🤝',
  },
  {
    nombre: 'Miguel Angel Minaya Vialet',
    tiempo: 'Hace 2 semanas',
    badge: 'video',
  },
  {
    nombre: 'Amakrout Amakrout',
    tiempo: 'Hace 4 semanas',
    badge: 'fotos',
  },
  {
    nombre: 'Antoni Rincón Ortiz',
    tiempo: 'Hace 1 mes',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function ResenasSection() {
  return (
    <section id="resenas" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Lo que dicen nuestros clientes"
            title="Reseñas reales, resultados reales"
          />
          <div className="text-center md:text-right shrink-0">
            <p className="font-serif text-6xl font-bold text-gold-gradient leading-none">5.0</p>
            <div className="flex justify-center md:justify-end gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-xs text-muted mt-1">{resenas.length} reseñas verificadas</p>
            <a
              href="https://www.google.com/search?q=Benny%27s+Auto+Detail+Vitoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold-light mt-2 transition-colors"
            >
              Ver todas en Google <ExternalLink size={11} />
            </a>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resenas.map((r, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
              }}
              className="rounded-2xl border border-white/8 bg-surface p-6 flex flex-col gap-4 hover:border-gold/20 transition-colors"
            >
              {/* Stars + badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                {r.badge === 'video' && (
                  <span className="inline-flex items-center gap-1 text-[10px] tracking-wide uppercase text-gold border border-gold/25 bg-gold/8 px-2 py-0.5 rounded-full">
                    <Video size={10} /> Vídeo
                  </span>
                )}
                {r.badge === 'fotos' && (
                  <span className="inline-flex items-center gap-1 text-[10px] tracking-wide uppercase text-gold border border-gold/25 bg-gold/8 px-2 py-0.5 rounded-full">
                    <Camera size={10} /> Con fotos
                  </span>
                )}
              </div>

              {r.texto ? (
                <p className="text-sm text-foreground/90 leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
              ) : (
                <p className="text-sm text-muted/60 italic flex-1">Reseña positiva de Google</p>
              )}

              {r.respuesta && (
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-muted italic leading-relaxed">
                    <span className="text-gold not-italic font-medium">Respuesta: </span>
                    {r.respuesta}
                  </p>
                </div>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-gold">{initials(r.nombre)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.nombre}</p>
                  <p className="text-xs text-muted">{r.tiempo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
