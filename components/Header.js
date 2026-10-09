import Link from 'next/link'
import Brand from './Brand'
export default function Header() {
  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Brand />
        <nav className="navLinks" aria-label="Primary">
          <Link href="/#features">Features</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className="navActions">
          <Link className="textButton" href="/login">Log in</Link>
          <Link className="button small" href="/login?mode=signup">Start free</Link>
        </div>
      </div>
    </header>
  )
}
