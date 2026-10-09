import { site } from '@/lib/site'
export default function SeoJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: site.url,
    description: site.description,
    offers: { '@type': 'Offer', price: String(site.price), priceCurrency: 'INR', category: 'subscription' },
    brand: { '@type': 'Brand', name: 'SlotRecover' },
    areaServed: { '@type': 'Country', name: 'India' }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
