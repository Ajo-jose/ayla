"use client"
import { useEffect } from "react"
import { Calendar, MapPin, ArrowRight, ArrowUpRight } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import whatsOnPage from "../../lib/effects/whatsOnPage"
import "./whats-on.css"

const events = [
  ["Sunset Yoga", "April 1 · 6:00 PM", "Beach Lawn", "/assets/news-hero.mp4", "video"],
  ["Live DJ Set", "April 1 · 7:30 PM", "Vista Lounge", "/assets/whats-on/dj.mp4", "video"],
  ["Sardinian Tasting", "April 1 · 8:00 PM", "Mama Gaia", "/assets/whats-on/tasting.png", "img"],
  ["Live Music", "April 1 · 9:00 PM", "Red Restaurant", "/assets/whats-on/music.mp4", "video"],
]
const torn = ["polygon(0.0% 10.6%,4.2% 10.4%,8.3% 12.1%,12.5% 10.2%,16.7% 6.3%,20.8% 7.3%,25.0% 5.5%,29.2% 5.5%,33.3% 5.3%,37.5% 7.7%,41.7% 9.1%,45.8% 9.0%,50.0% 10.5%,54.2% 10.1%,58.3% 9.5%,62.5% 6.6%,66.7% 4.9%,70.8% 5.2%,75.0% 6.3%,79.2% 4.0%,83.3% 7.6%,87.5% 8.7%,91.7% 9.2%,95.8% 9.3%,100.0% 12.0%,100% 100%,0 100%)", "polygon(0.0% 10.2%,4.2% 8.3%,8.3% 6.7%,12.5% 6.9%,16.7% 3.9%,20.8% 4.3%,25.0% 5.3%,29.2% 6.7%,33.3% 8.1%,37.5% 9.3%,41.7% 11.5%,45.8% 11.9%,50.0% 10.2%,54.2% 10.4%,58.3% 7.6%,62.5% 5.2%,66.7% 5.9%,70.8% 5.4%,75.0% 6.1%,79.2% 8.3%,83.3% 7.8%,87.5% 9.8%,91.7% 9.3%,95.8% 10.4%,100.0% 7.8%,100% 100%,0 100%)", "polygon(0.0% 7.2%,4.2% 8.0%,8.3% 4.7%,12.5% 5.1%,16.7% 4.1%,20.8% 7.7%,25.0% 7.6%,29.2% 9.0%,33.3% 10.6%,37.5% 12.5%,41.7% 11.1%,45.8% 8.4%,50.0% 7.7%,54.2% 6.3%,58.3% 3.0%,62.5% 6.1%,66.7% 6.3%,70.8% 8.3%,75.0% 7.6%,79.2% 9.3%,83.3% 10.3%,87.5% 11.9%,91.7% 10.0%,95.8% 9.0%,100.0% 5.7%,100% 100%,0 100%)", "polygon(0.0% 3.8%,4.2% 5.4%,8.3% 5.1%,12.5% 6.2%,16.7% 6.8%,20.8% 9.2%,25.0% 9.7%,29.2% 9.8%,33.3% 10.4%,37.5% 9.3%,41.7% 8.3%,45.8% 7.4%,50.0% 5.7%,54.2% 4.2%,58.3% 4.7%,62.5% 6.2%,66.7% 8.8%,70.8% 8.4%,75.0% 11.7%,79.2% 11.6%,83.3% 9.8%,87.5% 7.8%,91.7% 5.5%,95.8% 3.9%,100.0% 5.0%,100% 100%,0 100%)"]
const offers = [
  ["Summer Stay", "30% off", "Valid until Sept 30", "/assets/whats-on/offer-1.jpg"],
  ["Family Brunch Package", "From JOD 45", "Every weekend", "/assets/whats-on/offer-2.jpg"],
  ["Golf & Stay Combo", "2 nights + 18 holes", "Year-round", "/assets/whats-on/offer-3.jpg"],
  ["Weekend Beach Escape", "3 nights, 1 free", "Valid until Oct 31", "/assets/whats-on/offer-4.jpg"],
]

