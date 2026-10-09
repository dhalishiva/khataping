import Link from 'next/link'

export default function Brand({ inverse=false, compact=false }) {
  return (
    <Link className={`brand ${inverse ? 'brandInverse' : ''}`} href="/" aria-label="KhataPing home">
      <span className="brandMark" aria-hidden="true"><span>₹</span><i /></span>
      <span className="brandText"><strong>KhataPing</strong>{!compact && <small>by SlotRecover</small>}</span>
    </Link>
  )
}
