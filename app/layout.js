import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'KhataPing — Payment Reminder App for India', template: '%s | KhataPing' },
  description: site.description,
  keywords: [
    'payment reminder app India','WhatsApp payment reminder','fee reminder app','rent reminder app India','tuition fee tracker','gym payment reminder','UPI payment reminder','dues tracker India','freelancer payment reminder','khata app'
  ],
  applicationName: site.name,
  category: 'business',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.name,
    title: 'KhataPing — Stop Chasing Payments',
    description: 'Track recurring dues, nudge customers politely and get paid directly via UPI.',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'KhataPing payment reminder dashboard' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KhataPing — Stop Chasing Payments',
    description: 'India-first recurring dues and payment reminder software.',
    images: ['/og.svg']
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }]
  },
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
