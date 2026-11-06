"use client"
import { useEffect } from "react"
import { Phone, Mail, MapPin, ChevronDown, CircleCheck, CircleAlert, ArrowUpRight, Navigation, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Footer from "../components/Footer"
import SiteHeader from "../components/SiteHeader"
import SocialFeed from "../components/SocialFeed"
import contact from "../../lib/effects/contact"
import "./contact.css"

const ff = "'F37 Ginger','Urbanist',system-ui,sans-serif"
const hrefs: Record<string, string> = { "Play": "/play", "Live": "/live", "Wedding & Events": "/weddings-events", "Stay": "/stay", "Dine": "/dine", "Marina Village": "/marina-village", "What's On": "/whats-on", "Plan your visit": "/plan-your-visit" }
const nav = ["Stay", "Play", "Live", "Dine", "Marina Village", "Wedding & Events", "What's On", "Plan your visit"]
const blur = [[2, 100], [4, 85], [8, 70], [16, 55], [32, 40]]
const routes = [
  ["/assets/0eedfcae95800cf90c8e055d017aac34.jpg", "Book a hotel room", "Stay"],
  ["/assets/c4a023d5c6e76ebbeba11c362135d2e9.jpg", "Book a viewing", "Live"],
  ["/assets/4832270e23473a056a719250ca0b381a.jpg", "Reserve a berth", "Marina berth enquiry"],
  ["/assets/golf-tee.jpg", "Book a tee time", "Golf"],
  ["/assets/whatson-fire.png", "Plan an event", "Wedding & Events"],
]
const X = <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5Z" /></svg>

export default function ContactPage() {
  useEffect(() => { contact() }, [])
  return (
    <div className="c2-root">
      <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
        <SiteHeader />

        <section className="c2-hero" data-screen-label="Contact hero" style={{ height: 471 }}>
          <div className="c2-hin"><h1>Contact <em className="sw-serif">us</em></h1><p>For bookings and enquiries, complete the form or reach us directly.</p></div>
        </section>

        <section className="c2-direct" aria-label="Reach us directly" data-screen-label="Direct contact">
          <a className="c2-dc" href="tel:+96232094000"><span className="c2-k">Tel<Phone aria-hidden="true" /></span><strong>+962 3 209 4000</strong><small>Fax +962 3 209 4217</small></a>
          <a className="c2-dc" href="mailto:info@ayla.com.jo"><span className="c2-k">Email<Mail aria-hidden="true" /></span><strong>info@ayla.com.jo</strong><small>We reply within one working day</small></a>
          <a className="c2-dc" href="#find-us"><span className="c2-k">Address<MapPin aria-hidden="true" /></span><strong>Al Farouq Street, Aqaba</strong><small>Al Nakheel Area, P.O. Box 2303, 77110 Jordan</small></a>
        </section>

        <section className="c2-form" aria-labelledby="ge-h" data-screen-label="General enquiry">
          <div className="c2-stage"><img className="c2-bg" src="/assets/4832270e23473a056a719250ca0b381a.jpg" alt="" aria-hidden="true" />
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
            <div className="c2-btns"><a className="c2-b c2-b1" href="https://www.google.com/maps/dir/?api=1&destination=Ayla+Oasis+Aqaba" target="_blank" rel="noopener"><Navigation aria-hidden="true" />Get directions</a><a className="c2-b c2-b2" href="/plan-your-visit">Plan your visit</a></div>
            <div className="c2-soc"><span className="c2-k">Follow us</span>
              <ul aria-label="Social media">
                <li><a href="#" aria-label="Facebook"><Facebook aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="X">{X}</a></li>
                <li><a href="#" aria-label="Instagram"><Instagram aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a></li>
                <li><a href="#" aria-label="YouTube"><Youtube aria-hidden="true" /></a></li>
              </ul></div></div>
        </section>

        <SocialFeed />
        <Footer />
      </div>
    </div>
  )
}
