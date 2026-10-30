"use client"
import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, Phone, Search } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import dine from "../../lib/effects/dine"
import { venues } from "./data"
import "./dine.css"

const D = (n: number) => ({ ["--d" as string]: n }) as React.CSSProperties
const tabs = [["all", "All"], ["hyatt", "Hyatt Regency"], ["beach", "Beach clubs"], ["golf", "Golf club"], ["marina", "Marina Village"]]
const events = [
  ["Full moon beach yoga", "Sat 27 Sep", "/assets/dine/a5c456fd.jpg", "0.0% 8.7%,4.2% 10.8%,8.3% 9.8%,12.5% 7.8%,16.7% 6.4%,20.8% 7.7%,25.0% 6.2%,29.2% 5.3%,33.3% 6.8%,37.5% 6.0%,41.7% 6.6%,45.8% 8.3%,50.0% 10.6%,54.2% 10.7%,58.3% 9.7%,62.5% 9.5%,66.7% 9.2%,70.8% 9.6%,75.0% 8.4%,79.2% 9.9%,83.3% 8.0%,87.5% 9.4%,91.7% 7.1%,95.8% 6.2%,100.0% 5.9%,100% 100%,0 100%"],
  ["Junior golf clinic", "3–5 Oct", "/assets/dine/2010121f.jpg", "0.0% 8.2%,4.2% 8.7%,8.3% 9.4%,12.5% 10.6%,16.7% 10.0%,20.8% 11.7%,25.0% 9.4%,29.2% 7.2%,33.3% 6.7%,37.5% 8.5%,41.7% 6.5%,45.8% 7.9%,50.0% 8.6%,54.2% 10.3%,58.3% 9.7%,62.5% 11.0%,66.7% 12.0%,70.8% 12.0%,75.0% 12.0%,79.2% 11.0%,83.3% 12.0%,87.5% 12.0%,91.7% 12.0%,95.8% 12.0%,100.0% 11.9%,100% 100%,0 100%"],
  ["Marina Village night market", "Every Thu", "/assets/dine/760fd888.jpg", "0.0% 9.2%,4.2% 8.1%,8.3% 6.6%,12.5% 6.6%,16.7% 5.2%,20.8% 4.6%,25.0% 4.7%,29.2% 6.6%,33.3% 6.1%,37.5% 4.5%,41.7% 5.4%,45.8% 6.5%,50.0% 8.7%,54.2% 6.4%,58.3% 7.4%,62.5% 5.8%,66.7% 5.1%,70.8% 6.8%,75.0% 6.0%,79.2% 3.8%,83.3% 3.6%,87.5% 5.3%,91.7% 5.7%,95.8% 3.3%,100.0% 3.0%,100% 100%,0 100%"],
]

