'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, CalendarDays, Star } from 'lucide-react'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.856l-.486-.29-5.003 1.191 1.26-4.872-.32-.5A13.239 13.239 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.927c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.975-1.182-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.896-2.158-1.228-2.956-.323-.776-.65-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.32s1.428 3.85 1.627 4.116c.2.265 2.81 4.29 6.81 6.018.952.412 1.695.658 2.274.842.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
    </svg>
  )
}

const words = ['Cuidamos', 'tu', 'coche', 'como', 'si', 'fuese', 'nuestro.']

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing-page-bennys.jpg"
          alt="Imagen de portada de Benny's Auto Detail"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        {/* Gold radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Detailing · Mecánica · Personalización — Vitoria-Gasteiz
        </motion.p>

        {/* Headline word-by-word reveal */}
        <h1 className="font-serif font-bold leading-none tracking-tight text-5xl md:text-7xl lg:text-8xl max-w-4xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em] text-white-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 + i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-muted text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Centro integral de detailing, mecánica rápida y personalización para vehículos premium en Vitoria-Gasteiz.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <motion.a
            href="https://bennysautodetail.booksy.com/ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-background font-semibold text-sm hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,106,0.35)] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <CalendarDays size={16} />
            Reservar cita
          </motion.a>
          <motion.a
            href="tel:+34603768714"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/30 text-foreground backdrop-blur-md bg-white/5 font-semibold text-sm hover:border-gold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(201,168,106,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={16} />
            603 76 87 14
          </motion.a>
          <motion.a
            href="https://wa.me/34603768714"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon size={24} />
          </motion.a>
        </motion.div>

        {/* Rating badge */}
        <motion.div
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="text-gold font-semibold">5.0</span>
          <span className="text-muted/70">— Reseñas verificadas en Google</span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
