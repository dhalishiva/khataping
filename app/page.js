import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DashboardPreview from '@/components/DashboardPreview'
import SeoJsonLd from '@/components/SeoJsonLd'

const features=[
  ['⏱','Recurring due tracking','Set a customer, amount, frequency and due date once. KhataPing keeps the next collection visible.'],
  ['💬','WhatsApp-ready nudges','Generate polite reminder messages for before, on and after the due date without writing them every month.'],
  ['₹','UPI-first collection','Add your UPI ID so customers can pay you directly. KhataPing never needs to hold their money.'],
  ['✓','Paid / pending clarity','Mark collections paid and see due, upcoming and overdue amounts in one lightweight dashboard.'],
  ['👥','Customer ledger','Keep each customer’s recurring dues, notes and payment status together instead of scattered chats.'],
  ['🔒','Private by design','Account-scoped data, row-level access controls and no public customer directory.']
]
const segments=[
  ['🎓','Tutors','Monthly tuition fees','/use-cases/tuition-fee-reminders'],
  ['🏠','PG owners','Rent & mess dues','/use-cases/pg-rent-reminders'],
  ['🏋️','Gyms','Membership renewals','/use-cases/gym-payment-reminders'],
  ['💻','Freelancers','Retainers & invoices','/use-cases/freelancer-payment-reminders'],
  ['🧰','Local services','Recurring service dues','/use-cases/small-business-dues']
]
const faqs=[
  ['Does KhataPing collect my customer payments?','No. Customers pay your UPI account directly. KhataPing tracks the due and helps you follow up; it is not a wallet or payment aggregator.'],
  ['Do customers need to install KhataPing?','No. The business owner uses KhataPing. Customers can receive the reminder through the communication method you choose and pay using their normal UPI app.'],
  ['Is this a full accounting or GST product?','No—and that is deliberate. KhataPing is focused on recurring dues and follow-ups. Use your accounting software for bookkeeping, tax filing and GST invoicing.'],
  ['Can I cancel any time?','Yes. The monthly plan is designed to be cancel-anytime. See the Cancellation & Refund Policy for details.'],
  ['Is WhatsApp automation included on day one?','The app is designed around WhatsApp-ready reminders. Full automated WhatsApp delivery requires an approved WhatsApp Business provider/API and is introduced only when the account is configured for it.']
]

