"use client"
import { useEffect } from "react"
import { Anchor, ArrowRight, ArrowUpRight, ChevronRight, Download, Flag, Mail, Phone, Sofa, Sunset, TreePalm, Umbrella, Utensils, Waves } from "lucide-react"
import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import detail from "../../lib/effects/detail"
import "../detail/detail.css"

export default function AzureBeachPage() {
  useEffect(() => detail(), [])
  return (
    <div id="page" style={{ position: "relative", width: 1440, background: "#ffffff" }}>
      <SiteHeader />
      <main className="vp" data-pg="azure-beach">


<section className="mv-hero py-hero az-hero" data-screen-label="Hero"><img className="py-s" src="/assets/azb/ab-1.jpg" alt="" /><img className="py-s" src="/assets/azb/ab-2.jpg" alt="" loading="lazy" /><img className="py-s" src="/assets/azb/ab-3.jpg" alt="" loading="lazy" /><img className="py-s" src="/assets/azb/ab-4.jpg" alt="" loading="lazy" /><img className="py-s" src="/assets/azb/ab-5.jpg" alt="" loading="lazy" />
<nav className="az-crumb" aria-label="Breadcrumb"><a href="/">Home</a><ChevronRight aria-hidden="true" /><a href="/live">Live</a><ChevronRight aria-hidden="true" /><b>Azure Beach Apartments</b></nav>
<div className="mv-hc"><h1 className="mv-h1"><span className="mv-w"><span style={{ "--i": "0" } as React.CSSProperties}>Azure Beach</span></span><span className="mv-w"><span style={{ "--i": "1" } as React.CSSProperties}><em className="sw-serif">Apartments</em></span></span></h1></div>
<div className="py-segs"><button type="button" className="py-seg" aria-label="Slide 1" style={{ "--hd": "6s" } as React.CSSProperties}><i></i></button><button type="button" className="py-seg" aria-label="Slide 2" style={{ "--hd": "6s" } as React.CSSProperties}><i></i></button><button type="button" className="py-seg" aria-label="Slide 3" style={{ "--hd": "6s" } as React.CSSProperties}><i></i></button><button type="button" className="py-seg" aria-label="Slide 4" style={{ "--hd": "6s" } as React.CSSProperties}><i></i></button><button type="button" className="py-seg" aria-label="Slide 5" style={{ "--hd": "6s" } as React.CSSProperties}><i></i></button></div></section>

<div className="az-main" data-screen-label="Overview">
<div className="az-left">
<p className="az-lead vp-rv">Own a rare beachfront apartment in Aqaba. Azure blends open living, coastal views, and direct access to Ayla&rsquo;s private beach &mdash; ideal for families, investors, and second-home buyers.</p>
</div>
<aside className="az-aside" aria-label="Quick facts"><div><span className="x-k">Starting from</span><div className="az-price"><em>JOD</em><span data-count="145000">145,000</span></div></div>
<dl className="x-dl"><div><dt>Unit size range</dt><dd>51 – 139 sqm</dd></div><div><dt>Bedrooms</dt><dd>1 to 2.5</dd></div><div><dt>Total units</dt><dd data-count="191">191</dd></div></dl>
<a className="vp-btn" href="#enquire" data-go="enquire">Enquire now<b><ArrowRight aria-hidden="true" /></b></a><a className="st-ghost" href="#"><Download aria-hidden="true" />Download brochure</a><a className="stay-link" href="#"><svg className="wa-i" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" /></svg>WhatsApp direct</a></aside>
</div>

<section className="az-body" data-screen-label="Amenities and units"><div className="az-amh"></div><ul className="az-am vp-rv"><li><Umbrella aria-hidden="true" /><span>Private beach access</span></li><li><Sunset aria-hidden="true" /><span>Sea-facing balconies</span></li><li><Sofa aria-hidden="true" /><span>Open living spaces</span></li><li><Waves aria-hidden="true" /><span>Coastal views</span></li><li><TreePalm aria-hidden="true" /><span>Beach club</span></li><li><Flag aria-hidden="true" /><span>Ayla Golf Club</span></li><li><Anchor aria-hidden="true" /><span>Marina Village</span></li><li><Utensils aria-hidden="true" /><span>Dining on your doorstep</span></li></ul>
<div className="az-uh" id="units"><div><h2 className="vp-h2 vp-rv">Choose your <em className="sw-serif">layout</em></h2></div></div>
<div className="az-ux vp-rv"><div className="az-ul"><button type="button" className="az-ub" data-k="1" data-name="1 Bedroom" data-min="51" data-max="62" aria-pressed="false"><span>1 Bedroom<small>51 – 62 sqm</small></span><ArrowRight aria-hidden="true" /></button><button type="button" className="az-ub" data-k="1.5" data-name="1.5 Bedroom" data-min="68" data-max="79" aria-pressed="false"><span>1.5 Bedroom<small>68 – 79 sqm</small></span><ArrowRight aria-hidden="true" /></button><button type="button" className="az-ub" data-k="2" data-name="2 Bedroom" data-min="88" data-max="112" aria-pressed="false"><span>2 Bedroom<small>88 – 112 sqm</small></span><ArrowRight aria-hidden="true" /></button><button type="button" className="az-ub" data-k="2.5" data-name="2.5 Bedroom" data-min="119" data-max="139" aria-pressed="false"><span>2.5 Bedroom<small>119 – 139 sqm</small></span><ArrowRight aria-hidden="true" /></button></div>
<div className="az-plan"><div className="az-pt"><div><strong data-un>1 Bedroom</strong></div><div className="az-sz">51 – 62<small>m&sup2;</small></div></div><div className="az-imgs"><figure className="az-slot has" data-slot="1"><img src="/assets/dt/az-plan-1.jpg" alt="Indicative bedroom plan 1" loading="lazy" /></figure><figure className="az-slot has" data-slot="2"><img src="/assets/dt/az-plan-2.jpg" alt="Indicative bedroom plan 2" loading="lazy" /></figure></div>
<div className="az-pb"><span><span data-ub>1 bedroom</span> &middot; Images indicative</span><a className="stay-link" data-enq href="#enquire">Enquire about this unit<ArrowRight aria-hidden="true" /></a></div></div></div>
</section>

<section className="az-gal" data-screen-label="Gallery"><div className="az-pin"><div className="az-gh"><h2 className="vp-h2">The <em className="sw-serif">gallery</em></h2></div><div className="az-gt"><figure className="az-gf"><div className="az-gi" style={{ width: "720px", height: "440px" }}><img src="/assets/azb/ab-2.jpg" alt="" loading="lazy" /></div><figcaption><span>Beachfront exterior</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "400px", height: "330px" }}><img src="/assets/azb/ab-3.jpg" alt="" loading="lazy" /></div><figcaption><span>Marina promenade</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "640px", height: "300px" }}><img src="/assets/azb/ab-4.jpg" alt="" loading="lazy" /></div><figcaption><span>Waterfront at dusk</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "360px", height: "440px" }}><img src="/assets/azb/ab-5.jpg" alt="" loading="lazy" /></div><figcaption><span>Aerial view</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "520px", height: "350px" }}><img src="/assets/azb/ab-1.jpg" alt="" loading="lazy" /></div><figcaption><span>Reflections at the marina</span></figcaption></figure><figure className="az-gf"><div className="az-gi" style={{ width: "680px", height: "420px" }}><img src="/assets/azb/ab-4.jpg" alt="" loading="lazy" /></div><figcaption><span>Terrace views</span></figcaption></figure></div><div className="az-gp"><i></i></div></div></section>

