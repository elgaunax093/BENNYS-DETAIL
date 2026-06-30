import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Benny's Auto Detail | Detailing, Mecánica y Personalización en Vitoria-Gasteiz",
  description:
    'Centro integral de detailing, mecánica rápida y personalización de vehículos en Vitoria-Gasteiz. Limpieza premium, mantenimiento y reformas a medida para tu coche.',
  keywords:
    'detailing, mecánica, personalización, lavado, coches, Vitoria-Gasteiz, Álava, premium',
  openGraph: {
    title: "Benny's Auto Detail | Vitoria-Gasteiz",
    description:
      'Centro integral de detailing, mecánica rápida y personalización de vehículos en Vitoria-Gasteiz.',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: '/images/landing-page-bennys.jpg' }],
  },
  icons: { icon: '/images/logo-bennys.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: "Benny's Auto Detail",
              description:
                'Centro integral de detailing, mecánica rápida y personalización de vehículos.',
              url: 'https://bennysautodetail.com',
              telephone: '+34603768714',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle Aragón Kalea, 4',
                addressLocality: 'Vitoria-Gasteiz',
                addressRegion: 'Álava',
                postalCode: '01003',
                addressCountry: 'ES',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '5',
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
