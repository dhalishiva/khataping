import Header from './Header';import Footer from './Footer'
export default function LegalPage({title,intro,children}){return <><Header/><main className="legalPage"><article><span className="eyebrow">KhataPing by SlotRecover</span><h1>{title}</h1><p className="updated">Last updated: 9 October 2026</p>{intro&&<p>{intro}</p>}{children}</article></main><Footer/></>}
