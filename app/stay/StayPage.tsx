"use client"
import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, Plane } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import stay from "../../lib/effects/stay"
import "./stay.css"

const D = (n: number) => ({ ["--d" as string]: n }) as React.CSSProperties
const intro = "From beachfront hotel rooms to marina residences, choose the way you want to stay in Aqaba. Every option sits within walking distance of the beach, the marina and Ayla Golf Club.".split(" ")
const places = [
  { img: "/assets/stay/12f2f8cc.jpg", alt: "Hyatt Regency Aqaba Ayla terrace", h: ["Hyatt Regency ", "Aqaba Ayla"], p: "A full-service beachfront resort with private beach access, five dining outlets and direct access to Marina Village.", chips: ["Private beach", "Multiple pools", "Spa", "5 dining outlets", "Kids club"] },
  { img: "/assets/stay/3d56a393.jpg", alt: "Cloud7 Residence", h: ["Cloud7 ", "Residence"], p: "Apartment-style rooms with kitchenettes, built for families and longer stays on the marina.", chips: ["Kitchenette in every room", "Rooftop pool", "Free parking", "Pet-friendly", "Laundry facilities"] },
  { img: "/assets/stay/e8d20eaa.jpg", alt: "Ayla boardwalk at dusk", h: ["The ", "Pulse"], p: "A new social stay concept opening on the boardwalk, built around music, food and the marina.", chips: [], soon: true },
]
const offers = [
  ["Stay 4, pay 3", "Book four nights at Hyatt Regency Aqaba Ayla and the fourth night is on us.", "/assets/stay/12f2f8cc.jpg", "0.0% 7.2%,4.2% 5.7%,8.3% 7.9%,12.5% 7.3%,16.7% 8.1%,20.8% 6.9%,25.0% 9.2%,29.2% 8.8%,33.3% 8.2%,37.5% 8.1%,41.7% 10.4%,45.8% 11.5%,50.0% 10.8%,54.2% 11.5%,58.3% 12.0%,62.5% 9.6%,66.7% 11.6%,70.8% 12.0%,75.0% 12.0%,79.2% 10.3%,83.3% 9.0%,87.5% 8.1%,91.7% 9.8%,95.8% 10.4%,100.0% 11.9%,100% 100%,0 100%"],
  ["Golf & stay package", "Room, breakfast and two rounds at Ayla Golf Club, bundled for one rate.", "/assets/stay/3d56a393.jpg", "0.0% 7.2%,4.2% 6.3%,8.3% 7.4%,12.5% 5.5%,16.7% 6.6%,20.8% 6.6%,25.0% 6.8%,29.2% 5.6%,33.3% 6.0%,37.5% 3.6%,41.7% 3.0%,45.8% 3.0%,50.0% 3.0%,54.2% 3.0%,58.3% 3.0%,62.5% 5.2%,66.7% 7.2%,70.8% 7.5%,75.0% 5.9%,79.2% 4.3%,83.3% 6.2%,87.5% 4.6%,91.7% 5.4%,95.8% 5.7%,100.0% 4.8%,100% 100%,0 100%"],
  ["Family summer bundle", "Adjoining rooms at Cloud7 Residence plus water park passes for the kids.", "/assets/stay/10660589.jpg", "0.0% 9.4%,4.2% 7.0%,8.3% 4.8%,12.5% 7.1%,16.7% 8.0%,20.8% 9.5%,25.0% 9.9%,29.2% 12.0%,33.3% 12.0%,37.5% 10.1%,41.7% 8.7%,45.8% 10.9%,50.0% 12.0%,54.2% 12.0%,58.3% 10.3%,62.5% 10.3%,66.7% 10.5%,70.8% 8.3%,75.0% 6.7%,79.2% 6.3%,83.3% 3.9%,87.5% 3.5%,91.7% 5.8%,95.8% 5.8%,100.0% 6.5%,100% 100%,0 100%"],
]

