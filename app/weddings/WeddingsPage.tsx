"use client"
import { useEffect } from "react"
import { Anchor, ArrowRight, ArrowUpRight, Flower2, Mail, Phone, Sparkles, Waves } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import detail from "../../lib/effects/detail"
import "../detail/detail.css"

export default function WeddingsPage() {
  useEffect(() => detail(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp" data-pg="weddings">


<section className="mv-hero st-hero x-hero wd-hero" data-screen-label="Hero"><video data-par src="/assets/v/v-oasis.mp4" poster="/assets/2882b24b799ca7a4515f17d6e845880f.jpg" autoPlay muted loop playsInline aria-hidden="true"></video>
<div className="mv-hc"><h1 className="mv-h1"><span className="mv-w"><span style={{ "--i": "0" } as React.CSSProperties}>Your Wedding,</span></span><span className="mv-w"><span style={{ "--i": "1" } as React.CSSProperties}><em className="sw-serif">by the Red Sea</em></span></span></h1></div>
<div className="x-hside"><p>Beachfront, marina or garden, a wedding built around your story.</p><div className="x-hbtns"><a className="vp-btn py-w" href="#enquire" data-go="enquire">Book your venue<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost py-gw" href="tel:+96232094000"><Phone aria-hidden="true" />Call</a></div></div>
<span className="mv-cue" aria-hidden="true">Scroll</span></section>

<section className="mv-intro st-intro x-intro" data-screen-label="Intro"><p className="pv-st"><span className="pv-sw">A</span> <span className="pv-sw">wedding</span> <span className="pv-sw">at</span> <span className="pv-sw">Ayla</span> <span className="pv-sw">is</span> <span className="pv-sw">built</span> <span className="pv-sw">around</span> <span className="pv-sw">your</span> <span className="pv-sw">story:</span> <span className="pv-sw">the</span> <span className="pv-sw sw-serif">venue,</span> <span className="pv-sw">the</span> <span className="pv-sw sw-serif">menu,</span> <span className="pv-sw">the</span> <span className="pv-sw sw-serif">light</span> <span className="pv-sw">at</span> <span className="pv-sw">golden</span> <span className="pv-sw">hour.</span> <span className="pv-sw">From</span> <span className="pv-sw">first</span> <span className="pv-sw">enquiry</span> <span className="pv-sw">to</span> <span className="pv-sw">last</span> <span className="pv-sw">dance.</span></p></section>

<section className="mr-nums" data-screen-label="At a glance"><div className="mr-row vp-rv"><span className="x-n" data-count="6">6</span><div><b>Wedding venues</b><small>Beachfront, marina, garden and ballroom</small></div></div><div className="mr-row vp-rv"><span className="x-n" data-count="350">350</span><div><b>Max guests</b><small>In our largest venue</small></div></div><div className="mr-row vp-rv"><span className="x-n" data-count="1">1</span><div><b>Dedicated planner</b><small>From first enquiry to last dance</small></div></div><div className="mr-row vp-rv"><span className="x-n ew-plus" data-count="12">12</span><div><b>Years hosting weddings</b><small></small></div></div></section>

<section className="hy-am" id="venues" data-screen-label="Venues"><div className="x-hd" style={{ marginBottom: "0" }}><div><h2 className="vp-h2 vp-rv">Venues &amp; <em className="sw-serif">capacities</em></h2></div></div>
<div className="hy-am-in"><div className="ew-vl"><p className="ew-lead">Compare every wedding venue side by side and shortlist the space that fits your day.</p><ul className="hy-aml"><li><button type="button" className="hy-ar" data-name="Beachfront"><small>01</small><span>Beachfront<i className="ew-cap">Up to 350 guests</i></span><Waves aria-hidden="true" /></button></li><li><button type="button" className="hy-ar" data-name="Marina"><small>02</small><span>Marina<i className="ew-cap">Up to 200 guests</i></span><Anchor aria-hidden="true" /></button></li><li><button type="button" className="hy-ar" data-name="Garden"><small>03</small><span>Garden<i className="ew-cap">Up to 120 guests</i></span><Flower2 aria-hidden="true" /></button></li><li><button type="button" className="hy-ar" data-name="Ballroom"><small>04</small><span>Ballroom<i className="ew-cap">Up to 300 guests</i></span><Sparkles aria-hidden="true" /></button></li></ul><div className="mr-btns"><a className="vp-btn py-w" href="#enquire" data-go="enquire">Book your venue<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost py-gw" href="#">Download brochure</a></div></div><div className="hy-amm"><img src="/assets/4832270e23473a056a719250ca0b381a.jpg" alt="" loading="lazy" /><img src="/assets/dt/dine-slide-1.jpg" alt="" loading="lazy" /><img src="/assets/2882b24b799ca7a4515f17d6e845880f.jpg" alt="" loading="lazy" /><img src="/assets/dt/mv-marina-2.jpg" alt="" loading="lazy" /><div className="hy-amc"><b>Beachfront</b><span>01 / 04</span></div></div></div></section>

<section className="wd-fs" id="weddings" data-screen-label="Weddings and catering"><article className="wd-fe"><div className="wd-fi vp-ri"><img src="/assets/0eedfcae95800cf90c8e055d017aac34.jpg" alt="" loading="lazy" /></div><div className="wd-ft vp-rv"><h2 className="vp-h2">Weddings @ <em className="sw-serif">Ayla</em></h2><ul className="dq-chips"><li>Real weddings</li><li>Styling</li><li>Day-of timeline</li></ul><p>A look at what a wedding day at Ayla actually feels like: real timelines, styling directions and the moments our couples remember most.</p><div className="st-btns"><a className="vp-btn" href="#enquire" data-go="enquire">Book your venue<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost" href="tel:+96232094000"><Phone aria-hidden="true" />Call</a></div></div></article>
<article className="wd-fe rev"><div className="wd-fi vp-ri"><img src="/assets/c4a023d5c6e76ebbeba11c362135d2e9.jpg" alt="" loading="lazy" /></div><div className="wd-ft vp-rv"><h2 className="vp-h2"><em className="sw-serif">Catering</em></h2><ul className="dq-chips"><li>Custom menus</li><li>Tastings</li><li>Dietary options</li></ul><p>Bespoke wedding menus from Ayla's executive chefs, from plated dinners to Red Sea-inspired tasting stations, with tastings arranged ahead of your day.</p><div className="st-btns"><a className="vp-btn" href="#enquire" data-go="enquire">Enquire now<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost" href="#">Download brochure</a></div></div></article>
</section>

<section className="az-gal" data-screen-label="Gallery"><div className="az-pin"><div className="az-gh"><h2 className="vp-h2">Wedding <em className="sw-serif">gallery</em></h2></div><div className="az-gt"><figure className="az-gf"><div className="az-gi" style={{ width: "700px", height: "440px" }}><img src="/assets/4832270e23473a056a719250ca0b381a.jpg" alt="" loading="lazy" /></div><figcaption><span>Beachfront ceremony</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "420px", height: "330px" }}><img src="/assets/dt/dine-slide-1.jpg" alt="" loading="lazy" /></div><figcaption><span>Marina reception</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "400px", height: "440px" }}><img src="/assets/2882b24b799ca7a4515f17d6e845880f.jpg" alt="" loading="lazy" /></div><figcaption><span>Garden vows</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "640px", height: "320px" }}><img src="/assets/c4a023d5c6e76ebbeba11c362135d2e9.jpg" alt="" loading="lazy" /></div><figcaption><span>Ballroom reception</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "380px", height: "440px" }}><img src="/assets/0eedfcae95800cf90c8e055d017aac34.jpg" alt="" loading="lazy" /></div><figcaption><span>Golden hour</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "560px", height: "360px" }}><img src="/assets/dt/mv-marina-3.jpg" alt="" loading="lazy" /></div><figcaption><span>Aerial of the venues</span></figcaption></figure></div><div className="az-gp"><i></i></div></div></section>