export default function Home(){return <>
  <SeoJsonLd/><Header/><main>
    <section className="hero"><div className="shell heroGrid">
      <div><span className="eyebrow">Made for recurring collections in India</span><h1>Stop remembering dues.<br/><span>Start getting paid.</span></h1><p className="heroText">KhataPing tracks recurring fees, rent, memberships and retainers, then helps you send a polite nudge with your UPI payment route—all for ₹149/month.</p><div className="heroActions"><Link className="button" href="/login?mode=signup">Start 14-day free trial</Link><Link className="ghostButton" href="#product">See the dashboard</Link></div><div className="microcopy"><span>✓ No card for trial</span><span>✓ Cancel any time</span><span>✓ Payments go to your UPI</span></div></div>
      <div className="heroVisual"><DashboardPreview/></div>
    </div><div className="shell trustStrip"><div><strong>₹149 / month</strong><span>One simple individual-business plan</span></div><div><strong>UPI direct</strong><span>Your money never sits with KhataPing</span></div><div><strong>India-first</strong><span>₹ amounts, mobile-first workflows</span></div><div><strong>No customer app</strong><span>Your customers keep using WhatsApp + UPI</span></div></div></section>

    <section className="section alt" id="product"><div className="shell"><div className="sectionTitle"><div><span className="eyebrow">One calm dashboard</span><h2>Know who owes what—without opening ten chats.</h2></div><p>See expected collections, what is already paid, what is pending and exactly which customer needs a reminder next.</p></div><DashboardPreview/></div></section>

    <section className="section" id="features"><div className="shell"><div className="sectionTitle"><div><span className="eyebrow">Focused, not bloated</span><h2>The small set of tools you actually need to chase fewer payments.</h2></div><p>KhataPing is intentionally not another accounting ERP. Its job is to keep recurring collections from slipping through the cracks.</p></div><div className="featureGrid">{features.map(([i,h,p])=><div className="featureCard" key={h}><div className="featureIcon">{i}</div><h3>{h}</h3><p>{p}</p></div>)}</div></div></section>

    <section className="section alt"><div className="shell"><div className="center narrow"><span className="eyebrow">Who it is for</span><h2>If you collect roughly the same money every month, KhataPing fits.</h2><p className="muted">Start with the businesses where payment follow-up still lives in a notebook, spreadsheet or WhatsApp memory.</p></div><div className="segmentGrid">{segments.map(([i,h,p,u])=><Link className="segment" href={u} key={h}><i>{i}</i><strong>{h}</strong><span>{p}</span></Link>)}</div></div></section>

    <section className="section" id="how"><div className="shell"><div className="center narrow"><span className="eyebrow">How it works</span><h2>Set it once. Check only what needs attention.</h2></div><div className="steps"><div className="step"><div className="stepNo">01 / ADD</div><h3>Add a customer & recurring due</h3><p>Name, mobile number, amount, frequency and due date. That is enough to start.</p></div><div className="step"><div className="stepNo">02 / NUDGE</div><h3>Use a polite reminder</h3><p>KhataPing prepares the right follow-up around the due date so every reminder does not start from a blank chat.</p></div><div className="step"><div className="stepNo">03 / CLOSE</div><h3>Mark it paid</h3><p>Payment reaches you directly. Mark the due paid and KhataPing keeps the next cycle ready.</p></div></div></div></section>

    <section className="section alt"><div className="shell twoCol"><div><span className="eyebrow">Security & trust</span><h2>Your collection list is business data. We treat it that way.</h2><p className="muted">The application architecture separates each signed-in account’s records with database row-level security. Sensitive provider keys belong on the server, not in the browser.</p><div className="securityRows"><div className="securityRow"><span className="securityDot">✓</span><div><b>Account-scoped access</b><p>Users are limited to their own customers, dues and reminders.</p></div></div><div className="securityRow"><span className="securityDot">✓</span><div><b>No payment custody</b><p>UPI payments go to the business, reducing unnecessary financial-data exposure.</p></div></div><div className="securityRow"><span className="securityDot">✓</span><div><b>Secure headers + HTTPS hosting</b><p>Strict browser security headers are configured and production is designed for HTTPS-only hosting.</p></div></div></div><Link className="ghostButton" href="/security">Read security overview</Link></div><DashboardPreview admin/></div></section>

    <section className="section" id="pricing"><div className="shell"><div className="center narrow"><span className="eyebrow">Pricing without a spreadsheet</span><h2>₹149 a month. That’s it.</h2><p className="muted">Designed to be cheap enough for a solo tutor and useful enough for a busy local business.</p></div><div className="priceWrap"><div className="priceCard"><span className="eyebrow">Khata plan</span><div className="price"><sup>₹</sup>149 <span>/ month</span></div><p>14 days free before you decide.</p><ul><li>✓ Customer & recurring due tracking</li><li>✓ Upcoming / pending / overdue dashboard</li><li>✓ WhatsApp-ready reminder messages</li><li>✓ UPI payment details</li><li>✓ Collection history</li><li>✓ Mobile-friendly app</li></ul><Link className="button full" href="/login?mode=signup">Start free</Link></div><div className="priceNote"><h3>No percentage of your collections.</h3><p>If you collect ₹5,000 or ₹5 lakh, the software price remains ₹149/month under the standard plan limits. Customer payments go to your own UPI route.</p><h3>No annual lock-in.</h3><p>Monthly billing keeps the decision simple. Cancel future renewals any time from account settings once billing is activated.</p><Link className="ghostButton" href="/pricing">Full pricing details</Link></div></div></div></section>

    <section className="section alt"><div className="shell narrow"><div className="center"><span className="eyebrow">Questions</span><h2>Before you add your first due.</h2></div><div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="cta"><div className="shell ctaBox"><div><h2>One less thing to remember every month.</h2><p>Add your first recurring due and see the workflow before paying anything.</p></div><Link className="button" href="/login?mode=signup">Start 14-day trial →</Link></div></section>
  </main><Footer/></>}
