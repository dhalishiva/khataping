import { site } from '@/lib/site'
export default function sitemap() {
  const paths = ['', '/pricing', '/help', '/security', '/privacy', '/terms', '/refunds', '/contact',
    '/use-cases/tuition-fee-reminders','/use-cases/gym-payment-reminders','/use-cases/pg-rent-reminders','/use-cases/freelancer-payment-reminders','/use-cases/small-business-dues']
  return paths.map((path, i) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: i === 0 ? 'weekly' : 'monthly',
    priority: i === 0 ? 1 : path.startsWith('/use-cases') ? 0.8 : 0.6
  }))
}
