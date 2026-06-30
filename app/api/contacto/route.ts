import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, telefono, email, servicio, mensaje } = body

    if (!nombre || !servicio) {
      return NextResponse.json({ error: 'Campos requeridos vacíos' }, { status: 400 })
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'web@bennysautodetail.com',
        to: process.env.CONTACT_EMAIL ?? 'elgaunax093@gmail.com',
        subject: `Nuevo contacto web: ${nombre} — ${servicio}`,
        html: `
          <h2 style="font-family:sans-serif;color:#C9A86A">Nuevo mensaje desde la web</h2>
          <table style="font-family:sans-serif;font-size:14px;color:#333;border-collapse:collapse">
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Nombre:</td><td>${nombre}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Teléfono:</td><td>${telefono || '—'}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Email:</td><td>${email || '—'}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Servicio:</td><td>${servicio}</td></tr>
            <tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top">Mensaje:</td><td>${mensaje || '—'}</td></tr>
          </table>
        `,
      })
    } else {
      console.log('Contacto recibido (sin email configurado):', { nombre, telefono, email, servicio, mensaje })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Error en /api/contacto:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
