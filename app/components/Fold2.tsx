
export default function Fold2() {
  return (
    <>
<div id="f2wrap" style={{ position: "relative" }}>
<div id="fold2" style={{ position: "sticky", top: "0", overflow: "hidden", width: 1440, minHeight: "calc(100svh / var(--z, 1))", boxSizing: "border-box", background: "#ffffff", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif", display: "grid", gridTemplateColumns: "300px minmax(0, 1fr) 458px", columnGap: 40, gridTemplateRows: "auto", alignContent: "center", padding: "96px 64px" }}>
<div id="vbox" className="rv-img" style={{ position: "absolute", zIndex: "3", overflow: "hidden", willChange: "left,top,width,height" }}><video src="/assets/oasis.mp4" autoPlay muted loop playsInline aria-label="Ayla Oasis seaside video" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} /></div>
<svg id="clouds" aria-hidden="true" width="1440" height="820" viewBox="0 0 1440 820" style={{ position: "absolute", left: "0", top: "0", zIndex: "5", pointerEvents: "none" }}><defs><radialGradient id="puffG"><stop offset="0" stopColor="#000" stopOpacity="1" /><stop offset=".5" stopColor="#000" stopOpacity=".95" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient><radialGradient id="wispG"><stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient><radialGradient id="wispG2"><stop offset="0" stopColor="#e9f5f7" stopOpacity=".95" /><stop offset="1" stopColor="#e9f5f7" stopOpacity="0" /></radialGradient><filter id="cloudEdge" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="90" xChannelSelector="R" yChannelSelector="G" result="d" /><feGaussianBlur in="d" stdDeviation="6" /></filter><mask id="cloudHoles" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="820"><rect width="1440" height="820" fill="#fff" /><g id="puffs" filter="url(#cloudEdge)" fill="#000" /></mask></defs><rect width="1440" height="820" fill="#ffffff" mask="url(#cloudHoles)" /><g id="wisps" fill="#ffffff" filter="url(#cloudEdge)" /></svg>

<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignSelf: "center", width: 354, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}>
<div>
<h2 style={{ margin: "0", fontSize: 44, fontWeight: "600", lineHeight: "1.02", color: "#005f9b", letterSpacing: 0, fontStyle: "normal", fontFamily: "\"F37 Ginger\", \"Urbanist\", system-ui, sans-serif" }}><span style={{ display: "block" }}>Ayla Oasis,</span><span style={{ display: "block", fontFamily: "'Meno Banner','Cormorant Garamond',Georgia,serif", fontStyle: "italic", fontWeight: "500", letterSpacing: "-0.02em" }}>Seaside Living</span><span style={{ display: "block", fontFamily: "'Meno Banner','Cormorant Garamond',Georgia,serif", fontStyle: "italic", fontWeight: "500", letterSpacing: "-0.02em" }}>Reinvented</span></h2>

</div>
<div style={{ display: "flex", alignItems: "flex-end" }} />
</div><figure aria-hidden="true" style={{ visibility: "hidden", margin: "0 0 0 166px", justifySelf: "start", alignSelf: "center", width: 300, height: 300, overflow: "hidden", padding: "0", backgroundColor: "transparent" }}>

</figure>
<div style={{ alignSelf: "center", justifySelf: "end", width: 360, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
<p style={{ margin: "0", fontSize: 16, fontWeight: "400", lineHeight: "1.25", color: "#69747c" }}>Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written. Keep it calm, short and specific to the place.</p>
<p style={{ margin: "0", fontSize: 16, fontWeight: "400", lineHeight: "1.25", color: "#69747c" }}>A second paragraph can follow here to add a little more detail, such as what makes this part of the destination different from the others.</p>
<div style={{ display: "flex", gap: 14, alignItems: "flex-end", marginTop: 10 }}>
<svg width="84" height="97" viewBox="0 0 170 196" role="img" aria-label="Award badge placeholder">
<path d="M85 6 L160 49 L160 147 L85 190 L10 147 L10 49 Z" fill="none" stroke="#69747c" strokeWidth={4} />
<path d="M85 18 L150 55 L150 141 L85 178 L20 141 L20 55 Z" fill="none" stroke="#98a3ad" strokeWidth={1.5} />
<text x="85" y="100" textAnchor="middle" fontFamily="Urbanist, sans-serif" fontSize={20} fontWeight={500} fill="#69747c">AWARD</text>
</svg>
<svg width="84" height="97" viewBox="0 0 170 196" role="img" aria-label="Award badge placeholder">
<path d="M85 6 L160 49 L160 147 L85 190 L10 147 L10 49 Z" fill="none" stroke="#69747c" strokeWidth={4} />
<path d="M85 18 L150 55 L150 141 L85 178 L20 141 L20 55 Z" fill="none" stroke="#98a3ad" strokeWidth={1.5} />
<text x="85" y="100" textAnchor="middle" fontFamily="Urbanist, sans-serif" fontSize={20} fontWeight={500} fill="#69747c">AWARD</text>
</svg>
</div>
</div>
</div>
<div id="f2spacer" aria-hidden="true" style={{ height: 343 }} />
<section id="location" aria-label="Location" style={{ position: "relative", zIndex: "10", width: 1440, height: 820, boxSizing: "border-box", padding: "96px 64px", background: "color-mix(in srgb, var(--ayla-sky) 18%, #ffffff)", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif", display: "flex", flexDirection: "column", gap: 32 }}>
<div style={{ flex: "1", minHeight: "0", borderRadius: 8, overflow: "hidden" }}><img src="/assets/location-map.jpg" alt="Illustrated map of Ayla, Aqaba, with Hyatt Regency Aqaba Ayla highlighted beside the marina" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} /></div>
</section>
</div>
    </>
  )
}