<section className="x-stagewrap" id="enquire" data-screen-label="Enquire"><div className="c2-stage x-stage"><img className="c2-bg" src="/assets/dt/dine-slide-1.jpg" alt="" loading="lazy" />
<div className="x-sl"><h2 className="vp-h2 vp-rv">Book your <em className="sw-serif">venue</em></h2><p className="vp-rv" style={{ "--d": "1" } as React.CSSProperties}>Tell us your preferred setting and date. Your dedicated wedding planner will reply with availability, capacities and a tailored proposal.</p>
<a className="x-line" href="tel:+96232094000"><Phone aria-hidden="true" />+962 3 209 4000</a><a className="x-line" href="mailto:info@ayla.com.jo"><Mail aria-hidden="true" />info@ayla.com.jo</a></div>
<div className="c2-win vp-rv" style={{ "--d": "2" } as React.CSSProperties}><div className="c2-bar"><h2>Enquire now</h2><span>All fields required</span></div>
<form data-f noValidate>
<label className="c2-ln c2-half"><span className="c2-lb">Name</span><input type="text" required autoComplete="name" /></label>
<label className="c2-ln c2-half"><span className="c2-lb">Email</span><input type="email" required autoComplete="email" /></label>
<label className="c2-ln c2-half"><span className="c2-lb">Phone</span><input type="tel" required autoComplete="tel" /></label>
<label className="c2-ln c2-half c2-sel"><span className="c2-lb">Venue</span><select id="wd-venue"><option>Beachfront</option><option>Marina</option><option>Garden</option><option>Ballroom</option></select><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></label>
<p className="c2-agree">By submitting you agree to our <a href="#">Privacy policy</a>.</p>
<div className="c2-act"><button className="vp-btn" type="submit">Submit enquiry</button></div>
<div className="c2-msg" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Thank you. Your enquiry has been sent and the Ayla team will be in touch.</div>
</form></div></div></section>