export default function DinePage() {
  useEffect(() => dine(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp">
        <section className="mv-hero" data-screen-label="Hero">
          <img id="mv-himg" src="/assets/dine/b23e4a5e.jpg" alt="Guest seated in a sunlit Ayla restaurant" />
          <div className="mv-hc">
            <h1 className="mv-h1"><span className="mv-w"><span style={{ ["--i" as string]: 0 } as React.CSSProperties}>Dine</span></span><span className="mv-w"><span style={{ ["--i" as string]: 1 } as React.CSSProperties}><em className="sw-serif">@ Ayla</em></span></span></h1>
            <p>From world-class berthing at Ayla Marina to vibrant dining, shopping, and cultural experiences at Marina Village,</p>
          </div>
          <span className="mv-cue" aria-hidden="true">Scroll</span>
        </section>

        <section className="dv" data-screen-label="Venues">
          <div className="dv-bar">
            <div className="dv-tabs" role="toolbar" aria-label="Filter venues">{tabs.map(([k, l], i) => <button key={k} className="vp-chip" aria-pressed={i === 0} data-f={k}>{l}</button>)}</div>
            <div className="dv-tools">
              <label className="dv-sort"><span>Sort by</span><select id="dv-sort" defaultValue="i"><option value="i">Featured</option><option value="az">A–Z</option><option value="o">Open now first</option></select><ChevronDown aria-hidden="true" /></label>
              <label className="dv-search"><Search aria-hidden="true" /><input id="dv-q" type="search" placeholder="Search venues" aria-label="Search venues" /></label>
            </div>
          </div>
          <div className="dv-grid" id="dv-grid">
            {venues.map(v => (
              <a key={v.n} className={`mv-card dv-card${v.cl ? " " + v.cl.replace("mv-card dv-card", "").trim() : ""}`.replace("dv-card dv-off", "dv-card dv-off")} data-g={v.g} data-n={v.n} data-o={v.o} data-i={v.i} style={{ ["--torn" as string]: v.torn } as React.CSSProperties} href="#">
                <div className="mv-ctop">
                  <div className="mv-meta"><span className="mv-cat">{v.cat}</span><span className={`mv-badge ${v.bc}`}>{v.bt}</span></div>
                  <h3>{v.t}</h3><span className="mv-rule" aria-hidden="true" />
                  <dl className="mv-info"><dt><Clock aria-hidden="true" /><span className="sw-sr">Hours</span></dt><dd>{v.hrs}</dd><dt><Phone aria-hidden="true" /><span className="sw-sr">Contact</span></dt><dd>{v.ph}</dd></dl>
                </div>
                <div className="mv-img"><img src={v.img} alt="" loading="lazy" /><span className="mv-menu">{v.menu}<b><ArrowRight aria-hidden="true" /></b></span></div>
              </a>
            ))}
          </div>
          <p className="dv-empty" id="dv-empty" hidden>No venues here yet.</p>
        </section>

        <section className="dn-cross" data-screen-label="Cross-link banner">
          <video src="/assets/dine/cross.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="dn-crin"><h2 className="vp-h2 vp-rv">Planning a private event or <em className="sw-serif">wedding?</em></h2><a className="vp-btn vp-rv" style={D(1)} href="#">Explore Weddings &amp; Events<b><ArrowRight aria-hidden="true" /></b></a></div>
        </section>

        <section className="dn-wo" data-screen-label="What's on">
          <div className="dn-wohead"><h2 className="vp-h2 vp-rv">What’s <em className="sw-serif">on</em></h2><a className="about vp-rv" style={D(1)} href="/whats-on">Explore more</a></div>
          <div className="wh-ocards dn-ocards">
            {events.map(([t, d, img, torn], i) => (
              <a key={t} className="wh-oc vp-rv" style={{ ["--d" as string]: i, ["--torn" as string]: `polygon(${torn})` } as React.CSSProperties} href="#">
                <div className="wh-otop"><div className="wh-otxt"><h3>{t}</h3><p className="wh-odeal">{d}</p><span className="wh-orule" aria-hidden="true" /></div></div>
                <div className="wh-oimg"><img src={img} alt="" loading="lazy" /><span className="wh-olink">View event<ArrowRight aria-hidden="true" /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="ex dn-wd" data-screen-label="While you dine">
          <div className="ex-head"><h2 className="vp-h2 vp-rv">While you dine at <em className="sw-serif">Ayla</em></h2></div>
          <div className="ex-row vp-rv" style={D(1)}>
            <a className="ex-p" href="#"><img src="/assets/dine/2010121f.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>01</small><h3>Invest in Ayla</h3></div></a>
            <a className="ex-p" href="/marina-village"><img src="/assets/dine/2010121f.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>02</small><h3>Marina Village</h3><p>Berths, boardwalk shops and waterfront dining in one stretch.</p></div></a>
            <a className="ex-p" href="#"><video src="/assets/dine/cross.mp4" autoPlay muted loop playsInline aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>03</small><h3>Wedding &amp; Events</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
