'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#portfolio' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.856l-.486-.29-5.003 1.191 1.26-4.872-.32-.5A13.239 13.239 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.927c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.975-1.182-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.896-2.158-1.228-2.956-.323-.776-.65-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.32s1.428 3.85 1.627 4.116c.2.265 2.81 4.29 6.81 6.018.952.412 1.695.658 2.274.842.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-gold/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-bennys.png"
              alt="Logotipo Benny's Auto Detail"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-foreground text-lg hidden sm:block">
              BENNY&apos;S <span className="text-gold">Auto Detail</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs: teléfono + WhatsApp + Instagram + Llamar ahora */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+34603768714"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Phone size={14} className="text-gold" />
              <span className="hidden xl:inline">603 76 87 14</span>
            </a>
            <a
              href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20%F0%9F%9A%97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#25D366] hover:opacity-80 transition-opacity"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/bennys.autodetail"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-gold transition-colors"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href="tel:+34603768714"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-background text-sm font-semibold hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,106,0.3)] transition-all duration-300"
            >
              <Phone size={15} />
              Llamar ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl font-bold text-foreground hover:text-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              className="flex flex-col items-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="tel:+34603768714"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-background font-semibold text-lg"
              >
                <Phone size={18} />
                Llamar ahora
              </a>
              <div className="flex items-center gap-5 mt-1">
                <a href="tel:+34603768714" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
                  <Phone size={15} className="text-gold" /> 603 76 87 14
                </a>
                <a href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20%F0%9F%9A%97" target="_blank" rel="noopener noreferrer" className="text-[#25D366]" aria-label="WhatsApp">
                  <WhatsAppIcon size={20} />
                </a>
                <a href="https://www.instagram.com/bennys.autodetail" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
