import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Aviso Legal — Benny's Auto Detail",
  description: 'Aviso legal de Benny\'s Auto Detail, centro de detailing en Vitoria-Gasteiz.',
}

export default function AvisoLegal() {
  return (
    <main className="bg-background min-h-screen py-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-xs text-gold hover:text-gold-light mb-8 inline-block tracking-wide">
          ← Volver al inicio
        </Link>
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>
        <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6 leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">1. Identificación del titular</h2>
            <p>
              En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSICE), se facilitan a continuación los datos del titular del sitio web:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Denominación comercial:</strong> Benny&apos;s Auto Detail</li>
              <li><strong>Actividad:</strong> Centro de detailing, mecánica rápida y personalización de vehículos</li>
              <li><strong>Domicilio:</strong> Calle Aragón Kalea, 4, 01003 Vitoria-Gasteiz, Álava, España</li>
              <li><strong>Teléfono:</strong> 603 76 87 14</li>
            </ul>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente aviso legal regula el acceso y uso del sitio web de Benny&apos;s Auto Detail. El acceso al sitio implica la aceptación de los términos y condiciones aquí recogidos.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente) son propiedad de Benny&apos;s Auto Detail o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">4. Limitación de responsabilidad</h2>
            <p>
              Benny&apos;s Auto Detail no se responsabiliza de los posibles errores u omisiones en los contenidos del sitio, ni de los daños que pudieran derivarse del acceso o uso del mismo.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-lg mb-2">5. Legislación aplicable</h2>
            <p>
              El presente aviso legal se rige por la legislación española. Para la resolución de cualquier conflicto, las partes se someten a los juzgados y tribunales de Vitoria-Gasteiz.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