export default function WhatsOnPage() {
  useEffect(() => whatsOnPage(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp">
        <section className="wh-hero" id="wh-hero" data-screen-label="Featured events slider" aria-roledescription="carousel" aria-label="Featured events">
          <h1 className="wh-h1">What’s on</h1>
          <div className="wh-count" aria-hidden="true"><b id="wh-cur">01</b>/ 04</div>
          {events.map(([t, , where, src, kind], i) => (
            <div key={t} className={"wh-s" + (i === 0 ? " on" : "")} aria-hidden={i !== 0}>
              {kind === "video" ? <video className="wh-m" src={src} autoPlay muted loop playsInline aria-hidden="true" /> : <img className="wh-m" src={src} alt="" />}
              <div className="wh-c">
                <span className="vp-k">Featured event · 0{i + 1}</span>
                <h2 className="wh-t">{t.split(" ").map((w, k) => <span key={k} className="wh-w"><span style={{ ["--i" as string]: k } as React.CSSProperties}>{w}</span></span>)}</h2>
                <div className="wh-meta">
                  <span><Calendar aria-hidden="true" />{events[i][1]}</span>
                  <span><MapPin aria-hidden="true" />{where}</span>
                  <a className="wh-res" href="#">Reserve<ArrowRight aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          ))}
          <div className="wh-nav" role="group" aria-label="Choose event">
            {events.map(([t, when, where], i) => (
              <button key={t} className={i === 0 ? "on" : ""} data-i={i} aria-label={"Show " + t}>
                <small>0{i + 1}</small>
                <span><strong>{t}</strong><em>{where} · {when.split("· ")[1]}</em></span>
                <span className="wh-bar" />
              </button>
            ))}
          </div>
        </section>

        <section className="wh-off" id="wh-off" data-screen-label="Featured offers">
          <div className="wh-offhead"><h2 className="vp-h2 vp-rv">Featured <em className="sw-serif">offers</em></h2></div>
          <div className="wh-ocards">
            {offers.map(([t, deal, val, img], i) => (
              <a key={t} className="wh-oc vp-rv" style={{ ["--d" as string]: i, ["--torn" as string]: torn[i] } as React.CSSProperties} href="#">
                <div className="wh-otop"><div className="wh-otxt"><h3>{t}</h3><p className="wh-odeal">{deal}</p><span className="wh-orule" aria-hidden="true" /><p className="wh-oval">{val}</p></div></div>
                <div className="wh-oimg"><img src={img} alt="" loading="lazy" /><span className="wh-olink">Book now<ArrowRight aria-hidden="true" /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="wh-cal" data-screen-label="Happening at Ayla">
          <div className="wh-calhead"><h2 className="vp-h2 vp-rv">Happening <em className="sw-serif">@ Ayla</em></h2><div className="vp-chips vp-rv" style={{ ["--d" as string]: 1 } as React.CSSProperties} id="wh-filters" aria-label="Filter events" /></div>
          <div className="wh-calgrid">
            <div className="wh-month vp-rv">
              <div className="wh-mhead"><h3>April</h3><p>Select a day to see its programme</p></div>
              <div className="wh-dow" aria-hidden="true"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
              <div className="wh-days" id="wh-days" role="grid" />
            </div>
            <aside className="wh-panel vp-rv" style={{ ["--d" as string]: 1 } as React.CSSProperties} aria-live="polite">
              <p className="wh-wd" id="wh-wd">Tuesday</p>
              <h3 className="wh-pdate" id="wh-pdate" style={{ fontSize: 45 }}>April 1</h3>
              <div id="wh-evs" />
            </aside>
          </div>
        </section>

        <section className="ex" data-screen-label="While you explore">
          <div className="ex-head"><h2 className="vp-h2 vp-rv">While you explore at <em className="sw-serif">Ayla</em></h2></div>
          <div className="ex-row vp-rv" style={{ ["--d" as string]: 1 } as React.CSSProperties}>
            <a className="ex-p" href="#"><img src="/assets/whats-on/offer-2.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>01</small><h3>Invest in Ayla</h3></div></a>
            <a className="ex-p" href="#"><img src="/assets/whats-on/offer-4.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>02</small><h3>Marina Village</h3><p>Berths, boardwalk shops and waterfront dining in one stretch.</p></div></a>
            <a className="ex-p" href="#"><video src="/assets/whats-on/music.mp4" autoPlay muted loop playsInline aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>03</small><h3>Wedding &amp; Events</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
          </div>
        </section>
      </main>
      <Footer />
      <div className="vp-toast" id="vp-toast" role="status" />
    </div>
  )
}
