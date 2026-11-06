"use client"
import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, Award } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import detail from "../../lib/effects/detail"
import "../detail/detail.css"

export default function BeachClubsPage() {
  useEffect(() => detail(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp" data-pg="beach-clubs">


<section className="mv-hero st-hero x-hero" data-screen-label="Hero"><video data-par src="/assets/v/v-oasis.mp4" poster="/assets/4832270e23473a056a719250ca0b381a.jpg" autoPlay muted loop playsInline aria-hidden="true"></video>
<div className="mv-hc"><h1 className="mv-h1"><span className="mv-w"><span style={{ "--i": "0" } as React.CSSProperties}>Sun, Sea &amp;</span></span><span className="mv-w"><span style={{ "--i": "1" } as React.CSSProperties}><em className="sw-serif">Sand</em></span></span></h1></div>
<div className="x-hside"><p>Sun, sand and beach vibes for the whole family.</p></div>
<span className="mv-cue" aria-hidden="true">Scroll</span></section>

<section className="x-sec bq-hd" data-screen-label="Intro"><div className="x-hd" style={{ margin: "0" }}><div><h2 className="vp-h2 vp-rv bq-nt">Three beach clubs, <em className="sw-serif">one shoreline</em></h2></div></div></section>
<section className="bq-st" id="clubs" data-screen-label="Beach clubs"><article className="bq-p"><img className="bq-bg" src="/assets/4832270e23473a056a719250ca0b381a.jpg" alt="" loading="lazy" /><div className="bq-cd"><div className="bq-im"><img src="/assets/4832270e23473a056a719250ca0b381a.jpg" alt="" loading="lazy" /></div><div className="bq-cp"><h2 className="vp-h2">Mama Gaia <em className="sw-serif">Beach Club</em></h2><ul className="dq-chips"><li>Tue–Sun 12:00 PM–11:00 PM</li><li>Closed Mondays</li></ul><p>A premium beach club serving Sardinian–Jordanian fusion cuisine and signature cocktails. Lounge poolside in a misted cabana, or dance the night away at OUM nightclub with panoramic Red Sea views.</p><ul className="bq-aw"><li><Award aria-hidden="true" /><span><small>Tripadvisor</small>Travellers&rsquo; Choice</span></li></ul><div className="st-btns"><a className="vp-btn" href="https://wa.me/962791911917">Reserve via WhatsApp<b><svg className="wa-i" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" /></svg></b></a><a className="st-ghost" href="tel:+962791911917">Call +962 7 9191 1917</a></div></div></div></article>
<article className="bq-p"><img className="bq-bg" src="/assets/2882b24b799ca7a4515f17d6e845880f.jpg" alt="" loading="lazy" /><div className="bq-cd"><div className="bq-im"><img src="/assets/2882b24b799ca7a4515f17d6e845880f.jpg" alt="" loading="lazy" /></div><div className="bq-cp"><h2 className="vp-h2">B12 <em className="sw-serif">Beach Club</em></h2><ul className="dq-chips"><li>10:00 AM–Sunset</li></ul><p>Aqaba’s “it” beach: all-day dining, great drinks, hammocks for a quiet nap, and activities to keep the whole family entertained.</p><ul className="bq-aw"><li><Award aria-hidden="true" /><span><small>Tripadvisor</small>Travellers&rsquo; Choice</span></li></ul><div className="st-btns"><a className="vp-btn" href="#">Explore<b><ArrowRight aria-hidden="true" /></b></a></div></div></div></article>
<article className="bq-p"><img className="bq-bg" src="/assets/dt/mv-marina-3.jpg" alt="" loading="lazy" /><div className="bq-cd"><div className="bq-im"><img src="/assets/dt/mv-marina-3.jpg" alt="" loading="lazy" /></div><div className="bq-cp"><h2 className="vp-h2">La Plage <em className="sw-serif">Beach Club</em></h2><ul className="dq-chips"><li>8:30 AM–Sunset</li><li>At Hyatt Regency Aqaba Ayla</li></ul><p>Relax and socialize at the heart of Hyatt Regency Aqaba Ayla, with volleyball and water inflatables enjoyable for all ages.</p><div className="st-btns"><a className="vp-btn" href="/hyatt-regency">Explore<b><ArrowRight aria-hidden="true" /></b></a></div></div></div></article>
</section>

<section className="dn-cross lw-fp" data-screen-label="Dining and bars"><video src="/assets/v/v-duo.mp4" autoPlay muted loop playsInline aria-hidden="true"></video>
<div className="dn-crin"><h2 className="vp-h2 vp-rv">Dining <em className="sw-serif">and bars</em></h2><a className="vp-btn" href="/dine">Explore<b><ArrowRight aria-hidden="true" /></b></a></div></section>

<section className="ex dn-wd" data-screen-label="While you explore"><div className="ex-head"><h2 className="vp-h2 vp-rv">While you <em className="sw-serif">explore</em></h2></div>
<div className="ex-row vp-rv" style={{ "--d": "1" } as React.CSSProperties}>
<a className="ex-p" href="/live"><img src="/assets/dt/mv-marina-3.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>01</small><h3>Invest in Ayla</h3><p>Freehold residences within the Ayla Oasis community.</p></div></a>
<a className="ex-p" href="/marina-village"><img src="/assets/dt/mv-marina-1.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>02</small><h3>Marina Village</h3><p>Berths, boardwalk shops and waterfront dining in one stretch.</p></div></a>
<a className="ex-p" href="/whats-on"><img src="/assets/dt/whatson-fire.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>03</small><h3>Wedding &amp; Events</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
</div></section>


</main>
      <Footer />
      <div className="vp-toast" id="vp-toast" role="status" />
    </div>
  )
}
