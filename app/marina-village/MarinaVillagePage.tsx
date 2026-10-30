"use client"
import { useEffect } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Phone } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import marinaVillage from "../../lib/effects/marinaVillage"
import { sections, boats, type Card } from "./data"
import "./marina-village.css"

const D = (n: number) => ({ ["--d" as string]: n }) as React.CSSProperties
const chipLabels: Record<string, string> = {
  "mv-dining": "Marina Dining", "mv-cafes": "Marina Cafes & Treats", "mv-bars": "Bars & Bites", "mv-shopping": "Shopping",
  "mv-beauty": "Beauty, Gifts & Fitness", "mv-heritage": "Traditional / Heritage", "mv-ent": "Entertainment & Experiences",
  "mv-health": "Health Care", "mv-services": "Services",
}

function CardEl({ c, i }: { c: Card; i: number }) {
  return (
    <a className="mv-card vp-rv" style={{ ["--d" as string]: i, ["--torn" as string]: c.torn } as React.CSSProperties} href="#">
      <div className="mv-ctop">
        <div className="mv-meta"><span className="mv-cat">{c.cat}</span><span className={`mv-badge ${c.bc}`}>{c.bt}</span></div>
        <h3>{c.t}</h3>
        <span className="mv-rule" aria-hidden="true" />
        <dl className="mv-info">
          <dt><Clock aria-hidden="true" /><span className="sw-sr">Hours</span></dt><dd>{c.hrs[0]}<br />{c.hrs[1]}</dd>
          <dt><Phone aria-hidden="true" /><span className="sw-sr">Contact</span></dt><dd>{c.ph}</dd>
        </dl>
      </div>
      <div className="mv-img"><img src={c.img} alt="" loading="lazy" draggable={false} /><span className="mv-menu">{c.menu}<b><ArrowRight aria-hidden="true" /></b></span></div>
    </a>
  )
}

export default function MarinaVillagePage() {
  useEffect(() => marinaVillage(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp">
        <section className="mv-hero" data-screen-label="Hero">
          <img id="mv-himg" src="/assets/mv/abb718fa.png" alt="Marina Village boardwalk" />
          <div className="mv-hc">
            <h1 className="mv-h1"><span className="mv-w"><span style={{ ["--i" as string]: 0 } as React.CSSProperties}>Marina</span></span><span className="mv-w"><span style={{ ["--i" as string]: 1 } as React.CSSProperties}><em className="sw-serif">Village</em></span></span></h1>
            <p>From world-class berthing at Ayla Marina to vibrant dining, shopping, and cultural experiences at Marina Village.</p>
          </div>
          <span className="mv-cue" aria-hidden="true">Scroll</span>
        </section>
        <section className="mv-intro" data-screen-label="Intro">
          <h2 className="vp-h2 vp-rv">Where the Sea Meets <em className="sw-serif">Lifestyle</em></h2>
          <p className="vp-rv" style={D(1)}>From world-class berthing at Ayla Marina to vibrant dining, shopping, and cultural experiences at Marina Village, this is where luxury meets everyday life. Discover Ayla’s assortment at its finest.</p>
        </section>
        <div className="mv-bar"><nav className="mv-barin" id="mv-bar" aria-label="Marina Village categories">
          {sections.map((s, i) => <button key={s.id} className="vp-chip" aria-pressed={i === 0} data-t={s.id}>{chipLabels[s.id]}</button>)}
        </nav></div>
        {sections.map(s => (
          <section key={s.id} className={`mv-sec${s.alt ? " alt" : ""}`} id={s.id} data-screen-label={chipLabels[s.id]}>
            <div className="mv-head">
              <div><h2 className="vp-h2 vp-rv">{s.h[0]}<em className="sw-serif">{s.h[1]}</em>{s.h[2]}</h2><p className="vp-rv" style={D(1)}>{s.p}</p></div>
              <div className="mv-arr vp-rv" style={D(2)}><button className="mv-prev" aria-label="Previous"><ArrowLeft aria-hidden="true" /></button><button className="mv-next" aria-label="Next"><ArrowRight aria-hidden="true" /></button></div>
            </div>
            <div className="mv-track" aria-label={chipLabels[s.id]}>{s.cards.map((c, i) => <CardEl key={i} c={c} i={i} />)}</div>
            <div className="mv-prog" aria-hidden="true"><i /></div>
          </section>
        ))}
        <section className="mv-boat" id="mv-boats" data-screen-label="Boats Services">
          <div className="mv-head">
            <div><h2 className="vp-h2 vp-rv">Boats <em className="sw-serif">Services</em></h2><p className="vp-rv" style={D(1)}>From world-class berthing at Ayla Marina to vibrant dining, shopping, and cultural experiences at Marina Village.</p></div>
            <a className="vp-btn vp-rv" style={D(2)} href="#">Learn More About Ayla Marina<b><ArrowRight aria-hidden="true" /></b></a>
          </div>
          <div className="mv-bgrid">{boats.map((c, i) => <CardEl key={i} c={c} i={i} />)}</div>
        </section>
        <section className="ex" data-screen-label="Explore more">
          <div className="ex-head"><h2 className="vp-h2 vp-rv">Explore <em className="sw-serif">more</em></h2></div>
          <div className="ex-row vp-rv" style={D(1)}>
            <a className="ex-p" href="#"><img src="/assets/mv/d9a0d7da.png" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>01</small><h3>Dine at Ayla</h3><p>Restaurants and cafes across the marina, beach and golf club.</p></div></a>
            <a className="ex-p" href="#"><img src="/assets/mv/86038a85.png" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>02</small><h3>Invest in Ayla</h3></div></a>
            <a className="ex-p" href="#"><video src="/assets/whats-on/music.mp4" autoPlay muted loop playsInline aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>03</small><h3>Wedding &amp; Events</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
