
export default function Stay() {
  return (
    <>
<div id="staywrap" style={{ position: "relative", zIndex: "10", width: 1440, height: 2320 }}>
<section id="stay" className="sw-pin" aria-labelledby="sw-h" style={{ position: "sticky", top: "0", width: 1440, height: 820, overflow: "hidden", background: "color-mix(in srgb, var(--ayla-sky) 22%, #ffffff)", fontFamily: "'F37 Ginger', 'Urbanist', system-ui, sans-serif", color: "#005f9b" }}>
<div className="sw-vlabel" aria-hidden="true">Stays &mdash; 2026</div>
<h2 id="sw-h" className="sw-h"><span>Stay</span> <em className="sw-serif">with us</em></h2>
<svg id="sw-clouds" aria-hidden="true" width="1440" height="820" viewBox="0 0 1440 820" style={{ position: "absolute", left: "0", top: "0", zIndex: "2", pointerEvents: "none" }}><defs><mask id="swCloudHoles" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="820"><rect width="1440" height="820" fill="#fff" /><g id="sw-puffs" filter="url(#cloudEdge)" fill="#000" /></mask></defs><rect x="0" y="200" width="1440" height="420" fill="#e9f5f7" mask="url(#swCloudHoles)" /><g id="sw-wisps" fill="#e9f5f7" filter="url(#cloudEdge)" /></svg>
<p className="sw-intro" id="sw-intro">Body copy goes here &mdash; one or two sentences of intro for this section. Replace with real words once the content is written.</p>
<div className="sw-copy" id="sw-copy"><a href="#" className="stay-link">Link to stay page<span aria-hidden="true">&rarr;</span></a></div>
<div id="sw-strip" className="sw-strip" role="list" aria-label="Properties" />
<div className="sw-badge" aria-hidden="true"><svg viewBox="0 0 120 120" width="120" height="120"><defs><path id="sw-circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text fontSize={11} fontWeight={500} fill="#005f9b"><textPath href="#sw-circ" textLength="286" lengthAdjust="spacing">BOOK DIRECT &middot; BEST RATE &middot; </textPath></text></svg><span className="sw-badge-dot" /></div>
</section>
</div>
    </>
  )
}