export default function StayPage() {
  useEffect(() => stay(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp">
        <section className="mv-hero st-hero" data-screen-label="Hero">
          <video id="mv-himg" src="/assets/v/v-oasis.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="mv-hc"><h1 className="mv-h1"><span className="mv-w"><span style={{ ["--i" as string]: 0 } as React.CSSProperties}>Stay at</span></span><span className="mv-w"><span style={{ ["--i" as string]: 1 } as React.CSSProperties}><em className="sw-serif">Ayla Oasis</em></span></span></h1></div>
          <span className="mv-cue" aria-hidden="true">Scroll</span>
        </section>
        <section className="mv-intro st-intro" data-screen-label="Intro">
          <p className="pv-st" id="st-it">{intro.map((w, i) => <span key={i}><span className="pv-sw">{w}</span>{" "}</span>)}</p>
        </section>
        <section className="st-stack" id="st-stack" data-screen-label="Places to stay">
          {places.map((c, i) => (
            <article key={c.h[1]} className="st-card" style={{ ["--i" as string]: i } as React.CSSProperties}>
              <div className="st-in">
                <div className="st-media"><img src={c.img} alt={c.alt} loading="lazy" /></div>
                <div className="st-copy">
                  {c.soon && <span className="mv-badge st-soon">Coming soon</span>}
                  <h2 className="vp-h2">{c.h[0]}<em className="sw-serif">{c.h[1]}</em></h2>
                  <p>{c.p}</p>
                  {c.chips.length > 0 && <ul className="dq-chips">{c.chips.map(x => <li key={x}>{x}</li>)}</ul>}
                  <div className="st-btns">
                    {c.soon ? <a className="st-ghost" href="#">Register interest</a> : <><a className="vp-btn" href="#">Book your room<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost" href={c.alt.includes("Hyatt") ? "/hyatt-regency" : "#"}>Learn More</a></>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="st-find" data-screen-label="Find Ayla Oasis">
          <div className="st-fcopy">
            <h2 className="vp-h2 vp-rv">Find <em className="sw-serif">Ayla Oasis</em></h2>
            <p className="vp-rv" style={D(1)}>Ayla Oasis sits on the Red Sea coast in Aqaba, Jordan, 10 minutes from King Hussein International Airport.</p>
            <div className="st-fig vp-rv" style={D(2)}><b>10</b><span>minutes from<br />King Hussein International Airport</span><Plane className="st-plane" aria-hidden="true" strokeWidth={1.5} /></div>
            <a className="vp-btn vp-rv" style={D(3)} href="/plan-your-visit">Getting here<b><ArrowRight aria-hidden="true" /></b></a>
          </div>
          <div className="st-map vp-ri"><img src="/assets/location-map.jpg" alt="Map of Ayla Oasis in Aqaba" loading="eager" /><span className="st-pin" aria-hidden="true" /></div>
        </section>
        <section className="dn-wo" data-screen-label="Seasonal offers">
          <div className="dn-wohead"><h2 className="vp-h2 vp-rv">Seasonal <em className="sw-serif">offers</em></h2></div>
          <div className="wh-ocards dn-ocards">
            {offers.map(([t, d, img, torn], i) => (
              <a key={t} className="wh-oc vp-rv" style={{ ["--d" as string]: i, ["--torn" as string]: `polygon(${torn})` } as React.CSSProperties} href="#">
                <div className="wh-otop"><div className="wh-otxt"><h3>{t}</h3><p className="wh-odeal">{d}</p><span className="wh-orule" aria-hidden="true" /></div></div>
                <div className="wh-oimg"><img src={img} alt="" loading="lazy" /><span className="wh-olink">View offer<ArrowRight aria-hidden="true" /></span></div>
              </a>
            ))}
          </div>
        </section>
        <section className="ex dn-wd" data-screen-label="While you stay">
          <div className="ex-head"><h2 className="vp-h2 vp-rv">While you <em className="sw-serif">stay</em></h2></div>
          <div className="ex-row vp-rv" style={D(1)}>
            <a className="ex-p" href="/dine"><img src="/assets/stay/9281bbc8.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>01</small><h3>Dine at Ayla</h3><p>Restaurants and cafes across the marina, beach and golf club.</p></div></a>
            <a className="ex-p" href="/marina-village"><img src="/assets/stay/ec0f74ee.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>02</small><h3>Marina Village</h3><p>Berths, boardwalk shops and waterfront dining in one stretch.</p></div></a>
            <a className="ex-p" href="/whats-on"><img src="/assets/stay/ed891094.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight /></span><div className="ex-c"><small>03</small><h3>What’s On</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
