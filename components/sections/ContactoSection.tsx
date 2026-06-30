'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

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
            {/* Contact cards */}
            <div className="rounded-2xl border border-white/8 bg-background p-6 flex flex-col gap-4">
              <a href="tel:+34603768714" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted">Teléfono</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">603 76 87 14</p>
                </div>
              </a>
              <a
                href="https://wa.me/34603768714"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle size={16} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-muted">WhatsApp</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-[#25D366] transition-colors">Escribirnos ahora</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted">Dirección</p>
                  <p className="text-sm text-foreground">Calle Aragón Kalea, 4<br />01003 Vitoria-Gasteiz, Álava</p>
                </div>
              </div>
            </div>

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
                href="https://wa.me/34603768714"
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
