"use client"
import { useEffect } from "react"
import { ArrowDownRight, ArrowUpRight, BedDouble, Sailboat, ShoppingBag, Utensils, Flag, Umbrella, SquareParking, Plus, Minus } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import AwardsShowcase from "../components/AwardsShowcase"
import planVisit from "../../lib/effects/planVisit"
import "./plan-your-visit.css"

const D = (n: number) => ({ ["--d" as string]: n }) as React.CSSProperties
const toc = [["#pv-explore", "Explore Ayla"], ["#pv-map", "Interactive map"], ["#pv-sus", "Sustainability"], ["#pv-faq", "Frequently asked"]]
const pins = [
  ["Hotels", "Hyatt Regency Aqaba Ayla", 66, 52, "0.0s", BedDouble],
  ["Activities", "Ayla Marina", 55, 46, "0.3s", Sailboat],
  ["Retail", "Marina Village", 48, 61, "0.6s", ShoppingBag],
  ["Dining", "Waterfront dining", 60, 68, "0.9s", Utensils],
  ["Activities", "Ayla Golf Club", 80, 18, "1.2s", Flag],
  ["Activities", "Public beach", 40, 84, "1.5s", Umbrella],
  ["Parking", "Parking P1", 42, 68, "1.8s", SquareParking],
  ["Parking", "Parking P2", 75, 63, "2.1s", SquareParking],
] as const
const chips = ["All", "Hotels", "Dining", "Activities", "Retail", "Parking"]
const sus = "How Ayla is built — the environmental principles, community commitments, and responsible design decisions that shape every building, beach and business at the destination.".split(" ")
const faq = [
  ["Do I need a visa to visit Aqaba?", "Most nationalities receive a visa on arrival at Aqaba, or can enter visa-free under the Aqaba Special Economic Zone. Check current requirements for your nationality before travel."],
  ["Is Ayla open year-round?", "Yes. Ayla is open all year. The most comfortable weather runs from October to April."],
  ["Can non-residents access the beach and marina?", "Yes. The marina promenade and Marina Village are open to everyone. Beach access is available through the beach clubs."],
  ["Are pets allowed?", "Pets are welcome in outdoor public areas on a lead. Policies vary by hotel and restaurant, so check with each venue before you visit."],
  ["Is there Wi-Fi across the destination?", "Free Wi-Fi is available in Marina Village and the main public areas. Hotels and residences have their own networks."],
  ["How do I get from Aqaba Airport to Ayla?", "King Hussein International Airport is about 15 minutes away by car. Taxis wait at the terminal, and most hotels can arrange transfers."],
  ["Where can I park?", "Public parking is available next to Marina Village and the beach. The interactive map above shows every car park across the destination."],
]