<section className="dn-cross lw-fp" data-screen-label="Events"><video src="/assets/v/v-duo.mp4" autoPlay muted loop playsInline aria-hidden="true"></video>
<div className="dn-crin"><h2 className="vp-h2 vp-rv">Celebrating beyond the day? <em className="sw-serif">Events at Ayla</em></h2><a className="vp-btn" href="/weddings-events">Explore events<b><ArrowRight aria-hidden="true" /></b></a></div></section>

<section className="ex dn-wd" data-screen-label="While you explore"><div className="ex-head"><h2 className="vp-h2 vp-rv">While you <em className="sw-serif">explore</em></h2></div>
<div className="ex-row vp-rv" style={{ "--d": "1" } as React.CSSProperties}>
<a className="ex-p" href="/live"><img src="/assets/dt/mv-marina-3.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>01</small><h3>Invest in Ayla</h3><p>Freehold residences within the Ayla Oasis community.</p></div></a>
<a className="ex-p" href="/marina-village"><img src="/assets/dt/mv-marina-1.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>02</small><h3>Marina Village</h3><p>Berths, boardwalk shops and waterfront dining in one stretch.</p></div></a>
<a className="ex-p" href="/weddings-events"><img src="/assets/dt/whatson-fire.jpg" alt="" loading="lazy" /><span className="ex-go" aria-hidden="true"><ArrowUpRight aria-hidden="true" /></span><div className="ex-c"><small>03</small><h3>Wedding &amp; Events</h3><p>Beachfront and marina venues for weddings, conferences and celebrations.</p></div></a>
</div></section>


      </main>
      <Footer />
      <div className="vp-toast" id="vp-toast" role="status" />
    </div>
  )
}
