'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

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

const horario = [
  { dia: 'Lunes', horas: '9:00–13:30 / 15:00–21:00' },
  { dia: 'Martes', horas: '9:00–13:30 / 15:00–21:00' },
  { dia: 'Miércoles', horas: '9:00–13:30 / 15:00–21:00' },
  { dia: 'Jueves', horas: '9:00–13:30 / 15:00–21:00' },
  { dia: 'Viernes', horas: '9:00–13:30 / 15:00–21:00' },
  { dia: 'Sábado', horas: '9:00–14:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
]

function isOpen(): boolean {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 1=Mon...6=Sat
  const h = now.getHours()
  const m = now.getMinutes()
  const mins = h * 60 + m
  if (day === 0) return false // Sunday
  if (day === 6) return mins >= 9 * 60 && mins < 14 * 60
  return (mins >= 9 * 60 && mins < 13 * 60 + 30) || (mins >= 15 * 60 && mins < 21 * 60)
}

const serviciosSelect = [
  'Mecánica rápida',
  'Lavado exterior premium',
  'Lavado interior',
  'Limpieza de tapicerías',
  'Protección cerámica',
  'Tratamiento de llantas',
  'Restauración de faros',
  'Iluminación ambiental',
  'Láminas solares',
  'CarPlay / Android Auto',
  'Techo estrellado',
  'Personalización interior/exterior',
  'Otro',
]

type FormState = { nombre: string; telefono: string; email: string; servicio: string; mensaje: string }
type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactoSection() {
  const [abierto, setAbierto] = useState(false)
  const [form, setForm] = useState<FormState>({ nombre: '', telefono: '', email: '', servicio: '', mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => { setAbierto(isOpen()) }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full bg-surface-light border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors'

  return (
    <section id="contacto" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu coche"
          subtitle="Rellena el formulario o contáctanos directamente. Estamos a tu disposición."
          center
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            className="rounded-2xl border border-white/8 bg-background p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>

            {status === 'ok' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <Send size={24} className="text-gold" />
                </div>
                <p className="font-serif text-2xl font-bold text-foreground">¡Mensaje recibido!</p>
                <p className="text-muted text-sm">Te contactaremos a la mayor brevedad posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="nombre" required placeholder="Nombre completo" value={form.nombre} onChange={handleChange} className={inputCls} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} className={inputCls} />
                  <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputCls} />
                </div>
                <select name="servicio" value={form.servicio} onChange={handleChange} className={inputCls} required>
                  <option value="" disabled>Servicio de interés</option>
                  {serviciosSelect.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold text-background font-semibold text-sm hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,106,0.3)] disabled:opacity-60 transition-all"
                >
                  {status === 'sending' ? 'Enviando...' : <><Send size={15} /> Enviar mensaje</>}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-red-400 text-center">Error al enviar. Contáctanos por teléfono o WhatsApp.</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.1 }}
          >
            {/* Contact cards — stagger animated */}
            <motion.div
              className="rounded-2xl border border-white/8 bg-background p-6 flex flex-col"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Teléfono */}
              <motion.a
                href="tel:+34603768714"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-4 group py-3 border-b border-white/5"
              >
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:shadow-[0_0_12px_rgba(201,168,106,0.3)] transition-all">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted">Teléfono</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">603 76 87 14</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20%F0%9F%9A%97"
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-4 group py-3 border-b border-white/5"
              >
                <div className="w-10 h-10 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 group-hover:shadow-[0_0_12px_rgba(37,211,102,0.3)] transition-all">
                  <WhatsAppIcon size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted">WhatsApp</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-[#25D366] transition-colors">Escríbenos por WhatsApp</p>
                </div>
              </motion.a>

              {/* Dirección → Google Maps */}
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=Calle+Aragon+Kalea+4+01003+Vitoria-Gasteiz+Alava+España"
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4 group py-3 border-b border-white/5"
              >
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 group-hover:shadow-[0_0_12px_rgba(201,168,106,0.3)] transition-all">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted">Dirección</p>
                  <p className="text-sm text-foreground group-hover:text-gold transition-colors">Calle Aragón Kalea, 4<br />01003 Vitoria-Gasteiz, Álava</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/bennys.autodetail"
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-4 group py-3"
              >
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:shadow-[0_0_12px_rgba(201,168,106,0.3)] transition-all">
                  <InstagramIcon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted">Instagram</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">@bennys.autodetail</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Horario */}
            <div className="rounded-2xl border border-white/8 bg-background p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-gold" />
                  <span className="text-sm font-semibold text-foreground">Horario</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${abierto ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-red-500/30 bg-red-500/10 text-red-400'}`}>
                  <motion.span
                    className={`w-1.5 h-1.5 rounded-full ${abierto ? 'bg-green-400' : 'bg-red-400'}`}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {abierto ? 'Abierto ahora' : 'Cerrado ahora'}
                </div>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {horario.map((h) => {
                    const hoy = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][new Date().getDay()]
                    return (
                      <tr key={h.dia} className={`border-t border-white/5 ${h.dia === hoy ? 'text-gold' : ''}`}>
                        <td className="py-2 pr-4 font-medium">{h.dia}</td>
                        <td className={`py-2 text-right ${h.horas === 'Cerrado' ? 'text-muted/50' : ''}`}>{h.horas}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* CTAs contacto directo */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+34603768714"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gold text-background py-4 text-sm font-semibold hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,106,0.3)] transition-all"
              >
                <Phone size={15} />
                Llamar ahora
              </a>
              <a
                href="https://wa.me/34603768714?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20%F0%9F%9A%97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 text-[#25D366] py-4 text-sm font-semibold hover:bg-[#25D366]/10 hover:border-[#25D366]/70 transition-all"
              >
                <MessageCircle size={15} />
                Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-8 map-dark rounded-2xl overflow-hidden border border-white/8 h-72"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.7!2d-2.6705!3d42.8499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fef5db36dc4a1%3A0x0!2sCalle+Arag%C3%B3n+Kalea%2C+4%2C+01003+Vitoria-Gasteiz%2C+%C3%81lava!5e0!3m2!1ses!2ses!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Benny's Auto Detail"
          />
        </motion.div>
      </div>
    </section>
  )
}
