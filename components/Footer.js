import Link from 'next/link'
import Brand from './Brand'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerGrid">
        <div><Brand inverse /><p className="muted">A lightweight collections assistant for India-first recurring businesses.</p></div>
        <div><h4>Product</h4><Link href="/pricing">Pricing</Link><Link href="/security">Security</Link><Link href="/help">Help centre</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Use cases</h4><Link href="/use-cases/tuition-fee-reminders">Tuition fees</Link><Link href="/use-cases/pg-rent-reminders">PG & rent</Link><Link href="/use-cases/gym-payment-reminders">Gym memberships</Link><Link href="/use-cases/freelancer-payment-reminders">Freelancers</Link></div>
        <div><h4>Legal</h4><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refunds">Cancellation & refund</Link></div>
      </div>
      <div className="shell footerBottom"><span>© {new Date().getFullYear()} KhataPing by SlotRecover</span><span>Made for India · Payments go directly to your UPI</span></div>
    </footer>
  )
}
