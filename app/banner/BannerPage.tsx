"use client"
import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import detail from "../../lib/effects/detail"
import "../detail/detail.css"
import "./banner.css"

const awards = [
  ["/assets/awards/award-1.png", "BUILD Architecture Awards 2026 — Winner"],
  ["/assets/awards/award-2.png", "BUILD Design & Build Awards 2026 — Winner"],
  ["/assets/awards/award-3.png", "Sustainable Smart Marina"],
  ["/assets/awards/award-4.png", "Marina Awards 2026"],
]

function AwardsStrip() {
  return (
    <section className="bn-aw" aria-label="Awards" data-screen-label="Awards">
      <p className="bn-awl">Awards</p>
      <div className="bn-awv">
        <ul className="bn-awt">
          {[0, 1, 2, 3, 4, 5].flatMap(r => awards.map(([src, alt]) => (
            <li key={r + src} aria-hidden={r > 0 ? true : undefined}><img src={src} alt={r === 0 ? alt : ""} draggable={false} /></li>
          )))}
        </ul>
      </div>
    </section>
  )
}

function Tag({ n, t }: { n: string; t: string }) {
  return <div className="bn-tag"><b>{n}</b><span>{t}</span></div>
}

export default function BannerPage() {
  useEffect(() => detail(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp" data-pg="banner">

        <section className="bn bn-a" data-screen-label="Banner option 1">
          <img src="/assets/marina/mb-3.jpg" alt="" />
          <div className="bn-c">
            <h1><span>Marina</span><em className="sw-serif">Village</em></h1>
            <div className="bn-s"><p>Waterfront dining, shops and cafés along the Ayla Marina boardwalk.</p><a className="vp-btn py-w" href="#">Explore<b><ArrowRight aria-hidden="true" /></b></a></div>
          </div>
        </section>
        <Tag n="Option 1" t="Bottom gradient, title left" />
        <AwardsStrip />

        <section className="bn bn-b" data-screen-label="Banner option 2">
          <img src="/assets/golf/gc-panorama.jpg" alt="" />
          <div className="bn-c">
            <h1><span>Ayla</span><em className="sw-serif">Golf Club</em></h1>
            <p>A Greg Norman championship course, floodlit academy and clubhouse life on the Red Sea.</p>
            <a className="vp-btn py-w" href="#">Book a tee time<b><ArrowRight aria-hidden="true" /></b></a>
          </div>
        </section>
        <Tag n="Option 2" t="Full tint, centred" />
        <AwardsStrip />

        <section className="bn bn-c3" data-screen-label="Banner option 3">
          <img src="/assets/mama/mg-4.jpg" alt="" />
          <div className="bn-c">
            <h1><span>Mama Gaia</span><em className="sw-serif">Beach Club</em></h1>
            <div className="bn-s"><p>Sardinian–Jordanian cuisine, poolside cabanas and nights at OUM.</p><a className="vp-btn py-w" href="#">Reserve<b><ArrowRight aria-hidden="true" /></b></a></div>
          </div>
        </section>
        <Tag n="Option 3" t="Side scrim, text right" />
        <AwardsStrip />

      </main>
      <Footer />
      <div className="vp-toast" id="vp-toast" role="status" />
    </div>
  )
}
