import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Política de Privacidad — Benny's Auto Detail",
  description: "Política de privacidad y protección de datos de Benny's Auto Detail.",
}

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-background min-h-screen py-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs text-gold hover:text-gold-light mb-8 inline-block tracking-wide">
          ← Volver al inicio
        </Link>
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6 leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">1. Responsable del tratamiento</h2>
            <p>
              <strong>Denominación:</strong> Benny&apos;s Auto Detail<br />
              <strong>Domicilio:</strong> Calle Aragón Kalea, 4, 01003 Vitoria-Gasteiz, Álava<br />
              <strong>Contacto:</strong> 603 76 87 14
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">2. Datos recogidos y finalidad</h2>
            <p>
              Los datos personales proporcionados a través del formulario de contacto (nombre, teléfono, email y mensaje) serán utilizados exclusivamente para gestionar tu solicitud y proporcionarte información sobre nuestros servicios. No se utilizarán para fines comerciales no autorizados.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">3. Base legal del tratamiento</h2>
            <p>
              El tratamiento se basa en el consentimiento del interesado, prestado al enviar el formulario de contacto (art. 6.1.a RGPD).
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">4. Conservación de datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para gestionar tu solicitud y, una vez finalizada la relación, durante los plazos legales aplicables.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">5. Derechos del interesado</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición contactando a través del teléfono 603 76 87 14 o dirigiéndote a nuestra dirección postal.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">6. Seguridad</h2>
            <p>
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