<section className="x-stagewrap" id="enquire" data-screen-label="Enquire"><div className="c2-stage x-stage"><img className="c2-bg" src="/assets/azb/ab-2.jpg" alt="" loading="lazy" />
<div className="x-sl"><h2 className="vp-h2 vp-rv">Enquire about <em className="sw-serif">Azure Beach Apartments</em></h2><p className="vp-rv" style={{ "--d": "1" } as React.CSSProperties}>Choose a unit type and the Ayla team will share availability, floorplans and payment options.</p></div>
<div className="c2-win vp-rv" style={{ "--d": "2" } as React.CSSProperties}><div className="c2-bar"><h2>Enquire now</h2><span>All fields required</span></div>
<form data-f noValidate>
<label className="c2-ln c2-half"><span className="c2-lb">Name</span><input type="text" required autoComplete="name" /></label>
<label className="c2-ln c2-half"><span className="c2-lb">Email</span><input type="email" required autoComplete="email" /></label>
<label className="c2-ln c2-half"><span className="c2-lb">Phone</span><input type="tel" required autoComplete="tel" /></label>
<label className="c2-ln c2-half c2-sel"><span className="c2-lb">Unit type</span><select id="az-unit"><option>1 Bedroom</option><option>1.5 Bedroom</option><option>2 Bedroom</option><option>2.5 Bedroom</option></select><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></label>
<p className="c2-agree">By submitting you agree to our <a href="#">Privacy policy</a>.</p>
<div className="c2-act"><button className="vp-btn" type="submit">Submit enquiry</button></div>
<div className="c2-msg" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Thank you. Your enquiry has been sent and the Ayla team will be in touch.</div>
</form></div></div></section>

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
