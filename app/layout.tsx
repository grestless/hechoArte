import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Hecho Arte | Alfombras de Arte Hechas a Mano',
  description: 'Alfombras artesanales de diseño único en Argentina. Cada pieza es una obra de arte hecha a mano, exclusiva e irrepetible. Arte que se pisa.',
  keywords: ['alfombras artesanales', 'rug tufting argentina', 'decoración de interiores', 'arte textil', 'alfombras a mano', 'hecho arte studio'],
  authors: [{ name: 'Hecho Arte Studio' }],
  creator: 'Hecho Arte Studio',
  publisher: 'Hecho Arte Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hechoarte.studio'), // Cambiar por la URL real de producción
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hecho Arte | Alfombras de Arte Hechas a Mano',
    description: 'Alfombras artesanales de diseño único. Cada pieza es una obra de arte hecha a mano, exclusiva e irrepetible.',
    url: 'https://hechoarte.studio',
    siteName: 'Hecho Arte',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de que esta imagen exista en /public
        width: 1200,
        height: 630,
        alt: 'Hecho Arte - Alfombras de Diseño',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hecho Arte | Alfombras de Arte Hechas a Mano',
    description: 'Alfombras artesanales de diseño único. Arte que se pisa.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080b1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Permitir zoom para accesibilidad
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${anton.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
