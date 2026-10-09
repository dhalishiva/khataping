import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

export default function UseCasePage({ eyebrow, title, description, pains, features, keyword }) {
  return <>
    <Header />
    <main>
      <section className="pageHero"><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="heroActions"><Link className="button" href="/login?mode=signup">Start 14-day free trial</Link><Link className="ghostButton" href="/pricing">See ₹149 pricing</Link></div></div></section>
      <section className="section"><div className="shell twoCol"><div><span className="eyebrow">The problem</span><h2>Collection work should not eat your day.</h2>{pains.map(x => <p className="checkLine" key={x}>✓ {x}</p>)}</div><div className="softCard"><span className="eyebrow">KhataPing workflow</span><h3>One customer. One due date. Automatic clarity.</h3>{features.map((x,i)=><div className="flowStep" key={x}><i>{i+1}</i><span>{x}</span></div>)}</div></div></section>
      <section className="section alt"><div className="shell center narrow"><span className="eyebrow">Built for India</span><h2>{keyword}</h2><p>Track in rupees, add your UPI ID, keep customer data separated, and use WhatsApp-ready reminder messages without forcing customers to install another app.</p><Link className="button" href="/login?mode=signup">Try KhataPing free</Link></div></section>
    </main><Footer />
  </>
}