export default function PlanVisitPage() {
  useEffect(() => planVisit(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp">
        <section className="pv-hero" id="pv-hero" data-screen-label="Plan your visit hero">
          <video src="/assets/pv/hero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
          <div className="pv-tint" />
          <div className="pv-hin">
            <h1><span className="nw-l"><span className="lr">Plan your</span></span><span className="nw-l"><span className="lr"><em className="sw-serif">visit</em></span></span></h1>
            <ol className="pv-toc rv-up" aria-label="On this page">
              {toc.map(([h, t], i) => <li key={h}><a href={h}><small>0{i + 1}</small>{t}<ArrowDownRight aria-hidden="true" /></a></li>)}
            </ol>
          </div>
        </section>

        <section className="pv-exp" id="pv-explore" data-screen-label="Explore Ayla">
          <div className="pv-eimg" data-par=""><img src="/assets/whats-on/offer-1.jpg" alt="Aerial overview of Ayla" /></div>
          <div className="pv-etext">
            <h2 className="vp-h2 vp-rv" style={D(1)}>Explore <em className="sw-serif">Ayla</em></h2>
            <p className="vp-rv" style={D(2)}>A guided tour of everything Ayla offers — from our neighborhoods and beaches to the marina, golf course, and residential communities. Get the full picture before you arrive.</p>
            <a className="vp-btn vp-rv" style={D(3)} href="#">Receive customized itinerary<b><ArrowUpRight aria-hidden="true" /></b></a>
          </div>
        </section>

        <div className="pv-facts vp-rv" data-screen-label="Key facts">
          <div className="pv-f"><small>Location</small><strong>Aqaba, Jordan</strong><span>Red Sea coast</span></div>
          <div className="pv-f"><small>Best time</small><strong>Oct – Apr</strong><span>Cooler, dry season</span></div>
          <div className="pv-f"><small>Getting here</small><strong><span id="pv-cnt" style={{ font: "inherit", color: "inherit" }}>15</span> min</strong><span>From King Hussein Int’l Airport</span></div>
          <div className="pv-f"><small>Languages</small><strong>AR · EN</strong><span>Spoken across the destination</span></div>
        </div>

        <section className="pv-map" id="pv-map" data-screen-label="Interactive map">
          <div className="pv-mhead">
            <div><h2 className="vp-h2 vp-rv" style={D(1)}>Interactive <em className="sw-serif">map</em></h2></div>
            <p className="vp-rv" style={D(2)}>A visual guide to the destination. Explore hotels, restaurants, activities, retail, parking and pedestrian routes across the entire Ayla waterfront.</p>
          </div>
          <div className="pv-mapbox vp-rv">
            <div className="pv-mapin" id="pv-mapin">
              <img src="/assets/pv/map.jpg" alt="Illustrated map of the Ayla waterfront" />
              {pins.map(([c, n, x, y, dl, Icon]) => (
                <div key={n} className="pv-pin" data-c={c} style={{ ["--x" as string]: x + "%", ["--y" as string]: y + "%", ["--dl" as string]: dl } as React.CSSProperties}>
                  <button aria-label={n} data-x={x} data-y={y}><Icon aria-hidden="true" /></button>
                  <span className="pv-tip">{n}<small>{c}</small></span>
                </div>
              ))}
            </div>
            <div className="pv-mcard">
              <div><div className="pv-lab" style={{ marginBottom: 16, fontWeight: 700 }}>Show on map</div>
                <div className="vp-chips" id="pv-mf" style={{ marginBottom: 10 }}>
                  {chips.map((k, i) => <button key={k} className="vp-chip" aria-pressed={i === 0} data-k={k}>{k}</button>)}
                </div></div>
              <div className="pv-ct" style={{ marginBottom: 11 }}><div className="pv-lab" style={{ fontWeight: 700 }}>Contact</div><a href="tel:+96232094000">Tel: +962 3 209 4000</a><span>Fax: +962 3 209 4217</span><a href="mailto:info@ayla.com.jo">info@ayla.com.jo</a></div>
              <div className="pv-ct"><div className="pv-lab" style={{ fontWeight: 700 }}>Address</div><span>Al Farouq Street<br />Al Nakheel Area – Aqaba<br />P.O.Box: 2303 Aqaba 77110 Jordan</span></div>
              <a className="vp-btn" href="https://maps.google.com/?q=Ayla+Aqaba" target="_blank" rel="noopener">Get directions<b><ArrowUpRight aria-hidden="true" /></b></a>
            </div>
            <div className="pv-zoom"><button id="pv-zin" aria-label="Zoom in"><Plus aria-hidden="true" /></button><button id="pv-zout" aria-label="Zoom out"><Minus aria-hidden="true" /></button></div>
          </div>
        </section>

        <section className="pv-sus" id="pv-sus" data-screen-label="Sustainability">
          <div className="pv-trail" id="pv-trail" aria-hidden="true" />
          <div className="pv-sin">
            <h2 className="vp-h2">Sustainability</h2>
            <p className="pv-st" id="pv-st">{sus.map((w, i) => <span key={i}><span className="pv-sw">{w}</span>{" "}</span>)}</p>
            <div className="pv-tags"><span>Environment</span><span>Community</span><span>Blue Flag</span><span>Design</span></div>
            <a className="vp-btn" href="#">Read our commitments<b><ArrowUpRight aria-hidden="true" /></b></a>
          </div>
        </section>

        <section className="pv-faq" id="pv-faq" data-screen-label="FAQ">
          <div className="pv-fl"><div><h2 className="vp-h2 vp-rv" style={D(1)}>Frequently <em className="sw-serif">asked</em></h2></div></div>
          <div className="pv-fr">
            {faq.map(([q, a], i) => (
              <div key={q} className={"pv-qi vp-rv" + (i === 0 ? " open" : "")} style={D(i)}>
                <button className="pv-qb" aria-expanded={i === 0} aria-controls={"pv-a" + i}><small>0{i + 1}</small><strong>{q}</strong><span className="pv-qx" aria-hidden="true" /></button>
                <div className="pv-qa" id={"pv-a" + i} role="region"><div><p>{a}</p></div></div>
              </div>
            ))}
          </div>
        </section>

        <AwardsShowcase />

        <section className="ex" data-screen-label="While you explore">
          <div className="ex-head"><h2 className="vp-h2 vp-rv">While you explore at <em className="sw-serif">Ayla</em></h2></div>
          <div className="ex-row vp-rv" style={D(1)}>
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
