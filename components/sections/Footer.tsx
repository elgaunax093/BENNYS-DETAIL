import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.856l-.486-.29-5.003 1.191 1.26-4.872-.32-.5A13.239 13.239 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.927c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.896.2-.266.398-1.03 1.295-1.263 1.56-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.975-1.182-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.179-.178.398-.465.597-.697.2-.232.266-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.896-2.158-1.228-2.956-.323-.776-.65-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.32s1.428 3.85 1.627 4.116c.2.265 2.81 4.29 6.81 6.018.952.412 1.695.658 2.274.842.955.304 1.824.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
    </svg>
  )
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const nav = [
  { label: 'Servicios', links: [
    { l: 'Mecánica Rápida', h: '#servicios' },
    { l: 'Detailing', h: '#servicios' },
    { l: 'Personalización', h: '#servicios' },
  ]},
  { label: 'Empresa', links: [
    { l: 'Nosotros', h: '#nosotros' },
    { l: 'Trabajos', h: '#portfolio' },
    { l: 'Reseñas', h: '#resenas' },
    { l: 'Contacto', h: '#contacto' },
  ]},
  { label: 'Legal', links: [
    { l: 'Aviso legal', h: '/aviso-legal' },
    { l: 'Política de privacidad', h: '/politica-privacidad' },
  ]},
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo-bennys.png" alt="Logotipo Benny's Auto Detail" width={44} height={44} className="rounded-full" />
              <span className="font-serif font-bold text-foreground text-lg">
                BENNY&apos;S <span className="text-gold">Auto Detail</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Centro integral de detailing, mecánica rápida y personalización para vehículos premium en Vitoria-Gasteiz.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bennys.autodetail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 hover:scale-105 hover:shadow-[0_0_12px_rgba(201,168,106,0.2)] transition-all duration-200"
              >
                <InstagramIcon size={15} />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/34603768714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 hover:scale-105 transition-all duration-200"
              >
                <WhatsAppIcon size={15} />
              </a>
              {/* Teléfono */}
              <a
                href="tel:+34603768714"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors ml-1"
              >
                <Phone size={12} className="text-gold" /> 603 76 87 14
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.label}>
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-4">{col.label}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.l}>
                    <a href={l.h} className="text-sm text-muted hover:text-foreground transition-colors">
                      {l.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-gold" />
              Calle Aragón Kalea, 4, 01003 Vitoria-Gasteiz
            </span>
            <a href="tel:+34603768714" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone size={12} className="text-gold" />
              603 76 87 14
            </a>
          </div>
          <a
            href="tel:+34603768714"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-background text-xs font-semibold hover:bg-gold-light transition-all"
          >
            <Phone size={13} /> Llamar ahora
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted/50">
          <p>© 2026 Benny&apos;s Auto Detail. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/aviso-legal" className="hover:text-muted transition-colors">Aviso legal</a>
            <a href="/politica-privacidad" className="hover:text-muted transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
