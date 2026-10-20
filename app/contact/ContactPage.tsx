"use client"
import { useEffect } from "react"
import { Phone, Mail, MapPin, ChevronDown, CircleCheck, CircleAlert, ArrowUpRight, Navigation, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Footer from "../components/Footer"
import contact from "../../lib/effects/contact"
import "./contact.css"

const ff = "'F37 Ginger','Urbanist',system-ui,sans-serif"
const nav = ["Stay", "Play", "Live", "Dine", "Marina Village", "Wedding & Events", "What's On", "Plan your visit"]
const blur = [[2, 100], [4, 85], [8, 70], [16, 55], [32, 40]]
const routes = [
  ["/assets/0eedfcae95800cf90c8e055d017aac34.png", "Book a hotel room", "Stay"],
  ["/assets/c4a023d5c6e76ebbeba11c362135d2e9.png", "Book a viewing", "Live"],
  ["/assets/4832270e23473a056a719250ca0b381a.png", "Reserve a berth", "Marina berth enquiry"],
  ["/assets/2882b24b799ca7a4515f17d6e845880f.png", "Book a tee time", "Golf"],
  ["/assets/whatson-fire.png", "Plan an event", "Wedding & Events"],
]
const X = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5Z" /></svg>

export default function ContactPage() {
  useEffect(() => { contact() }, [])
  return (
    <div className="c2-root">
      <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
        <div id="hdr" className="c2-hdr">
          <div className="gblur" aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 150, pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--tint)" }} />
            {blur.map(([b, m]) => (
              <div key={b} style={{ position: "absolute", inset: 0, backdropFilter: `blur(${b}px)`, WebkitBackdropFilter: `blur(${b}px)`, WebkitMaskImage: `linear-gradient(to bottom,#000 0%,transparent ${m}%)`, maskImage: `linear-gradient(to bottom,#000 0%,transparent ${m}%)` }} />
            ))}
          </div>
          <nav aria-label="Main" style={{ position: "absolute", left: 40, right: 40, top: 28, height: 48, zIndex: 5, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", color: "#fff" }}>
            <a href="/" aria-label="Ayla home" style={{ display: "block", width: 132, height: 48 }}>
              <svg width="132" height="48" viewBox="0 0 169.262 61.396" fill="#ffffff" role="img" aria-label="Ayla logo"><path fill="#ffffff" d="M80.807 19.016c-5.014 7.19-18.54 17.029-23.458 17.029-2.177 0-2.177-1.704-2.177-6.245 0-2.079 0-5.296-.378-6.05a18.65 18.65 0 00-5.718-3.993c-.499-.252-1.404.005-1.345.622.197 2.044.252 6.293.252 16.895 0 3.782.19 4.92 1.609 6.717 2.648 3.594 5.39 4.73 8.796 4.73a21.522 21.522 0 0012.297-4.352 51.15 51.15 0 008.89-7.377c0 3.213 0 7.19-2.175 10.783-3.407 5.391-9.14 5.946-14.248 5.946-5.652 0-9.237-.75-11.202-1.89a.493.493 0 00-.742.498c1.001 4.74 4.66 9.067 16.545 9.067 9.836 0 14.756-3.878 16.836-7.948 2.27-4.254 2.744-7.946 2.744-23.93 0-2.558 0-5.581-6.526-10.502" /><path fill="#ffffff" d="M16.816 19.21c-4.164 0-10.598 5.677-15.325 11.353a13.8 13.8 0 013.024-.38c7.569 0 11.165 1.892 27.346 14.855 1.197.943 3.518 2.906 4.684 3.767.895.662 1.316.654 1.736.445a29.823 29.823 0 005.732-4.487c.118-.123.287-.357.177-.571a192.945 192.945 0 00-13.086-14.67C21.262 19.495 18.991 19.21 16.816 19.21" /><path fill="#ffffff" d="M7.63 35.21C4.9 34.93.568 35.436.027 40.71c-.394 3.86 3.692 7.613 10.185 8.278 6.498.668 7.47-4.182 7.589-5.312.559-5.465-6.309-8.073-10.17-8.468" /><path fill="#ffffff" d="M141.852 19.21c-4.164 0-10.597 5.677-15.329 11.353a13.848 13.848 0 013.027-.38c7.57 0 11.168 1.892 27.347 14.855 1.196.943 3.52 2.906 4.685 3.767.893.662 1.315.654 1.735.445a29.816 29.816 0 005.732-4.487c.118-.123.288-.357.177-.571a192.79 192.79 0 00-13.088-14.67c-9.84-10.027-12.111-10.313-14.286-10.313" /><path fill="#ffffff" d="M132.992 35.21c-2.73-.28-7.062.226-7.603 5.501-.395 3.86 3.691 7.613 10.186 8.278 6.497.668 7.47-4.182 7.588-5.312.558-5.465-6.31-8.073-10.171-8.468" /><path fill="#ffffff" d="M106.836 36.142c-2.094.046-4.8-.824-4.841-1.77-.045-1.068.453-2.156.97-4.437.503-2.218 1.033-4.5 1.172-5.152 1.135-4.92 2.746-11.73 2.746-15.04 0-6.245-9.179-8.23-13.912-9.743a194.915 194.915 0 011.23 22.322c0 2.366-.661 14.19-.661 16.837 0 .609.013 1.19.069 1.75a5.145 5.145 0 001.727 3.64c2.368 1.989 10.695 4.826 14.857 4.826 3.029 0 4.733-1.324 6.625-4.826a113.3 113.3 0 003.974-11.459c-3.669 1.145-10.324 3.184-13.956 3.052" /></svg>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {nav.map(n => <a key={n} href="#" style={{ color: "inherit", textDecoration: "none", fontSize: 15, fontWeight: 500, whiteSpace: "nowrap" }}>{n}</a>)}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 24 }}>
              <span style={{ fontSize: 15, fontWeight: 500, whiteSpace: "nowrap" }}>EN / AR</span>
              <button aria-label="Search" style={{ width: 32, height: 32, padding: 0, border: 0, background: "transparent", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7" /><path d="M16 16l5 5" /></svg>
              </button>
            </div>
          </nav>
        </div>

        <section className="c2-hero" data-screen-label="Contact hero" style={{ height: 471 }}>
          <div className="c2-hin"><h1>Contact <em className="sw-serif">us</em></h1><p>For bookings and enquiries, complete the form or reach us directly.</p></div>
        </section>

        <section className="c2-direct" aria-label="Reach us directly" data-screen-label="Direct contact">
          <a className="c2-dc" href="tel:+96232094000"><span className="c2-k">Tel<Phone aria-hidden="true" /></span><strong>+962 3 209 4000</strong><small>Fax +962 3 209 4217</small></a>
          <a className="c2-dc" href="mailto:info@ayla.com.jo"><span className="c2-k">Email<Mail aria-hidden="true" /></span><strong>info@ayla.com.jo</strong><small>We reply within one working day</small></a>
          <a className="c2-dc" href="#find-us"><span className="c2-k">Address<MapPin aria-hidden="true" /></span><strong>Al Farouq Street, Aqaba</strong><small>Al Nakheel Area, P.O. Box 2303, 77110 Jordan</small></a>
        </section>

        <section className="c2-form" aria-labelledby="ge-h" data-screen-label="General enquiry">
          <div className="c2-stage"><img className="c2-bg" src="/assets/4832270e23473a056a719250ca0b381a.png" alt="" aria-hidden="true" />
            <div className="c2-win"><div className="c2-bar"><h2 id="ge-h">General enquiry</h2><span>New message</span></div>
              <form id="c2-form" noValidate>
                <div className="c2-ln c2-sel"><label className="sw-sr" htmlFor="f-type">Enquiry type</label>
                  <select id="f-type" defaultValue=""><option value="" disabled>Enquiry type</option><option>General</option><option>Stay</option><option>Live</option><option>Marina berth</option><option>Golf</option><option>Wedding &amp; Events</option></select>
                  <ChevronDown aria-hidden="true" /></div>
                <div className="c2-ln c2-half"><label className="sw-sr" htmlFor="f-first">First name</label><input id="f-first" placeholder="First name" required autoComplete="given-name" /></div>
                <div className="c2-ln c2-half"><label className="sw-sr" htmlFor="f-last">Last name</label><input id="f-last" placeholder="Last name" required autoComplete="family-name" /></div>
                <div className="c2-ln c2-half"><label className="sw-sr" htmlFor="f-phone">Phone</label><input id="f-phone" placeholder="Phone" type="tel" autoComplete="tel" /></div>
                <div className="c2-ln c2-half"><label className="sw-sr" htmlFor="f-email">Email</label><input id="f-email" placeholder="Email" type="email" required autoComplete="email" /></div>
                <div className="c2-ln c2-msgf"><label className="sw-sr" htmlFor="f-msg">Message</label><textarea id="f-msg" placeholder="Message" required rows={5} /></div>
                <label className="ayla-check c2-agree"><input id="f-agree" type="checkbox" /><span>I agree to the <a href="#">privacy policy</a>.</span></label>
                <button type="submit" className="c2-send">Send message</button>
                <div id="c2-ok" className="c2-msg" role="status" hidden><CircleCheck aria-hidden="true" /><span>Thank you. Your message has been sent and our team will reply shortly.</span></div>
                <div id="c2-err" className="c2-msg c2-err" role="alert" hidden><CircleAlert aria-hidden="true" /><span>Please complete the highlighted fields and accept the privacy policy.</span></div>
              </form></div></div>
        </section>

        <section className="c2-routes" aria-labelledby="qr-h" data-screen-label="Quick routes"><h2 id="qr-h">Quick routes</h2>
          <div id="bc" className="bounce-cards" role="list" aria-label="Quick routes">
            {routes.map(([img, t, k]) => (
              <a key={t} href="#" className="bounce-cards__card" role="listitem"><img src={img} alt="" draggable={false} /><span className="bc-cap"><strong>{t}</strong><small>{k}<ArrowUpRight aria-hidden="true" /></small></span></a>
            ))}
          </div>
        </section>

        <section id="find-us" className="c2-map" aria-labelledby="map-h" data-screen-label="Map">
          <iframe title="Map showing Ayla Oasis, Aqaba, Jordan" src="https://maps.google.com/maps?q=Ayla%20Oasis%20Aqaba%20Jordan&z=14&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="c2-pin"><span className="c2-k">Ayla Oasis</span><h2 id="map-h">Find us</h2><address>Al Farouq Street, Al Nakheel Area, Aqaba, P.O. Box 2303, 77110 Jordan</address>
            <div className="c2-btns"><a className="c2-b c2-b1" href="https://www.google.com/maps/dir/?api=1&destination=Ayla+Oasis+Aqaba" target="_blank" rel="noopener"><Navigation aria-hidden="true" />Get directions</a><a className="c2-b c2-b2" href="#">Plan your visit</a></div>
            <div className="c2-soc"><span className="c2-k">Follow us</span>
              <ul aria-label="Social media">
                <li><a href="#" aria-label="Facebook"><Facebook aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="X">{X}</a></li>
                <li><a href="#" aria-label="Instagram"><Instagram aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="YouTube"><Youtube aria-hidden="true" /></a></li>
              </ul></div></div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
